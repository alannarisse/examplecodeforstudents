alert('hello from JavaScript Land');


//////

// define the function
function alertHelloWorld(){
  let helloMessage = "hi";
  alert(helloMessage);
}

// invoke the function
alertHelloWorld();


////
function hello(name) {
  return 'Hello ' + name + '!';
}

//invole the function in the console.log native function
console.log(hello('Thomas'));


///
function noReturn(){
  //nothing
}

const foo = noReturn();

console.log(foo); //undefined


//
function averageOfTwo(num1, num2){
  return (num1 + num2) / 2;
}

// two ways to call a function
// function declaration ****
function myFunction(){
  console.log('myFunction');
}

// or

//function expression
const myFunction = function(arg1, arg2){
  console.log('myFunction');
}

////////

function tenPower(power = 2){
  return 10 ** power;
}

tenPower(); // = 100
tenpower(1); // = 1
tenPower(3); // = 1000


// setting a default value if none exist
function tenPower(power){
  if (!power){
    power = 2;
  }
  return 10 ** power;
}



//// fat arrow


const add = (num1, num2) => num1 + num2;
add(2, 3);

const addAlt = function(num1, num2){
  return num1 + num2;
}

// more fat arrows, mult line this time
const add = (num1, num2) => {
  console.log('Adding', num1, num2);
  return num1 + num2;
};

// is the same as above
const addAlt = function(num1, num2){
  console.log('Adding', num1, num2);
    return num1 + num2;
}

////////
// parameters in fat arrows
const alertMe = () => alert("You've been alerted!");

// is the same as
const alertMeAlt = function(){
  alert("You've ben alerted!");
}


/// is theres only a single param, the parenthesis are options

const isEven = num => % 2 === 0;
// same as
const isEvenAlt = (num) => num % 2 === 0;

// same as
const isEvenAltAlt = function(num){
  return num % 2 === 0;
}

