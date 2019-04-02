'use strict';

function getDogImage(breed) {
  // fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  fetch(`https://dog.ceo/api/breeds/image/random/${breed}`)
//   "https://dog.ceo/api/breed/hound/images"
    .then(response => response.json())
    // .then(responseJson => console.log(responseJson))
    .then(responseJson => displayResults(responseJson));
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

// function inputBreed (){
//     $('form').submit(function (event){
//         event.preventDefault();
//         let submitBreed = $('#breed').val();
//         getDogImage(submitBreed);
//     });
// }

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let elements = responseJson.message.map(
    x => `<img src="${x}" class="results-img">`
  );
  $('.results-img').replaceWith(elements);

// $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`);
//   //display the results section
//   $('.results').removeClass('hidden');

}

$(function() {
  console.log('App loaded! Waiting for submit!');
  inputValue();
  // inputBreed();
});