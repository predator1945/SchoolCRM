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
  
  

  app.get("/subjects", function(req, res) {
    
    con.query("SELECT * FROM subject", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  });

  app.post("/subjects", function(req, res) {
   // "INSET INTO subject (description) VALUES (?);"
    con.query("INSERT INTO subject (description) VALUES (?);", req.body.description , function (err, result, fields) {
      if (err) throw err;
      console.log(req.body);
      res.end("OK!");
    });
  });

  app.get("/pupils", function(req, res) {
    
    con.query("SELECT * FROM pupil", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  });

  app.post("/pupils", function(req, res) {
    
    con.query("INSERT INTO pupil (first_name, last_name, pesel, card_number) VALUES (?,?,?,?);", 
    [req.body.first_name, req.body.last_name, req.body.pesel, req.body.card_number] , 
      function (err, result, fields) {
      if (err) throw err;
      console.log(req.body);
      res.end("OK!");
    });
  });

  app.get("/parents", function(req, res) {
    
    con.query("SELECT * FROM parent", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  });

  app.post("/parents", function(req, res) {
    
    con.query("INSERT INTO parent (first_name, last_name, phone_number, address) VALUES (?,?,?,?);", 
    [req.body.first_name, req.body.last_name, req.body.phone_number, req.body.address] , 
      function (err, result, fields) {
      if (err) throw err;
      console.log(req.body);
      res.end("OK!");
    });
  });

  app.get("/classes", function(req, res) {
    
    con.query("select * from class left join teacher on counsellor_id = pesel;", function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  });

  


app.get("/classrooms", function(req, res) {
  
  con.query("SELECT * FROM classroom", function (err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

app.post("/classrooms", function(req, res) {
  
  con.query("INSERT INTO classroom (classroom_id, name) VALUES (?,?);", 
  [req.body.classroom_id, req.body.name] , 
    function (err, result, fields) {
    if (err) throw err;
    console.log(req.body);
    res.end("OK!");
  });
});

app.get("/grades", function(req, res) {
  
  con.query("select grade.id, first_name, last_name, date_of_reciv, date_of_reciv, grade, pupil.card_number, description"
     + " from grade left join pupil on grade.card_number = pupil.card_number left join subject on subject_id = subject.id", 
     function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

app.get("/lessons", function(req, res) {
  
  con.query("select * from lesson", 
     function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

app.get("/teachers", function(req, res) {
  
  con.query("select * from teacher;", 
     function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
});

app.post("/teachers", function(req, res) {
  
  con.query("INSERT INTO teacher (first_name, last_name, pesel) VALUES (?,?,?);", 
  [req.body.first_name, req.body.last_name, req.body.pesel] , 
    function (err, result, fields) {
    if (err) throw err;
    console.log(req.body);
    res.end("OK!");
  });
});

app.delete('/:route/:id', (req,res) => {
  
    console.log(req.params.route + "   " + req.params.id);
    res.end("OK!");
 
});
app.put('/:route/:id', (req,res) => {
  
    console.log("put " + req.params.route + " " + req.params.id + " values: " + JSON.stringify(req.body));
    res.end("OK!");
 
});

app.delete('/subjects/:id', (req,res) => {
  con.query("DELETE FROM subject WHERE id = ?;", 
  [req.params.id], 
    function (err, result, fields) {
    if (err) {
      console.log(err);
      res.end("ERROR!");
    } 
    console.log(req.params.id);
    res.end("OK!");
  });
});

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));