const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res)=>{
    res.render("login");
});



app.listen(3000, ()=>{
    console.log("port connected");
});

