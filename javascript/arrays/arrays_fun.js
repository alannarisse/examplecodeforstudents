function makeList(){

  //// a bunch of vars. nope.
}


////////////

//// array is a data structure

////

const passengers = ["soupy sales", "mickey mouth", "sampson night", "frisco kidd", "aluminum balloominum"];
passengers.pop(5);
//// 4th place (index 3)

passengers[3];

////change it
passengers[3] = "somebody else";

//// pop and push are ways of retrieving and adding to arrays.
//// more on pop/push here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//// pop() deletes the last position and retrievs its data
passengers.pop(); // deletes item out and retrieves it

//// push()
passengers.push("adam ant");
//// adds it to the end of an array and length automagically increased

var comboArray1 = ["a string", poisson, "another string", 2];

var poisson = "fish"

//// array of arrays



// comboArray1 = ["yellow submarine", "lamalamadingdong", [comboArray2], "snappylap", "friendling", "superviscious"];
// comboArray2 = ["sandals", "portentious", "fibonachi", "flounder", "peagreen soup"];

// comboArray
// comboArray1 = ["yellow submarine", "lamalamadingdong", "snappylap", "friendling", "superviscious"];
// comboArray2 = ["sandals", "portentious", "fibonachi", "flounder", "peagreen soup"];
// var arrayOfArrays = [comboArray1, comboArray2];

// console.log( "give me the second array contents " + arrayOfArrays[1] );

// // print out 3rd item in the second array.
// console.log( "give me the 3rd item in the second array " + arrayOfArrays[1][2] );


var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
//// for each item in the array numberList,
//// print to the console the value of the array item
// for (var i = 0; i < numberList.length; i++){
//   console.log( "The value in cell " + i + " is " + numberList[1] );
// }

////

//passengers[5] = undefined;

////

//// returns the even numbered items from an array of numbers.
var evenCount = 0;
for (var i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 == 0){
        evenCount++;
    } else {
      // if a number isn't even, make it "banana"
        numberList[i] = "banana";
    }
}
//// show me the array of evens + bananas
    // console.log("The list of numbers now has these values: " + numberList);
    // console.log("The number of even numbers in the array is: " + evenCount);
    // console.log("the array legth is: " + numberList.length);

//// build a passenger list

//// is the list is empty, add the passenger,
//// if it's not we need to find the right spot to put the passenger


function addPassenger ( name, list ){
  if (list.length == 0){
    list.push(name);
  } else {
    for ( var i = 0; i < list.length; i++){
        if ( list[i] == undefined){
          // once we find an undefined spot, put the name in it.
          list[i] = name;
          //now we can exit the function because we found a spot
          return list;
          //if we have hit the end of the list
          //without finding an empty spot, then add the name to the end
        } else if (i == list.length - 1 {
            list.push(name);
            return list;
        }
    }

  }
}

var passengerList = [];
// first param is a string, plus our array. we return a new array with first passenger
passengerList = addPassenger("Alanna Risse", passenderList);

// add a second person. this modified our array by adding to it.
passengerList = addPassenger("Veronica Reeves", passenderList);

// and so on
passengerList = addPassenger("Tom Risse", passenderList);

//// delete passenger function
// function deletePassenger (){
//   //if our list is empty
//   if(list.length == 0){
//     console.log("list is empty!");
//   } else {
//     for (var i = 0; i < list.length; i++){
//         // if the name on our list is the person were looking for, delete them.
//         if(list[i] == name){
//             list[i] = undefined;
//             return list; // we're done here
//         } else if (i == list.length - 1) {
//             console.log("Passewnger not found");
//         }

//     }
//   }
//   // if the list is empty or we never found the passenger, we just return the list.
//   return list;
// }


