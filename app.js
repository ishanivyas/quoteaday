/**
 * Created by ishani on 4/6/16.
 */
var express = require("express");

var app=express();

var quotes = [ "The best preparation for tomorrow is doing your best today.",
    "I can resist everything except temptation.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Either you run the day or the day runs you."];

var show_quotes = quotes[Math.floor(Math.random() * quotes.length)];


//app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

/** get corresponds to http method */

app.get("/getQuote",function (req,res) {
    res.json({ msg:show_quotes });
//    res.sendFile(__dirname+"/index.html");
});

app.get("/weather",function (req,res) {
    res.sendFile(__dirname+"/weather.html");
});

var port = process.env.PORT || 8080;

app.listen(port,function() {
    console.log("Application is listenning on...."+show_quotes);
});