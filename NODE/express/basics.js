const express = require("express");
const app = express();

let port = 8000;
app.listen(port, ()=>{
    console.log("Server is listening at port", port);
})

app.use((req, res)=>{
    console.log("Request received");
    // console.log(req);

    res.send("This is a basic response");
    // res.send("<h1>This is a html respons</h1>");
    // res.send({
    //       name: "Nikunj",
    //       class: "13"  
    // }); 
    //To send a json object


})