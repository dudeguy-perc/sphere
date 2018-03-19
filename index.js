/**
  index.js is the entry script to the 'app' known as 'sphere'

*/


/**
  object that describes the app. Meta.
*/
var App = {
  name: "sphere"
};



/**
  init function,
  (iife) Immediately-invoked Function Expression
*/
(function init() {
  "use strict";
  var init_date = new Date();
  console.log("["+init_date+"] " + App.name +
  " is starting.");
})();
