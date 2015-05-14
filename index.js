// requirements
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var _ = require("underscore")
  app = express();

app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
var views = path.join(process.cwd(), "views");

  
 var phrases = [

  {id: 0, word: "algorithm", definition: "instructions to doing something"},
  {id: 1, word: "callback", definition: "a function that is being sent"},
  {id: 2, word: "abstraction", definition: "high level understnading"},
  {id: 3, word: "unix", definition: "Operating System"},
  {id: 4, word: "GUI", definition: "user interface"}

];

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send(path.join(_dirname + '/public/views/index.html'));
});

app.get("/phrases", function (req, res) {
    // send back the response: 'Hello World'
    res.send(JSON.stringify(phrases));
});


// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});