const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const request = require('request');

const applicationPort = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));


app.listen(applicationPort, () => {

    console.log('Running on '+applicationPort);

});


app.get('/', (req, res) => {

  res.render('weather');

});
