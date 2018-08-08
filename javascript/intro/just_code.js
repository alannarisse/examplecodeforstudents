let loggedIn = true;

if (!loggedIn){
  redirectToLoginScreen();
}


function sayHello(personName) {
 const greeting =  "Hi there, " + personName;
 console.log(greeting);
}

////////

//person is a cpomplex data type because if stores multiple values person.name etc.
const person = {
  name: 'Jane Doe',
  greet: function() {
    console.log('Hello world');
  }
};

console.log(person.name); // => Jane Doe
person.greet(); // => Hello world


/////// arrays

const myFriends = ['Tweedle Dee', 'Tweedle Dum'];



//// Coercion
// combining two data types always equals a string

const stringVar = 'Kilroy was here ';
const numVar = 12;

const combined = stringVar + numVar;
typeof combined; // => string
console.log(combined); // => Kilroy was here 12
