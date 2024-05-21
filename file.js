const fs =require("fs");

//fs.writeFileSync("./test.txt","hello");
//readin file syncronusly
//const result = fs.readFileSync("./test.txt","utf-8");
  //  console.log(result);
//reading file asycronusly
// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });

//how to append?
//fs.appendFileSync("./test.txt", `hey there`);
//fs.appendFileSync("./test.txt", "hey there");
// how to make duplicate file
// fs.copyFileSync("./test.txt","./copy.txt");
//how to delte some file
//fs.unlinkSync("./copy.txt");
// how to check stats
// console.log(fs.statSync("./test.txt"));
//how to create folder
//fs.mkdirSync("may il");
// rmdirsync deltes empty dir, fs.rmsync delet non empty dir
fs.rmdirSync("./may il");