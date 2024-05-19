const express = require("express");
const app = express();

//Utility middleware 
//Logger - can be saved in a database
app.use((req, res, next) => {
    req.responseTime = new Date(Date.now()).toDateString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    return next();
});

app.get("/", (req, res)=>{
    res.send("This is root");
});

app.get("/random", (req, res)=>{
    res.send("random page");
});



app.listen(3000, ()=>{
    console.log("Server started");
});

