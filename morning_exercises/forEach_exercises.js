var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
words.forEach(function(n) {
  console.log(n.toUpperCase(words))
});


//
var squareMe = [0, 1, 10, 24, 595]
squareMe.forEach(function(a) {
  console.log(Math.pow(a, 2));
});



//
// var numbers = [5,7,9,12,20]
// numbers.forEach(function(x) {
//   var total += x;
//   console.log (total / numbers.length);
  
// });

//

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

let priceList = products.filter((product) => {
  console.log(product.price)
});