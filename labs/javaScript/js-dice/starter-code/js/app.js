/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


// var firstDie= 'dice-' + random1;
// var secondDie= 'dice-' + random2;

// document.getElementsById('first-die').class= firstDice;
// document.getElementById('second-die').class= secondDice;

// clickedButton: function(event){
//   var body = document.body;
//   var rollButton = document.getElementById('roll-dice');

function diceRoll() {
    var random1 = Math.floor(Math.random() *6)+1;
    var random2 = Math.floor(Math.random() *6)+1;

var firstDice= 'dice-' + random1;
var secondDice= 'dice-' + random2;
 document.getElementById('first-die').className = firstDice;
 document.getElementById('second-die').className = secondDice;
}

document.getElementById('roll-dice').addEventListener('click', diceRoll);




//get dice
//get random1
//create class
//name class firstDie




