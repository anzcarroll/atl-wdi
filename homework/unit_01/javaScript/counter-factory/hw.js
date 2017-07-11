// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
insertCounterComponent: function(newCountId){
   console.log(`insert counter component #${newCountId}`);
let newCountComp = document.createElement('div');
newCountComp.innerHTML =
    `<h3>Count: <span>0</span></h3><button class='increment'> + 1 </button></div>`;
newCountComp.className += ' counter';
newCountComp.getElementsByClassName('increment')[0].onClick = AppController.onClickNewCounter;
newCountComp.dataset.countId = newCountId;
document.getElementById('counter-list').appendChild(newCountComp);
},

  
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
     let value = CounterCollection.getCounterValue(countId);
     //find button
     let $button = $('add-one');
     //add event listener to the button
     button.on('click', function() {

     
     //inside listener callback : 
          //find the span to get current value 
         let currentValue =  $('#current-counter').val();
         let currentValAsInt = parseInt(currentValue);
          //add one to the current value span
          currentValueAsInt += 1;
          //change span to new value 
          $('#current-counter').html(currentValAsInt);
             
},
 
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  
    

  }
});

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
   CounterCollection.createCounter(); 
    Presenter.insertCounterComponent();
  },
  onClickIncrement: function(event){
    // Your Code Here
    CounterCollection.incrementCounter();
    Presenter.refreshCounterComponent();
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
    // CounterCollection.destroyCounter(countId);
    // Presenter.removeCounterComponent(event);
  }
};

window.onload = function(){
  document.getElementById('current-counter').onclick = AppController.onClickNewCounter;
};
