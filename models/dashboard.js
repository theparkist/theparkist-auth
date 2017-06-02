var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/theparkist";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var query = { username: /^d/ };
  db.collection("users").find(query).toArray(function(err, result) {
    if (err) throw err;

    console.log(result[0]['name']);

    db.close();
  });
}); 