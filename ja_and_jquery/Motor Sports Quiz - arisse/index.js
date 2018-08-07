const questionList = [
  {

    question: 'The constructor with the most wins in Formula 1 is ?',
    answer1: 'Ferrari',
    answer2: 'Williams',
    answer3: 'Lotus',
    answer4: 'Red Bull',
    correct: 'Ferrari'
  },

  {

  question: 'The 24 Hours of Lemans first race was in what year?',
  answer1: '1951',
  answer2: '1923',
  answer3: '1946',
  answer4: '1939',
  correct: '1923'
  },

  {

  question: 'The Mille Miglia an open-road endurance race took place from 1927 to 1957. Where was the race held?',
  answer1: 'Sardegna',
  answer2: 'Spain',
  answer3: 'Italy',
  answer4: 'Monaco',
  correct: 'Italy'
  },

  {

  question: 'The Brabham BT46B Formula 1 car was banned just after one race for having what?',
  answer1: 'llegal side skirts',
  answer2: 'Wider tyers',
  answer3: 'High capacity fuel tank ',
  answer4: 'A big fan',
  correct: 'A big fan'
  },

  {

  question: 'The fastest top speed down the mulsanne straight at Le Mans is?',
  answer1: '251 MPH',
  answer2: '188 MPH',
  answer3: '265 MPH',
  answer4: '199 MPH',
  correct: '251'
  },

  {

    question: 'The constructor with the most wins in Formula 1 is ?',
    answer1: 'Ferrari',
    answer2: 'Williams',
    answer3: 'Lotus',
    answer4: 'Red Bull',
    correct: 'Ferrari'
  },

  {

  question: 'The 24 Hours of Lemans first race was in what year?',
  answer1: '1951',
  answer2: '1923',
  answer3: '1946',
  answer4: '1939',
  correct: '1923'
  },

  {

  question: 'The Mille Miglia an open-road endurance race took place from 1927 to 1957. Where was the race held?',
  answer1: 'Sardegna',
  answer2: 'Spain',
  answer3: 'Italy',
  answer4: 'Monaco',
  correct: 'Italy'
  },

  {

  question: 'The Brabham BT46B Formula 1 car was banned just after one race for having what?',
  answer1: 'llegal side skirts',
  answer2: 'Wider tyers',
  answer3: 'High capacity fuel tank ',
  answer4: 'A big fan',
  correct: 'A big fan'
  },

  {

  question: 'The fastest top speed down the mulsanne straight at Le Mans is?',
  answer1: '251 MPH',
  answer2: '188 MPH',
  answer3: '265 MPH',
  answer4: '199 MPH',
  correct: '251'
  }

];

let questionNumber = 0;
let quizScore = 0;
//
//

function addQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}
function addQuizScore() {
  quizScore++;
  $('.quizScore').text(quizScore);
}
function emptyContainer() {
  $('.pageInserts').empty();
}
function emptyTitle() {
  $('.questionScore').empty();
}

