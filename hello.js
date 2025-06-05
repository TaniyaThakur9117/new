// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");

// function square(x)
// {
//     let ans=0;
//     ans = x*x;
//     return ans
// }

// console.log("The answer is " + square(9));

//callback function
function greet(name,callback)
{
    console.log("Hello " + name);
    callback();
}

function hello()
{
    console.log("Hello world!")
}

greet("Taniya",hello);
