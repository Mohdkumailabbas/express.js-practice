
const express= require('express')
 const users =[
  {
     name:"john",
     kidney:[{
      healthy:false
     }]
  },
   {
     name:"jane",
     kidney:[{
      healthy:true
     }]
   }
   ]
 const app= express();
 app.get("/john",function(req,res){
  const johnkidney=users[0].kidney;
   console.log(johnkidney);
   res.send(johnkidney)
 })
 
 app.get("/jane",function(req,res){
  const janekidney=users[1].kidney;
   console.log(janekidney);
   res.send(janekidney); 
 })
 app.listen(3000);
