//npm package to give our server useful functionallity 
var express = require("express");
var path = require("path");
//tells node we are making an "epress" server 
var app = express();

//setting up a port depployable to heroku
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/public')));

//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//point the server to the route files
require(path.join(__dirname, "/app/routing/apiRoutes"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app);

//starting the server
app.listen(PORT, function(){
    console.log(`App is listening on PORT: ${PORT}`);
})