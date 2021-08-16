/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

/*
let arr = [1 , 2 , 3]
for (let i = arr.length; i >= 0; i--) {
     console.log(arr[i])
}
*/

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/*
let max = 0
let arr = [ 1, 20 ,4350 ,40 , 10000000]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)
*/

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

/*
var arr = [3453455,345345,345,3454,453];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i]; 
    }
}

console.log(min);
*/

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/*
let arr = [1 ,3 ,5 ,5654, 64, 63, 676, 100 ,200]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 0) {
        console.log(arr[i])
    }
}
*/

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/*
let arr = [1 ,3 ,5 ,5654, 64, 63, 676, 100 ,200]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 === 1) {
        arr.splice(i , arr.lenght)
        console.log(arr[i])
    }
}
*/


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let str = 'this is a test tring';
let vowels = 'aeiou';

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (str[i] === vowels[j]) {
      str = str.slice(0, i) + str.slice(i + 1)
    }
  }
}

console.log(str)


/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/*
let arr = [1 ,3 ,5 ,5654, 64, 63, 676, 100 ,200]
for (let i = 0; i < arr.length; i++) {
    arr[i] += 1
    console.log(arr[i])
}
*/

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/*
let arr = ["strive", "is", "great"]
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].length
}
console.log(arr)
*/

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/