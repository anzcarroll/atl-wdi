// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
//  price =  price*100; 
//  payment = payment*100;
//  //wanting to not have whole dollars, getting decimals
//  var change = Math.floor(payment-price);
//  if (change <= 0){
//    //returning no change if amount is 0
//    return [0,0,0,0]

//    //if we do have change, we want to go thru and divide how much chamge will be left for each Coin
//    var Quarters = Math.floor(change/25);
//    change = change%25;
//    //im going to try and divide this x25 and give back whatever is left over here
//    var Dimes = Math.floor(change/10);
//    change = change%10;
//    var nickels = Math.floor(change/5);
//    change = change%5;
//    var pennies = Math.floor(change);
    
//     var coins = [quarters, dimes, nickels, pennies]
//     {
//     return coins;
//     }
//  }


  Your Code Here
 //wanting to not have whole dollars, getting decimals
 var change = Math.floor(payment*100)-(price*100);
 if (change <= 0){
   //returning no change if amount is 0
   return [0,0,0,0]
var result = [25,10,5,1].map(function(coins){
  var numberOfCoins = Math.floor(change/coin);
  change%=coin;
  return numberOfCoins;
})
   //if we do have change, we want to go thru and divide how much chamge will be left for each Coin
   var Quarters = Math.floor(change/25);
   change %= 25;

   //im going to try and divide this x25 and give back whatever is left over here
   var Dimes = Math.floor(change/10);
   change %= 10;

   var nickels = Math.floor(change/5);
   change %5;

   var pennies = Math.floor(change);
    
    var coins = [quarters, dimes, nickels, pennies]

    return coins;
    }
 }


 

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
