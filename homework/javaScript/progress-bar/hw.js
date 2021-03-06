// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').innerHTML = timerValue;
 },


  drawProgressBars: function(timerValue){
    var timeElapsed = 100-timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + "%";

   },



  drawLitFuses: function(timerValue){
    var litUp = timerValue / 100;
    document.getElementsByClassName('burnt')[0].style.width = (1 - litUp) * 98 + "%";
    document.getElementsByClassName('unburnt')[0].style.width = litUp * 98 + "%";
    },


  drawCrawlers: function(timerValue){
   var timeElapsed = 100 - timerValue;
    if (timerValue%2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = '0px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = '10px';
    }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (timeElapsed*10) + 'px';
  }
};
