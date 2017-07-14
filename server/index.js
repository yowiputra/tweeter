"use strict";

// Basic express setup:
const express       = require("express");
const bodyParser    = require("body-parser");
const MongoClient   = require("mongodb").MongoClient;
const dotenv        = require('dotenv').config();
const MONGODB_URI   = process.env.MONGODB_URI;
const app           = express();

app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.listen(app.get('port'), () => {
    console.log("Example app listening on port " + app.get('port'));
  });
});
