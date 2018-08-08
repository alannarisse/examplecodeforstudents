////////////Creating Arrays

function makeList(item1, item2, item3) {
  return [item1, item2, item3];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testMakeList() {
  const items = ['prime rib', 'fried goat cheese salad', 'fish tacos'];
  const result = makeList(items[0], items[1], items[2]);

  if (
    result &&
    result.length &&
    items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  }
}

testMakeList();

///////////////

///////// Adding array items

/* The .push() method returns the length of the array.
To return the altered array, you have to push the item first,
then return the array itself.
*/
function addToList(list, item) {
  list.push(item);
  return list;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testAddToList() {
  const input1 = ['red', 'blue', 'green'];
  const input2 = 'pink';
  const expected = ['red', 'blue', 'green', 'pink'];
  const result = addToList(input1, input2);

  if (
    result &&
    result.length &&
    expected.length === result.length &&
    expected.every(function(item) {
      return result.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `addToList` works!');
  } else {
    console.error('FAILURE: `addToList` is not working');
  }
}

testAddToList();
//////////


///////////// Accessing arrays

/*
Remember, indexes start at 0 and count up.
*/

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log(`SUCCESS: "${fn.name}" works on [${input}]`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name}([${input}]) should be ${expected} but was ${fn(
        input
      )}`
    );
    return false;
  }
}

function runTests() {
  var list = [1, 4, 9, 16, 25];
  var item1 = 1;
  var item2 = 9;

  var testResults = [
    testFunctionWorks(accessFirstItem, list, item1),
    testFunctionWorks(accessThirdItem, list, item2),
  ];

  var numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();



//////////////////


/////// Accessing Array Lengths

//`.length` is a property, not a method, so you don't include parentheses.
function findLength(array) {
  return array.length;
}

//Remember, indexes start at 0, so you have to subtract 1 from the length
function accessLastItem(array) {
  return array[array.length - 1];
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.error(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function runTests() {
  const list = [1, 4, 9, 16, 25];
  const originalList = [1, 4, 9, 16, 25];
  const length = 5;
  const lastItem = 25;

  const testResults = [
    testFunctionWorks(findLength, list, length),
    testFunctionWorks(accessLastItem, list, lastItem),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//////////////////