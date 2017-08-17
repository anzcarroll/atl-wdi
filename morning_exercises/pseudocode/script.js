//*************************
// Problem 1:
// Barrels O' RUM
var barrels = function(small, large, total){
 // - Find the cost of a small barrel:
//   - We know 1 small barrel costs 60 right off the bat
var smallBarrel = 60;
//     - To do that, grab the total cost (825)
 var total = 825;
// - Find the cost of the large barrel:
//   - First find the cost of all large barrels
 var largeBarrel = (total - (small * smallBarrel)) / large;
//     - The remainder amount is the total cost of large barrels
return largeBarrel;
};



//     - Subtract the small barrels from the total
//       - calculate the small barrels total price (2 * 60 = 120)

//     - Divide total cost of large barrels by number of barrels



//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, miles){
//find earth circum in miles
var earthCirc = 24901;
var mpg = miles;
//Calculate the # of gallons used to travel around the earth
var price = fuelPrice;
//circumference / MPG (miles per gallon)
var gallons = (earthCirc / mpg);
//Calculate the cost:
var toteCost = (price * gallons);
//total gallons used * cost of fuel
return toteCost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
//  - Find the total amount of pure fruit juice (gal)
//   - Total of Costco pure fruit juice:
//     - percentage pure fruit juice * number of gallons
 var costco = ((b / 100) * a);
 //   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
 var kirkland = ((d / 100) * c);
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
var total = (a + c);
// - Find the total amount of juice (gal):
var totalPFJ = (costco + kirkland )
//   - Total of Costco juice + Total of Kirkland Juice
// - Calculate (total pure fruit juice) / (total juice)
return totalPFJ / total; 

};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
