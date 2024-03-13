const express = require('express')
const fareUtlis = require('./fareUtiles')
const app = express();

app.use(express.urlencoded({extended : true}))
app.use('/', express.static(__dirname + '/public'))


app.post('/calcFare', (req, res)=>{
    let km = req.body.km;
    let min = req.body.min;
    let fare = fareUtlis.fareCalc(km, min);
    res.send({fare: fare})
})

app.get('/rates', (req, res)=>{
    res.send(fareUtlis.rate);
})

app.listen(4040, ()=>{
    console.log(`Server is running on http://localhost:4040`)
})

