/**
  index.js is the entry script to the 'app' known as 'sphere'

*/

var fs = require("fs");

/**
  object that describes the app. Meta.
*/
var App = {
  name: "sphere"
};



/**
  init function,
  (iife) Immediately-invoked Function Expression

  here let's set up our working directory and working files.
  -configurations
  -user files
  -- recently opened documents
  
*/
(function init() {
  "use strict";
  var init_date = new Date();
  console.log("["+init_date+"] " + App.name +
  " is starting.");
})();


module.exports = fs;
