var express = require('express');
var router = express.Router();
var axios = require('axios');
var mongoose = require('mongoose')
var dotenv = require('dotenv').config()

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', function (req, res, next) {
  console.log(process.env.WEATHER_API)
  res.send(process.env.WEATHER_API)
});

router.get('/weather', function (req, res, next) {
 
  axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.WEATHER_API}`
  })
    .then(function (response) {
      res.send(response.data)
  });
  
  
  
});

router.get('/db', function (req, res, next) {
  mongoose.connect(process.env.MONGODB).then(function (response) {
  res.send("Conectado a la base de datos")
  }).catch(function (error) { 
    res.send("Error al conectar a la base de datos")
  })

 
});


module.exports = router;
