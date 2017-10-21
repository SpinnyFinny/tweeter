"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      //mongo sort() -1 is decending; 1 is ascending
      db.collection('tweets').find().sort({"created_at": -1 }).toArray(callback);
    },

    registerNewUser: function(newUser, callback) {
      db.collection('users').insertOne(newUser, callback)
    }
  };
}
