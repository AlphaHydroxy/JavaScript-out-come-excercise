// 1.
//code output = Hi! My name is Slim Shady
// global variable name holds "Slim Shady" printName() function uses this global variable then function is called
var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

// 2.
// code output = 3
// variable score is within the function which returns score, console calls the function this variable is stored
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// 3.
// code output = ducks, dogs, lions
// variable myAnimal within the listAnimals function takes precedence here despite var keyword being missing. It is within the function which console.logs calls
var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// 4.
// code output = Alan, Steve, Adam, Ally --- John
// Adam takes precedence over John as variable suspectThree = ADAM is within the scope of allSuspects function when console.log is used. The console.log which is used outside the funtion cannot see the local variable which holds ADAM and should log JOHN
var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// 5.
// code output = name: Poirot
// console.log has detectiveInfo() function passed in, this function returns "Poirot"
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// 6.
// code output = Ally and The murderer is John
// Ally is shown when outFunctions is called. console.log has no access to any other variables apart from the global one which is John
var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);

// 7.
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.