/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});
var db;

module.exports = function (app) {
  
  MongoClient.connect(CONNECTION_STRING, function(err, database) {
      if(err) {
        console.log(err);
      }
      console.log('Connected...');
      db = database;
  });

  app.route('/api/stock-prices')
    .get(function (req, res){
      var stock = req.query.stock.toUpperCase();
      
      console.log(stock);
      //res.json({stock: stock});
    });
    
};