function handleStartButton() {
  $('.questionNumber').text(questionNumber + 1);
  $('.startButton').on('click', function(event) {
    $('.startQuiz').empty();
    $('.pageInserts').append(`
          <form>
            <fieldset>
            <legend>${questionList[questionNumber].question}</legend>
              <div class="radios">
              <label for="answer1">
                <input type="radio" name="answer" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              </div>
              <div class="radios">
              <label for="answer2">
                <input type="radio" name="answer" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
              </div>
              <div class="radios">
              <label for="answer3">
                <input type="radio" name="answer" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
              </div>
              <div class="radios">
              <label for="answer4">
                <input type="radio" name="answer" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              </div>
              <button type="submit" class="btn btn-success submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    // console.log("`handleStartButton` ran");
    // console.log("Starting Quiz");
  });
}

function handleSubmitButton() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = $('input:checked').parent().text().trim();
    // console.log('`handleSubmitButton` ran');
    // console.log(`User selects "${userAnswer}"`);
    let userAnswerCheck = $('input:checked').parent().text().trim();
    let correctAnswer = `${questionList[questionNumber].correct}`;
    if (userAnswerCheck === correctAnswer) {
      correctFeedback();
    }
    else {
      incorrectFeedback();
    }
  });
}

function correctFeedback() {
  emptyContainer();
  console.log('`correctFeedback` ran')
  $('.pageInserts').append(`
    <h3>Correct! Keep going!</h3>
    <button type="button" class="btn btn-success nextButton">Next Question</button>
  `);
  handleNextButton();
  addQuizScore();
}

function incorrectFeedback() {
  let correctAnswer = `${questionList[questionNumber].correct}`;
  emptyContainer();
  console.log('`incorrectFeedback` ran');
  $('.pageInserts').append(`
    <h3>Woops.. </h3>
    <h3>It was ${correctAnswer}</h3>
    <button type="button" class="btn btn-success nextButton">Next Question</button>
  `);
  handleNextButton();
}

function handleNextButton() {
  $('.nextButton').on('click', function(event) {
    if (questionNumber < 9) {
      console.log('`handleNextButton` ran');
      addQuestionNumber();
      emptyContainer();
      $('.pageInserts').append(`
          <form>
            <fieldset>
            <legend>${questionList[questionNumber].question}</legend>
              <div class="radios">
              <label for="answer1">
                <input type="radio" name="answer" id="answer1" required>
              ${questionList[questionNumber].answer1}
              </label>
              </div>
              <div class="radios">
              <label for="answer2">
                <input type="radio" name="answer" id="answer2" required>
              ${questionList[questionNumber].answer2}
              </label>
              </div>
              <div class="radios">
              <label for="answer3">
                <input type="radio" name="answer" id="answer3" required>
              ${questionList[questionNumber].answer3}
              </label>
              </div>
              <div class="radios">
              <label for="answer4">
                <input type="radio" name="answer" id="answer4" required>
              ${questionList[questionNumber].answer4}
              </label>
              </div>
              <button type="submit" class="btn btn-success submitButton">Submit</button>
            </fieldset>
          </form>
    `);
    handleSubmitButton();
    console.log(questionNumber);
    }
    else {
      emptyContainer();
      finalPage();
      handleRestartButton();
    }
  });
}

function finalPage() {
  console.log('`finalPage` ran');
  let finalScore = quizScore;
  console.log(`User's score: ${quizScore}`);
  if (finalScore >= 8) {
    console.log("User's score is greater than or equal to 8");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3> Wowie you're a fan and must drive well too.</h3>
      <button type="button" class="btn btn-success restartButton">Restart Quiz</button>
    `);
  }
  else if (finalScore < 8 && finalScore >= 5) {
    console.log("User's score is between 5 and 7");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3>Nice job get to the track more.</h3>
      <button type="button" class="btn btn-success restartButton">Restart Quiz</button>
    `);
  }
  else {
    console.log("User's score is less than or equal to 4");
    emptyTitle();
    $('.pageInserts').append(`
      <p>Final Score: <span class="quizScore">${finalScore}</span>/10</p>
      <h3> Ugh.. You need more track time. :) </h3>
      <button type="button" class="btn btn-success restartButton">Restart Quiz</button>
    `);
  }
}

function handleRestartButton() {
  $('.restartButton').on('click', function(event){
    console.log('`handleRestartButton` ran');
    window.location.reload(true);
    // emptyContainer();
    // $('.questionScore').append(`
    //   <li>Question: <span class="questionNumber">0</span>/10</li>
    //   <li>Score: <span class="quizScore">0</span></li>
    // `);
    // $('.startquiz').append(`
    //   <h2>ARE YOU A TRUE MIGOS FAN?</h2>
    //   <button type="button" class="startButton">Start</button>
    // `);
    // questionNumber = 0;
    // quizScore = 0;
    // handleStartButton();
  });
}

function handleAllButtons() {
  console.log('`handleAllButtons` ran - Starting Quiz');
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(handleAllButtons);



// }
// function questionShower() {
//   $('.displayQuestion').text(questionList[questionNumber].question);
//   $('#displayAnswer0').text(questionList[questionNumber].answer1);
//   $('#displayAnswer1').text(questionList[questionNumber].answer2);
//   $('#displayAnswer2').text(questionList[questionNumber].answer3);
//   $('#displayAnswer3').text(questionList[questionNumber].answer4);
//
// }
//
// function startQuiz() {
//   $('.splashScreen').on('click', '.js-button-start', function(){
//     $('.splashScreen').css('display', 'none');
//     }
//
// )};
//
// $(".js-next-button").click(() => {
//   questionNumber++;
