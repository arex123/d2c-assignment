const express = require('express');
const path =require('path');
const mongoose = require('mongoose');
const data = require('./models/data')

var app = express();


console.log(data);

var bodyParser = require('body-parser');


var engine = require('consolidate');
const { json } = require('body-parser');



mongoose.connect('mongodb://localhost/seatBook')

app.set('views', __dirname + '/public');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/',function(req,res){
    res.render('index.html');
});

app.post('/getData',async (req,res) => {
    var seatsNeeded =req.body.finput;

    console.log(seatsNeeded);

    var d = {
        TotalSeats: T
    }
    const response = await data.create({seatsNeeded})

    console.log(response)

    res.render('booked.ejs',{
        occ:  seatsNeeded
    });

})

// app.get('/booked',function(req,res){
//     // res.render('booked.html');
//     res.render('booked.html');

// })


const port = 4000;
app.listen(port,function(){
    console.log(`server running on ${port}`);
})

