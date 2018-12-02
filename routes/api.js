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
var fetch = require('node-fetch');

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
      var stockData = {};
      var stockPrice;
      console.log(stock);
      db.collection('stock-checker').update({stock: stock}, {$inc: {likes: 1}}, {upsert: true}, (err, stock) => {
        
      });
    
      fetch(`https://api.iextrading.com/1.0/stock/${stock}/book`)
        .then(res => res.json())
        .then(data => stockPrice = data.quote.latestPrice)
        .then(() => console.log({stockData: {stock: stock, price: stockPrice.toString()}}))
 
    });
    
};
