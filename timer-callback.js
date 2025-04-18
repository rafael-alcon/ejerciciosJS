/*let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);
 
  counter += 1;
};

let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);
 
  counter += 1;
 
  if (counter > 10) {
    clearTimeout(timeoutId);
  }
};
 
let timeoutId = setTimeout(callbackFunction, 1000);
*/


let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);
 
  counter += 1;
 
  if (counter > 5) {
    clearTimeout(timeoutId);
    console.log("El tiempo termino")
  }
};
 
let timeoutId = setTimeout(callbackFunction, 1000);
