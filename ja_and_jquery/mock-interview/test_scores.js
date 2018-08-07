// test scores
// Write a function that accepts an array of test scores as an
// agrument. The function should return the number of test scores that
// were an 80 or higher.

const testScoreArr = [80, 92, 42, 54];

function findHighScores(testScoreArr) {
  let highScore = 80;
  let highScoreCount = 0;
  for (let i = 0; i < testScoreArr.length; i++) {
    if (testScoreArr[i] >= highScore) {
      highScoreCount++;
    }
  }
    console.log('there are ' + highScoreCount + ' scores that were 80 or higher');
}


