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
var db=mongoose.connection;

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
    var name = req.body.username;
    console.log(seatsNeeded);

    var ts = 80;
    var oc = 10;
    var rem =  parseInt(ts) -  (parseInt(oc) + parseInt(seatsNeeded));
    var d = {
    
        totalSeats: ts,
        occupied:oc,
        need: seatsNeeded,
        remain :rem,
        user : name
    }

    
se = await data.create({seatsNeeded})
    db.collection('dataModel').insertOne(d,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
            
    });

  

    res.render('booked.ejs',{
        occ:  seatsNeeded
    });

})


const port = 4000;
app.listen(port,function(){
    console.log(`server running on ${port}`);
})

