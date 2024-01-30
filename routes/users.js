var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config()

var axios = require('axios')

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


module.exports = router;
