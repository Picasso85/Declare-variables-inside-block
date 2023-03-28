'use strict';

const itsRaining = false;

//if (itsRaining) {
//  message = "Take an umbrella.";
//} else {
//  message = "Have a nice day.";
//}
//console.log(message); // error: message is not defined


// Do this instead
// Comment out the code above and uncomment the code below.
let message;
if (itsRaining) {
   message = "Take an umbrella.";
 } else {
   message = "Have a nice day.";
 }
 console.log(message); // works!