const express =require("express");
const app=express();
const usermodel= require('./zod');
 app.get("/",(req,res)=>{
    res.send("hey");
 })
 app.get("/create",async (req,res)=>{
     const createdata = await usermodel.create({
        name:"aka",
        email:"anan@gmail.com",
        password:"12333"

    })
    res.json(createdata);
 })

 app.listen(3000);

 const mongoose =require("mongoose");
 mongoose.connect(`mongodb://127.0.0.1:27017/practice`)
 const UserSchema = new mongoose.Schema({
     name:"string",
     email:"string",
     password:"string"
 });
 mongoose.model("user",UserSchema);
 // const user = new User ({
 //     name:`Spidy`,
 //     email:`spidy78@gmail.com`,
 //     password:`12345678`
 // })
 // user.save();
 
 module.exports=mongoose.model("user",UserSchema);

 
































// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";
// const app = express();
// app.use(express.json());
// const mongoose =require("mongoose");
// mongoose.connect("mongodb+srv://cluster0.rff7edc.mongodb.net/user_app")
// const User =mongoose.model('Users',{
//     name:"string",
//     email:"string",
//     password:"string"
// });
// // Sign-in route to generate a JWT token
// app.post("/signin", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const body = req.body.name;
//     const existinguser=await.findOne({email:username});
//      if(existinguser){
//         return res.status(404).send("username exists");
//      }
//      const user = new User ({
//         name:`Spidy`,
//         email:`spidy78@gmail.com`,
//         password:`12345678`
//     })
//     user.save();
//     res.json({
//         "msg":"user created succesfully"
//     })

//     // Check if the user exists
//     // if (!userExists(username, password)) {
//     //     return res.status(403).json({
//     //         msg: "User does not exist"
//     //     });
//     // }

//     // Generate a JWT token
//     const token = jwt.sign({ username: username }, jwtPassword);
//     return res.json({
//         token
//     });
// });

// // Route to get all users, requires a valid JWT token
// app.get("/users", (req, res) => {
//     const token = req.headers.authorization;

//     try {
//         // Verify the token
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;

//         // Send the list of all users
//         res.json({
//             users: allUsers
//         });
//     } catch (err) {
//         // Send an error response if the token is invalid
//         return res.status(401).json({
//             msg: "Invalid token"
//         });
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });



// //how to make server using node js
// const { log } = require("console");
// const fs= require("fs");
// const http=require("http");
// const url = require("url");
// const myserver=http.createServer((req,res)=>{
//     //saving client date when he logged
//     const log=`${Date.now()}: ${req.url} NEW REQ RECIEVEDNEW REQ RECEIVED\n`
//     //parsing req(breaking down info)
//     const myurl=url.parse(req.url,true); 
//     console.log(myurl);
//     fs.appendFile("./text.txt",log, (err,data)=>{
//         console.log("new req recieved");
//         switch(myurl.pathname){
//             case '/': res.end("homepage");
//             break
            
//             case '/aboutus':
//                 const username =myurl.query.myname    
//             res.end(`hello ${username}`);
//             break
//             default:
//                 res.end("404 not found")        
//         }
//     });
    
  
// });
// myserver.listen(3000);