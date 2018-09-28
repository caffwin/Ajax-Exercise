"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
  // var status = results;
  $('#fortune-text').html(results);
  console.log('Yay, this works!');

}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function replaceWeather(results) {
  $('#weather-info').html(results['forecast'] + ' ' + results['temp']);
  console.log(`Here's the weather!`);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replaceWeather);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


