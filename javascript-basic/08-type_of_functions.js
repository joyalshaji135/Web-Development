// Different Types of Function in Javascript

// 1) Function with Argument and with return value
// 2) Function without Argument and without return value
// 3) Function without Argument and with return value
// 4) Function with Argument and without return value

// 1) Function with Argument and with return value

function fun1(num1,num2)
{
    console.log("Argument Parameters Are"+num1+" and "+num2);
    var sum = num1 + num2;
    return sum;
}

let num1 = 10;
let num2 = 20;
var value1 = fun1(num1,num2);
console.log("Sum of two number are :"+value1);

// 2) Function without Argument and without return value
