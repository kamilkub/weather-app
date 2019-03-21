const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');
const User = require('./models/User');

const applicationPort = 3000;


// --- Server Settings --- //

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("static"));

app.listen(applicationPort, () => {
  console.log('Running on ' + applicationPort);
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



app.post('/user/getApiKey/newApiKey', (req, res) => {

  var userEmail = req.body.email;

  console.log(userEmail);

  if (userEmail === null || userEmail === undefined) {
    res.redirect('/login');
    validation = true;
  } else {

    User.addUserKey(userEmail, function(key) {

      res.render('apikey', {
        apikey: key
      });

    });
  }

});




// 3009eef14e3e219bc8453bd385


app.get('/getweather/data', (req, res) => {

  var apiKey = req.query.apikey;
  var city = req.query.city;

  User.findByKey(apiKey, function(call) {

    if (call) {

      var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&&appid=16c12b13978a32ff973dc4312a2a7746";

      request(url, function(err, response, body) {


        if (response.statusCode >= 400) {
          res.status(404);
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.parse(JSON.stringify(body)));
        }


      });

    } else {

      res.sendStatus(401);

    }


  });


});
