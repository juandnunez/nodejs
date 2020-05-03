
const logger = require("./logger.js");
const pather = require('path');
const oser = require('os');
const fser = require("fs");

console.log("////////////////////////////////////////");
console.log("////////////////////////////////////////");

var pathObj = pather.parse(__filename);
console.log(pathObj);

var TM = oser.totalmem();

console.log("****************************************");
console.log("****************************************");

console.log(`Total Memory: ${TM}`);

console.log("****************************************");
console.log("****************************************");

console.log("////////////////////////////////////////");
console.log("////////////////////////////////////////");

console.log("----------------------------------------");
console.log("----------------------------------------");

fser.readdir("$", function(err, files) {
  if (err) {
    console.log("ouch", err);
  }
  else {
    console.log("result", files);
  }
})

console.log("----------------------------------------");
console.log("----------------------------------------");


logger("mom");

function sayHello(name)
{
  console.log("Hello: " + name)
}
// console.log(global);


var juand = "I exist";

sayHello("Juan");

console.log(juand);

//global.sayHello("Juan D");
