const express = require('express') ;
const app = express() ;

app.get('/user', (req, res) => {
    res.send({ "id": 11, "name": "admin" }) ;
}) ;

app.get('/login', (req, res) => {
    res.send("REPLY FROM LOGIN API");
});

app.listen(5000, () => {
    console.log('Expess Server is Running at Port No 500..') ;
}) ;