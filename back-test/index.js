const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000;
var app                 = express();
var bodyParser          = require("body-parser")
var mysql               = require('mysql');

  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')



  
  app.set("view engine", "ejs");
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  
  
var mysqltorest  = require('mysql-to-rest');
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "trudne12",
    database: "db"
  });
  
  // con.connect(function(err) { if (err) throw err;   });
//     var con = mysql.createConnection({
//   host     : 'eu-cdbr-west-01.cleardb.com',
//   user     : 'b13249679a24c9',
//   password : '16ab400e###',
//   database : 'heroku_8ef1daef416bade'
// });

con.connect(function(err) { if (err) throw err;   });
  
  app.get('/', (req, res) => res.render('pages/index'))
  
  var api = mysqltorest(app,con);

 

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));