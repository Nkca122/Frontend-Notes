const express = require("express");
const app = express();
const path = require("path");

let port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
})