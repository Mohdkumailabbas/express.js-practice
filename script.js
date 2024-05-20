
const express = require('express');
let users = [
    {
        name: "john",
        kidney: [{
            healthy: false
        }]
    },
    {
        name: "jane",
        kidney: [{
            healthy: true
        }]
    }
];

const app = express();
app.use(express.json());

app.get("/john", function(req, res) {
    const johnKidney = users[0].kidney;
    const numberOfKidney = johnKidney.length;
    let noOfHealthyKidney = 0;
    for (let i = 0; i < johnKidney.length; i++) {
        if (johnKidney[i].healthy) {
            noOfHealthyKidney = noOfHealthyKidney + 1;
        }
    }
    const noOfUnhealthyKidney = numberOfKidney - noOfHealthyKidney;
    res.json({
        numberOfKidney,
        noOfHealthyKidney,
        noOfUnhealthyKidney
    });
});

app.post("/john", function(req, res) {
    const isHealthy = req.body.ishealthy;
    users[0].kidney.push({
        healthy: isHealthy
    });
    res.json({});
});

app.listen(3000);
