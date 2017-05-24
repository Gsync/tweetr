"use strict";

const MongoClient   = require('mongodb').MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter" //tweeter is the database name


//Mongodb connection paramenters


module.exports = function dbconnect() {


  MongoClient.connect(MONGODB_URI, (err, db) => {
              if (err) {
                console.log(`Failed to connect: ${MONGODB_URI}`);
                throw err;
              } return db;
            console.log(`Connected to mongodb: ${MONGODB_URI}`);

            });
}

