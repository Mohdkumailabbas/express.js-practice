const http= require("http");
const express = require("express");
const app=express();
app.get("/",(req,res)=>{
     return res.end("hey love!");
})
app.get("/about",(req,res)=>{
     return res.end("hey sir!"+"hey"+req.query.name);
})
const myserver=http.createServer(app);

myserver.listen(3000, () => {
    console.log("Server is listening on port 3000");
});













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