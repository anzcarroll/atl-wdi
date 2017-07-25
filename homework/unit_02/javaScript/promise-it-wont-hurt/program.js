// setTimeout(function(){
//     console.log('TIMED OUT!');
// }, 300)

var promise = new Promise (function(fulfill, reject) {
 setTimeout(function(){
    console.log(fulfill('FULFILLED'));
}, 300)
});