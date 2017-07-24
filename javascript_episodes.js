// 1.
//code output = Hi! My name is Slim Shady
// global variable name holds "Slim Shady", printName() function uses this global variable through console.log which showw then function is called
var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();

// 2.
// code output = 3
// the variable score which holds 3 is within the result() function which returns score, console calls the result() function this variable is stored in
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// 3.
// code output = ducks, dogs, lions
// the variable myAnimal inside the listAnimals function would take precedence despite var keyword being missing. It is within the function which console.logs calls
var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// 4.
// code output = Alan, Steve, Adam, Ally / John
// Adam takes precedence over John as variable suspectThree = ADAM is within the scope of allSuspects function when console.log is used. The console.log which is used outside the function cannot see the local variable which holds ADAM and should log JOHN
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
// code output = Steve / Ally / The murderer is John
// innerFunctions()  = Steve.  outerFunction() is Ally, console.log has no access to any other variables apart from the global variable which is John - console.log should show The murderer is John
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

var goodBoy = "Rocky";
var sillyBoy = function(goodBoy){
  var goodBoy = "Snook";
  console.log(goodBoy);
};
console.log(goodBoy + " is a good boy!!!");
