const express = require("express");
const app = express();

let port = 8080;
app.listen(8080, ()=>{
    console.log("Server is listening");
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    const instaData = require("./data.json")
    let { username } = req.params;
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data} );
    } else {
        res.render("error.ejs");
    }
    
})