//how to make server using node js
const { log } = require("console");
const fs= require("fs");
const http=require("http");
const myserver=http.createServer((req,res)=>{
    //saving client date when he logged
    const log=`${Date.now()}: ${req.url} NEW REQ RECIEVEDNEW REQ RECEIVED\n`
    fs.appendFile("./text.txt",log, (err,data)=>{
        console.log("new req recieved");
        switch(req.url){
            case '/': res.end("homepage");
            break
            case '/aboutus':res.end("hello i am a webdevloper");
            break
            default:
                res.end("404 not found")        
        }
    });
    
  
});
myserver.listen(3000);