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

function fun2()
{
    var number1 = 100;
    var number2 = 200;
    var sum  = number1 + number2;
    console.log("Sum of Two Number is :"+sum); 
}

fun2();

// 3) Function without Argument and with return value

function fun3()
{
    var arg1 = 10;
    var arg2 = 30;
    var sum = arg1 + arg2;
    return sum;
}

value2 = fun3();
console.log("Sum of two number is "+value2);

// 4) Function with Argument and without return value

function fun4(num1,num2)
{
    var sum = num1 + num2;
    console.log("Sum of two Number is :"+sum);
}

fun4(100,2000);