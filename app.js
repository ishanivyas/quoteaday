/**
 * Created by ishani on 4/6/16.
 */
var express = require("express");

var app=express();

/** get corresponds to http method */
app.get("/",function (req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.get("/weather",function (req,res) {
    res.sendFile(__dirname+"/weather.html");
});

var port = process.env.PORT || 8080;

app.listen(port,function() {
    console.log("Application is listenning on"+port);
});