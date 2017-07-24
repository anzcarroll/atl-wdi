console.log('tamagotchi file is loaded');

//your constructor function here
const Tamagotchies =(function(name, creatureType) {
    this.name = name;
    this.creatureType = creatureType;
    this.restedness = 10;
    this.health = 10;
    this.foodInTummy = 10;
    this.cry = function() {
    this.foodInTummy--;   //function should reduce `foodInTummy` by 1
    console.log("WAHHHH!");     //log 'wah'
    //log
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
}
    this.puke(function(){
    this.foodInTummy--;
    console.log(this.foodInTummy + " BARFFFFF!");
    })
    this.yawn(function(){
    this.restedness--;
    console.log(this.name + "has current restedness of: " + this.restedness);
    })    
});

//create new Tamagotchis
constructThing1 = new Tamagotchies;
constructThing2 = new Tamagotchies;

//test out your Tamagotchies below via console.logs
console.log(constructThing1);
console.log(constructThing2);
console.log(constructThing1.cry());

