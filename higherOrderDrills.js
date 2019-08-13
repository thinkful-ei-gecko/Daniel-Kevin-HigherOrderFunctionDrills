'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello(){
  console.log('Hello World');
}


function goodbye(){
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// BONUS CREDIT
console.log(myNames.filter(name => name[0] === 'R'));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter += 1;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
    else {
      console.log(`${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the road!');
const avalancheWarning = hazardWarningCreator('Avalanche on the slopes!');
const godzillaWarning = hazardWarningCreator('Godzilla is attacking the city!');

rocksWarning('Durham');
avalancheWarning('Aspen');
godzillaWarning('Tokyo');
rocksWarning('Raleigh');

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let filtered = turtleMovements.filter(move => move[0] >= 0 && move[1] >= 0);
for (let i = 0; i < filtered.length; i++){
  //console.log(filtered[i]);
}

let mapped = turtleMovements.map(move => {
  return move[0] + move[1];
});
//console.log(mapped);

turtleMovements.forEach(move => {
  //console.log(`Movement #1: ${Math.abs(move[0])} steps`);
  //console.log(`Movement #2: ${Math.abs(move[1])} steps`);
});

let arrStr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'

let codedWords = arrStr.split(' ');
console.log(codedWords);

let message = codedWords.reduce((acc, item) => {
  if (item.length === 3) {
    return acc + ' ';
  }
  else {
    return acc + item[item.length -1].toUpperCase();
  }  
}, '');

console.log(message);