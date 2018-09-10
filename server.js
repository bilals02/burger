var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;

var app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

//parse application / x-www-form-urnencoded
app.use(bodyParser.urlencoded({ extended:true}));
app.set("view engine", "handlebars");

// parse application/json
app.use(bodyParser.json());
//set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main"}));
app.set ("view engine", "handlebars");
app.use(methodOverride("_method"));

//Import routes and give the server access to them
var routes = require ("./controllers/burgers_controllers.js");

app.use(routes);

//Start our server so that it begin listening to client requests
app.listen(PORT, function () {
    //log (server-side) when our server has started
    console.log ("Server listening on http://localhost:" + PORT);
})