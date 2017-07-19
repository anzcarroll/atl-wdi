// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    console.log("working");
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    this.millisecs += 10;
  if (this.millisecs >= 1000) {
  this.millisecs -= 1000;
  this.sec += 1;
}
if (this.millisecs <= 60) {

}
  },

  reset: function(){
    // Your Code Here
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = 0;
    console.log(reset()); 
  },
  start: function(){
    // Your Code Here
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
  },
//   stop: function(){
//     // Your Code Here
//     this.isRunning = false; 
//     }
//   },
//   // lap: function(){
//   //   // Your Code Here
//   //   // if (!this.isRunning) {
//   //   // laps.push('mins', 'secs', 'millisecs')
//   //     }
//   //   }
//   // }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
//     1.  It displays the values of minutes, seconds, and (tens of)
//     milliseconds elapsed in the DOM element with id `time-display`, in
//     the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`), starting with
//     `00:00:00`.
var timeDisplayString = `${mins}:${secs}:${miilisecs}`:
//turn time into string
//find time display DOM element and set string as inner html

// 2.  It pads the values of minutes, seconds, and (tens of) milliseconds
//     with zeros so that the strings are at least two characters long.
    $('#mins').html()
    $('#secs').html()
    $('millisecs').html()
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    //if # < digits.length
    //return # as string 
    // pad # with 0s until length ==== length;
    //!(if # < digits.length
    //return # as "" 
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    //find current time value from Stopwatch
   //calls ViewEngine
   //calls updateTimedisplay
   ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
 }

  },
  handleClickStart: function() {
    // Your Code Here
    if (!Stopwatch.isRunning) {
    Stopwatch.start()
      };
      console.log("button is working!");
  },
  handleClickStopReset: function(){
   // Your Code Here
    if (Stopwatch.isRunning {
      Stopwatch.stop();

    }
    if (!Stopwatch.isRunning) {
      Stopwatch.reset();
      //update time to 00:00:00
      laps === [];

    }
      (mins, secs, millisecs)
  },
  handleClickLap: function(){
    // Your Code Here
    ViewEngine.updateLapListDisplay
  }
};

$(function(){
  // Attach AppController methods to the DOM as event handlers here.
$('#start').on('click', function (event) {
  event.stopPropogation();
  AppController.handleClickStart();
}


};
