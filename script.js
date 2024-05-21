//how to make server using node js
const http=require("http");
const myserver=http.createServer((req,res)=>{
    console.log("new req recieved");
    res.end("hello from server");
});
myserver.listen(3000);