"use strict";

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";


MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  //we have a connection to the test-tweets db

console.log(`Connected to mongodb: ${MONGODB_URI}`);

  function getTweets(cb) {
    db.collection('tweets').find().toArray(cb);
    }


  getTweets((err, tweets) => {
    if (err) throw err;

    console.log('logging each tweet: ');

    for (let tweet of tweets) {
      console.log(tweet);
    }



  db.close();
  });

//At the end we close the connection:
});