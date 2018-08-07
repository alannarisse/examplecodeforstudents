//app.js
// This is the javascript for my quiz app.
// I'm breaking it down into logical chunks to help me plan everything out.
//

// declare initial values for score and current question
// when currentQuestion = 0 I want to be on the start page.
let currentQuestion = 0;
let currentScore = 0;

//other functions I'm making:
//finishQuiz();
//startAgainButton();
//changeCurrentScore();

// ids, questions, answers, and correct answers
const questionData = [
  {
    id: 1,
    question: 'Cephalopods include the following animals',

    // outting my answers in an array
    answers:  ['octopus, snails, lionfish, and squid',
                'octopus, squid, cuttlefish, and nautilus',
                'octopos, cuttlefish, and squid',
                'ipod, peapods, and tripods'],
    rightAns: 'octopus, squid, cuttlefish, and nautilus'
    // do I want a success message or image?
  }
  {
    id: 2,
    question: 'Octopus and Squid have how many arms?'

    // outting my answers in an array
    answers:  ['Both have 8 arms',
              'The octopus has 6 arms and the squid has 8',
              'The octopus has 8 arms and the squid has 10',
              'The octopus has 8 arms and the squid has 12'],
    rightAns: 'The octopus has 8 arms and the squid has 10'
  }
  //// add more questions here, don't forget to separate the sets with a ',' aka: }, {
]

// make a show question funtion
function showQuestion () {
  if (currentQuestion < questionData.length) {
    // put all the html in the return that you want to write to the dom
    return 'showing next question html here';
  } else {
    // call the finish quiz function which will show the finish page contents
    finishQuiz();
    // call a button that will allow a user to reload the page and start over
    startAgainButton();
    // set the value of current question to 10
    $('currentQuestion').text(10)
  }

}

//button functionality
  //// start
  // a start button that will hide the start page
  // and render the first set of questions
function startButton () {
$('.start-quiz').on('click', '.start-quiz-button', function(){
  $('.start-quiz').css('display', 'none');
  $('.question-form').css('display', 'block');
  $('.current-q-number').text(1);

});

}



  /// next question button that will write the next question data into the dom
  // a function to change the current question value (currentQuestion)
  // a function to write the question data to the dom

  /// check answer button
function checkAnswerButton(){
  $('form').on('submit', '.check-answer-button', function (event){
    // a form listener function that calls a function when the form is submitted
    // the function needs to 1. prevent default, 2. puts the user selected radio button value into
    // a variable. 3. calls the right answer and stores it in a variable
    // then asks, is the selected radio button value the same as the value of the correct answer.

    event.preventDefault();
    let radioValue = $('input.checked');
    let answer = radioValue.val();
    let rightAnswer = '${questionData[currentQuestion].rightAns}';

    if ( answer === rightAnswer ) {
      // show the div that gives you a thiumbs up
      // call a function that increments currentQuestion by one.

    } else {
      // show the div with wrong answer info plus display the correct answer.
    }
  });

 }


  /// start over button that will display on the finish page
  //startAgainButton()
function startAgainButton (){
  // rewrite this to use the .click event
  $('main').on('click', '.start-again-button', function (event){
    // when a button with the class start-again-button is clicked
    // call a function to reload the page
    location.reload();
  });

}


//where am I? what question am I on, out of how many



//scoring
  //how many have I gotten right, or wrong
function changeCurrentScore () {
  score ++;
}

//start over
  //clears out the score and takes user to start

//I need a function that will load all the functions into my page when the dom is rendered
function startUpQuiz (){


}

