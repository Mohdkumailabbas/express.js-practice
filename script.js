const { error } = require("console");
const users= require("./MOCK_DATA.json");
const express = require("express");
const app=express();
const fs = require("fs");
//middleware
app.use(express.urlencoded({extended:false}));
//listing  all users 
//learning how to use /api
    app.get("/api/users",(req,res)=>{
      console.log("new req recieved");
      return res.json(users);
 });
// //finding user by user id
app.route("/api/users/:id")//using mutlpe method on one route
.get((req,res)=>{
     const id=Number(req.params.id);//getting id
     const user =users.find((user)=> user.id===id);
     return res.json(user);
});
app.post("/api/users",(req,res)=>{
    const body= req.body;
    users.push({...body,id: users.length+1});//pushing data recieved by user(array concept)
    fs.writeFile(`./MOCK_DATA.json`, JSON.stringify(users),(err)=>{
        return res.json({status: "pending"});
    })
});
    
    
  


app.listen(3000, () => {
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