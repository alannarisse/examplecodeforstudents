"use strict";

// create a function called handleClicks
function handleClicks() {
  // initialize a variable called clickCounter with a value of 0
  let clickCount = 0;

  // in the text element of a class called
  // .js-click-counter, display the value of clickCount using jquery
  $('.js-click-counter').text(clickCount);

  // add a jquery 'click' event listener to the class .js-clicker
  $('.js-clicker').click(function(event) {

    // everytime you get a click, increment the clickCount by 1
    clickCount += 1;

    // update the text value of clickCounter
    $('.js-click-counter').text(clickCount);
  });

}

// call the handleClicks function on script load
$(handleClicks);
