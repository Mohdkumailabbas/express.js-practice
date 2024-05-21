//how to make server using node js
const { log } = require("console");
const fs= require("fs");
const http=require("http");
const myserver=http.createServer((req,res)=>{
    //saving client date when he logged
    const log=`${Date.now()}:NEW REQ RECIEVED/n`
    fs.appendFile("./text.txt",log, (err,data)=>{
        console.log("new req recieved");
        res.end("hello from server");
    });
    
  
});
myserver.listen(3000);