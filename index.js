'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function inputValue(){
    $('form').submit(function (event){
        event.preventDefault();
        let newVal = $('#inputVal').val();
        if (newVal <1 || newVal > 50){
            throw new Error ('Enter Number from 1-50');
        }
        console.log(newVal);
        getDogImage(newVal);
        return newVal;
    });
}
$(function() {
  console.log('App loaded! Waiting for submit!');
  inputValue();
});