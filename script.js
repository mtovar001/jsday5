/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

function fizzBuzz(num) {
    for(let i - 1; <= num; i++){
        if (i % 3 === 0 && % 5 === 0); console.log("FizzBuzz");
        else if (i % 3 === 0); console.log("Fizz");
        else if (i % 5 === 0); console.log("Buzz");
        else if (i % 3 != 0 || i % 5 != 0); console.log("Pop");
        else console.log (i);
    }
}
 fizzBuzz(6);


/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
//let result = averager(prices);
//console.log(result);

const averager = arr => {
    const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
    const sum = arr.prices;
    return sum;
}


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/
function celToFah(n) {
    return (9/5)* (n+32);
}
let result = celToFah(37.5);
console.log (result);


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow (2, 3){
    return 2**3;
    console.log (pow);
}
