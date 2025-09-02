console.log("Hello from sync.js");

var a= 10;
var b= 20;

function multiply(x,y){
    return x*y;
}

var result = multiply(a,b);
console.log(`The result of multiplying ${a} and ${b} is ${result}`);