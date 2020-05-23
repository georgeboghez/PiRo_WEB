const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb://radu:radu123@ds119024.mlab.com:19024/heroku_gbmt6hp8';
const dbName = 'heroku_gbmt6hp8';
const collName = 'pisa_results';

var client;
var db;

module.exports = {
  find: async (query) => {
    try {
      if(!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if(!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).find(query);
    }catch(err) {
      console.log("Error: " + err.message);
    } //finally {
    //   client.close();
    // }
  },
  count: async (query) => {
    try {
      if(!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if(!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).countDocuments(query)
    }catch(err) {
      return err.message
    } //finally {
    //   client.close();
    // }
  }

}