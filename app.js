const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');
const User = require('./models/User');

const applicationPort = 3000;

// --- Server Settings --- //

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));

app.listen(applicationPort, () => {
    console.log('Running on '+applicationPort);
});


var validation = false;

// ----- Mappings ----- //


app.get('/documentation', (req, res) => {

     res.render('documentation');


});


app.get('/', (req, res) => {

  res.render('weather');

});

app.get('/login', (req, res) => {

      res.render('login', {valid: validation});

});


app.post('/user/getApiKey/newApiKey', (req, res) =>{

   var userEmail = req.param.email;


   if(userEmail === null || userEmail === undefined){
      res.redirect('/login');
      validation = true;
   }else{

   User.addUserKey(userEmail, function(key){

        res.render('apikey', {apikey: key});

   });
}

});







app.get('/getweather/city', (req, res) => {

   const apiKey = req.query.apikey;
   const city = req.query.city;

   User.findByKey(apiKey, function(call){
      if(call){





      }else{

         

      }

   });




  request();


});
