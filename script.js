
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
   app.get("/john", function(req,res){
    const johnkidney=users[0].kidney;
    const numberofkidney =johnkidney.length;
    let noofhealthykidney=0;
    for (let i=0;i<johnkidney.length;i++){
      if(johnkidney[i].healthy){
        numberofkidney=numberofkidney+1
      }
    }
    const noofunhealthykidney= numberofkidney-noofhealthykidney;
    res.json({
      numberofkidney,
      noofhealthykidney,
      noofunhealthykidney
    })
   })
   app.listen(3000);
  
