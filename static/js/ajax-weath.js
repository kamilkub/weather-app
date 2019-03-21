$('button').on('click', function() {

  var cityName = $('.cityName').val();

  if (cityName != null) {

    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&&appid=16c12b13978a32ff973dc4312a2a7746', function(data, status) {


      console.log(data);

      if (status === 404) {
        console.log('blad');
      }

      if (status == "success") {

        console.log(data.main.temp);

        var temp = Math.floor(data.main.temp - 273.15);
        var wind = Math.floor(data.wind.speed*0.001*36/1*100);

        if (temp >= 15) {
          $('img').attr('src', '/img/sun.png');

        } else {
          $('img').attr('src', '/img/cloud.png');
        }
        $('.temperature').css('display', 'block');
        $('.temp').text(temp);
        $('.wind').text(wind+" km/h");
        $('.city').text(cityName.toUpperCase());
        $('.cityName').val("");

        sayDegress(cityName, temp, wind);

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
    msg.text = "W " + city + "ie" + " jest " + numb + " stopni i wiatr o prędkości "+wind+" kilometrów na godzinę";
  } else if (bowser.name === "Opera") {
    msg.lang = "pl-PL";
    msg.text = "W " + city + "ie" + " jest " + numb + " stopni i wiatr o prędkości "+wind+" kilometrów na godzinę";
  }


  speechSynthesis.speak(msg);


}


// snowflake
// sunny
// rain
// cloud
