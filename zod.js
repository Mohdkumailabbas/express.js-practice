const zod = require("zod");
function validate(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
     if (response.success){
        console.log("validation successful")
     }else{
        console.log("somthin went wrong")
     }
}
validate([1,2,3,4,5]);
validate(["1",2,3,]);
function check(obj){
   const schema = zod.object({
      email:zod.string().email(),
      password:zod.string().min(8)
   })
   const response =schema.safeParse(obj);
   if (response.success){
      console.log("ACESS GRANTED")
   }else{
      console.log("PLEASE CHECK EMAIL AND PASSWORD")
   }
}
check({
   email:"abcd@gmsil.com",
   password:"123456789"
});
check({
   email:"abcd@gmsil",
   password:"123456789"
});
