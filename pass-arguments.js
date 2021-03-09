var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get("/", function (req, res) {
  const argument = process.argv.slice(2);
  
  res.render(__dirname + "/pass-arguments.html", { argument: argument[0] });
});

app.listen(3000);
// how to test node pass-arguments.js one two=three four
// process.argv.forEach(function (val, index) {
//   console.log(index + ': ' + val);
// });
