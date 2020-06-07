const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb://radu:radu123@ds119024.mlab.com:19024/heroku_gbmt6hp8';
const dbName = 'heroku_gbmt6hp8';
const collName = 'pisa_results';
const countriesCollName = 'worldwide_ranking';

var client;
var db;

module.exports = {
  connect: async () => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      console.log('Successfully connected to the database\n')
    } catch (err) {
      throw err;
    }
  },
  find: async (query, collName = 'pisa_results') => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).find(query);
    } catch (err) {
      throw err;
    }
  },
  insert: async (query, collName) => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      console.log(query)
      return db.collection(collName).insertOne(query);
    } catch (err) {
      throw err;
    }
  },
  findOne: async (query, projection, collName = 'pisa_results') => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).findOne(query, projection);
    } catch (err) {
      throw err;
    } //finally {
    //   client.close();
    // }
  },
  count: async (query) => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).countDocuments(query)
    } catch (err) {
      throw err;
    } //finally {
    //   client.close();
    // }
  },
  distinct: async (field) => {
    try {
      if (!client) {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      }
      if (!db) {
        db = client.db(dbName);
      }
      return db.collection(collName).distinct(field)
    } catch (err) {
      throw err;
    } //finally {
    //   client.close();
    // }
  }

}