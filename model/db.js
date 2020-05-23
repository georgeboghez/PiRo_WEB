const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb://radu:radu123@ds119024.mlab.com:19024/heroku_gbmt6hp8';
const dbName = 'heroku_gbmt6hp8';
const collName = 'pisa_results';

var client;
var db;

module.exports = {
  connect: async () => {
    try {
      if(!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
      }
      if(!db) {
        db = client.db(dbName);
      }
      console.log('Successfully connected to the database\n')
    }
    catch(err) {
      throw err;
    }
  },
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
      throw err;
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
      throw err;
    } //finally {
    //   client.close();
    // }
  }

}