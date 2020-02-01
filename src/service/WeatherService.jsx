import React from 'react';
import axios from 'axios';

const WeatherService = {
  
      getWeatherByCityName: function(cityName) {

        var weatherData = [];

        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" +cityName + "&&appid=16c12b13978a32ff973dc4312a2a7746")
        .then(function (response){
          if(response.status === 200) {
            weatherData.push(response.data);

           } else if(response.status === 404){
            weatherData.push({
              type: 404,
              error: "I cannot find such town. Must be a shithole!"
            });
          } else{
            // console.log(response.status);
          }

        }).catch(function (error){
          weatherData.push({
            type: 404,
            error: "I cannot find such town. Must be a shithole!"
          });
        });

        return weatherData;

      },

      getFiveDayForeCast: function () {

        axios.get('')
        .then(function (response) {
          return response;
        }).catch(function (error) {
             console.log(error);
        });

      }

}


export default WeatherService;


