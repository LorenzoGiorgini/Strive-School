/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
1. numbers you declare them by using const or let and in old versions of javascript var for example , let num1 = 28
2. strings same as numbers gets declared by let and const , and they are sets of letters and even numbers , for example , let word = "this is a string"
3. booleans can have only two values , true and false , it's like an ON/OFF switch so that something happens only because the condition is either true or false , for example let isMale = true
4. undefined is when you dont give a variable a value like this example , let var so the variable is empty
5. null is when you give a variable the value null wich is also empty , like this example let var1 = null
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* A variable is pretty much the closest thing to a storage container , you can apply a name to the variable  and you can store a type of data wich can be a number, string, photo, song and so on ,
 and it is also called variable cause it can change */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

 
let sum = 0
let num1 = 12
let num2 = 20
sum = num1 + num2


/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/


let subtraction = 0 
let x = 12
subtraction = x - 12
console.log(subtraction)


/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/


let name1 = "john"
let name2 = "John"
if (name1 !== name2){
    console.log("the two names are different")
} if (name1 === name2.toLowerCase()){
    console.log("the two names are the same")
}


/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/


let x = 5
for (let i = 0; i < 10; i++) {
    if (x === i) {
        console.log("x is :" ,i)
    }
}



/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

 
let bool = true
let result = bool ? 20 : null


/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/