/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/


let pos = [0, 1 , 2 , 3, 4]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/


let person = {
    name: "lorenzo",
    surname: "giorgini",
    email: "lorenzo.giorgini@outlook.com",
    age: 20
}


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/


let person = {
    name: "lorenzo",
    surname: "giorgini",
    email: "lorenzo.giorgini@outlook.com",
    age: 20
}
person.drivingLicense = true
console.log(person)


/* EXERCISE 4
Remove from the previously created object the age property.
*/


let person = {
    name: "lorenzo",
    surname: "giorgini",
    email: "lorenzo.giorgini@outlook.com",
    age: 20
}
person.drivingLicense = true
console.log(person)

delete person.age
console.log(person)


/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/


let human = {
    name: "lorenzo",
    surname: "giorgini",
    email: "lorenzo.giorgini@outlook.com",
}
if (human.email === person.email) {
    console.log("the two email are the same")
} else {
    console.log("the two email are not the same")
}


/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/


let totalShoppingCart = 52
let freeShipment
let totalCost
if (totalShoppingCart > 50) {
    freeShipment = true
} else {
    freeShipment = false
    totalCost = 55 + 10
}
if (freeShipment === true) {
    console.log("free shipping")
} else {
    console.log("10  euros shipping cost")
}


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/


let blackFriday = true
let totalCost = 50
let percentual = 20
let saleCost = 0
if (blackFriday === true) {
    let percentage = (percentual/100) * totalCost
    saleCost = totalCost - percentage
    console.log(saleCost)
} else {
    totalCost = 50
    console.log(totalCost)
}


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/


let car1 = {
    brand : "mercedes",
    model : "class c",
    licensePlate : "AA123AA"
}

let car2 = { }
Object.assign(car2, car1)
car2.licensePlate = "CA234AB"

let car3 = { }
Object.assign(car3, car1)
car3.licensePlate = "CB244DB"

let car4 = { }
Object.assign(car4, car1)
car4.licensePlate = "CF453GB"

let car5 = { }
Object.assign(car5, car1)
car5.licensePlate = "CE444DB"

let car6 = { }
Object.assign(car6, car1)
car6.licensePlate = "DE342PO"



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/


let carsForRent = [
    car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}, car2 = {
    brand : "bmw",
    model :"m2",
    licensePlate : "7AAA027"
}, car3 = {
    brand : "audi",
    model :"a4",
    licensePlate : "5VYU992"
}, car4 = {
    brand : "ferrari",
    model :"488",
    licensePlate : "HEF7116"
}, car5 = {
    brand : "lamborghini",
    model :"gallardo",
    licensePlate : "7YBZ106"
}, car6 = {
    brand : "smart",
    model :"fortwo",
    licensePlate : "HES5116"
}
]


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/


let carsForRent = [
    car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}, car2 = {
    brand : "bmw",
    model :"m2",
    licensePlate : "7AAA027"
}, car3 = {
    brand : "audi",
    model :"a4",
    licensePlate : "5VYU992"
}, car4 = {
    brand : "ferrari",
    model :"488",
    licensePlate : "HEF7116"
}, car5 = {
    brand : "lamborghini",
    model :"gallardo",
    licensePlate : "7YBZ106"
}, car6 = {
    brand : "smart",
    model :"fortwo",
    licensePlate : "HES5116"
}
]
console.log(carsForRent)
carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/


let car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}

console.log(typeof car1 , typeof car1.brand , typeof car1.licensePlate)


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/


let carsForSale = [
    car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}, car2 = {
    brand : "bmw",
    model :"m2",
    licensePlate : "7AAA027"
}, car3 = {
    brand : "audi",
    model :"a4",
    licensePlate : "5VYU992"
}
]

let carsForRent = [
    car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}, car2 = {
    brand : "bmw",
    model :"m2",
    licensePlate : "7AAA027"
}, car3 = {
    brand : "audi",
    model :"a4",
    licensePlate : "5VYU992"
}, car4 = {
    brand : "ferrari",
    model :"488",
    licensePlate : "HEF7116"
}, car5 = {
    brand : "lamborghini",
    model :"gallardo",
    licensePlate : "7YBZ106"
}, car6 = {
    brand : "smart",
    model :"fortwo",
    licensePlate : "HES5116"
}
]

let totalCars = carsForSale.length + carsForRent.length
console.log(totalCars)



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/


let carsForSale = [
    car1 = {
    brand : "mercedes",
    model :"class c",
    licensePlate : "6UYY421"
}, car2 = {
    brand : "bmw",
    model :"m2",
    licensePlate : "7AAA027"
}, car3 = {
    brand : "audi",
    model :"a4",
    licensePlate : "5VYU992"
}
]

console.log(carsForSale)


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/