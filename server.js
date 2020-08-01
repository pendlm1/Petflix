var express = require("express"),
http = require("http"),
app = express();

const AWSport = 8080 //process.env.port;
app.use(express.static(__dirname + "/templates"));
http.createServer(app).listen(AWSport);
console.log("Connection to the login screen has been established",AWSport)
