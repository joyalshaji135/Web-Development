var number1 = 100;

function fun1()
{
    number1 = 200;
}

console.log("Function Doesn't Call  it Self"+number1);

fun1();

console.log("Function is Call it Self"+number1);

// Nested Function Concept

var number2 = 1000;

function function1()
{
    number2 = 2000;
    // Nested Function is Calling on
    console.log("1 Inside the Nested Function :"+number2);
    function2();
    console.log("2 Inside the Nested Function :"+number2);
    function function2()
    {
        number2 = "3000";
    }
}

function1();
// function2(); ==> is not use it but it is a nested Function

console.log("Nested Function Doesn't Call :"+number2);