const express = require("express");
const app = express();
const path = require("path");

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

let port = 8000;
let data = [];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"db",
    password:"Nkca@03032005"
});

app.listen(port, ()=>{
    console.log(`The server is active on ${port}`);
})

//home route
app.get("/", (req, res)=>{
let count;
    try{
        connection.query("SELECT count(*) FROM user" , (err, result) => {
            if(err) throw err;
            count = result[0]["count(*)"];
            console.log(count);
            res.render("home.ejs",{count});
        })
    } catch(err) {
        console.log(err);
        res.send("Error");
    }
    

});

app.get("/user",(req, res)=>{
    try{
        connection.query("SELECT id, username, email FROM user" , (err, result) => {
            if(err) throw err;
            // console.log(result);
            res.render("showusers.ejs", {result} );

        })

    }catch (err) {
        console.log(err);
        res.send("Error");
    }
});

app.get("/user/:id/edit", (req,res)=>{
    let {id} = req.params;
    connection.query(`SELECT id,username,email FROM user where id = '${id}' `, (err, result)=>{
        try{
            if(err) throw err;
            res.render("edituser.ejs", {result});
        } catch (err) {
            console.log(err);
            res.send("Error");
        }
    })
});



// let getUser = () => {
//     return [
//       faker.datatype.uuid(),
//       faker.internet.userName(),
//       faker.internet.email(),
//       faker.internet.password()
//     ];
// }

// for(let i = 0; i<100; i++){
//     data.push(getUser());
// }

//     try{
//         connection.query("SELECT id, username, email FROM user", (err, result)=>{
//             if(err) throw err;
//             console.log(result);
//         })
//     } catch (err) {
//         console.log(err);
//     }




// console.log(getUser());


