const express = require('express') ;
const app = express() ;

app.get('/user', (req, res) => {
    res.send({ "id": 11, "name": "admin" }) ;
}) ;

app.listen(5000, () => {
    console.log('Expess Server is Running at Port No 500..') ;
}) ;