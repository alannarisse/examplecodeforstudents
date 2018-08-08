//string drill


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}


function testAdd() {
   const num1 = 5;
   const num2 = 10;
   const expected = 15;

    if (add(num1, num2) === expected) {
      console.log('SUCCESS: `testAdd` is working');
      return true;
    }
   else {
      console.log('FAILURE: `testAdd` is not working');
      return false;
   }
}
