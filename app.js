var express = require("express"),
http = require("http"),
app = express();

const AWSport = process.env.port || 3000;
app.use(express.static(__dirname + "/templates"));
http.createServer(app).listen(AWSport);
console.log("Connection to the login screen has been established")
