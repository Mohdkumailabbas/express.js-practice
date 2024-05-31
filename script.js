const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();
app.use(express.json());

const allUsers = [
    {
        username: "codewithme@gmail.com",
        password: "123",
        name: "cody"
    },
    {
        username: "kkkk@gmail.com",
        password: "1023",
        name: "kkkk"
    },
    {
        username: "orry@gmail.com",
        password: "1253",
        name: "orry"
    }
];

// Function to check if the user exists
function userExists(username, password) {
    let userExists = false;
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].username === username && allUsers[i].password === password) {
            userExists = true;
            break;
        }
    }
    return userExists;
}

// Sign-in route to generate a JWT token
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user exists
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User does not exist"
        });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

// Route to get all users, requires a valid JWT token
app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try {
        // Verify the token
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // Send the list of all users
        res.json({
            users: allUsers
        });
    } catch (err) {
        // Send an error response if the token is invalid
        return res.status(401).json({
            msg: "Invalid token"
        });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
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