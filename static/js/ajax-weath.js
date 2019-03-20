$('button').on('click', function() {

  var apiKey = "16c12b13978a32ff973dc4312a2a7746";

  var cityName = $('.cityName').val();

  if (cityName != null) {

    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&&appid=' + apiKey, function(data, status) {


      console.log(data);

      if (status === 404) {
        console.log('blad');
      }

      if (status == "success") {

        console.log(data.main.temp);

        var temp = Math.floor(data.main.temp - 273.15);

        if (temp >= 15) {
          $('img').attr('src', '/img/sun.png');

        } else {
          $('img').attr('src', '/img/cloud.png');
        }
        $('.temperature').css('display', 'block');
        $('.temp').text(temp);
        $('.wind').text(data.wind.speed+" km/h");
        $('.city').text(cityName.toUpperCase());
        $('.cityName').val("");

        sayDegress(cityName, temp, data.wind.speed);

      } else {

        alert('You have provided bad data!');

      }


    });


  }


});


function sayDegress(city, numb, wind) {



  const msg = new SpeechSynthesisUtterance();

  msg.rate = 0.8;

  if (bowser.name === "Firefox") {
    msg.text = "In " + city + " there is " + numb + " degrees and wind with speed of "+wind+" kilometers per hour";
    msg.lang = "en-US";
  } else if (bowser.name === "Chrome") {
    msg.lang = "pl-PL";
    msg.text = "W " + city + "ie" + " jest " + numb + " stopni i wiatr o prędkości "+wind+" kilometra na godzinę";
  } else if (bowser.name === "Opera") {
    msg.lang = "pl-PL";
    msg.text = "W " + city + "ie" + " jest " + numb + " stopni i wiatr o prędkości "+wind+" kilometra na godzinę";
  }


  speechSynthesis.speak(msg);


}


// api key: 16c12b13978a32ff973dc4312a2a7746

// snowflake
// sunny
// rain
// cloud
