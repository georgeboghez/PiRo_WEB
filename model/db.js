// db.js
const MongoClient = require('mongodb').MongoClient;

let connection, database;

var connect = function (next) {
    // already established? => return connection
    if (database) return next(undefined, database);

    // establish connection
    MongoClient.connect("mongodb://radu:radu123@ds119024.mlab.com:19024/heroku_gbmt6hp8", (err, db) => {
      if (err) return next(err);

      // save connection
      connection = db;

      // connect to database
      database = db.db('heroku_gbmt6hp8');

      // call callback
      next(undefined, database);
    });
  }

var disconnect = function (callback) {
  if (!connection) return callback();
    // close connection
    connection.close();
    callback();
}


module.exports = {
  connect: connect,
  disconnect: disconnect
}