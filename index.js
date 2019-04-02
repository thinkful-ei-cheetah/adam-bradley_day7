'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}
function inputValue(){
    $('form').submit(function (event){
        event.preventDefault();
        const newVal = $('#inputVal').val();
        console.log(newVal);
        return newVal;
    });
}
function oneToFifty(val){
    if (val < 1 || val >50){
        throw new Error ('Not 1-50');
    }
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  inputValue();
//   oneToFifty();
});