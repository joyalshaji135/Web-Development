var readvalue = require("readline-sync");

var num1 = readvalue.question("Enter two numbers");
var num2 = readvalue.question();

if(num1 < num2)
{
    console.log("Number "+num2+" is Largest");
}

