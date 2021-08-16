/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

function giveMeRandom(_n) {
    let array = []
    for (let i = 0; i < _n; i++) {
        array.push(Math.floor(Math.random() * 10))
    }
    return array
}

let numeriRandom = giveMeRandom(10)

function checkArray(_numeriRandom) {
    let sum = 0
    for (let i = 0; i < _numeriRandom.length; i++) {
        if (_numeriRandom[i] > 5) {
            console.log(`The number ${_numeriRandom[i]} its bigger than 5`)
            sum += _numeriRandom[i]
        }
    }
    return sum
}

console.log(numeriRandom)
console.log(checkArray(numeriRandom))

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

let product1 = {
    name: "spaghetti",
    price: 20,
    id: "AR3435",
    quantity: 2
}

let product2 = {
    name: "light saber",
    price: 2000,
    id: "AS4456",
    quantity: 1
}

let product3 = {
    name: "guitar",
    price: 200,
    id: "QW3456",
    quantity: 1
}


let shoppingCart = [
    product1,product2,product3
]

function shippingCartTotal(_price) {
    let sum = 0
    for (let i = 0; i < _price.length; i++) {
        sum += _price[i].price
    }
    return sum
}

console.log(shippingCartTotal(shoppingCart))

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let product1 = {
    name: "spaghetti",
    price: 20,
    id: "AR3435",
    quantity: 2
}

let product2 = {
    name: "light saber",
    price: 2000,
    id: "AS4456",
    quantity: 1
}

let product3 = {
    name: "guitar",
    price: 200,
    id: "QW3456",
    quantity: 1
}

let product4 = {
    name: "boat",
    price: 1000,
    id: "ER3556",
    quantity: 3
}

let shoppingCart = [
    product1,product2,product3
]

function addToShoppingCart(_newObject) {
    let sum = 0
    shoppingCart.push(_newObject)
    for (let i = 0; i < shoppingCart.length; i++) {
        sum += shoppingCart[i].quantity
    }
    return sum
}

console.log(addToShoppingCart(product4))
console.log(shoppingCart)


/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

let product1 = {
    name: "spaghetti",
    price: 20,
    id: "AR3435",
    quantity: 2
}

let product2 = {
    name: "light saber",
    price: 2000,
    id: "AS4456",
    quantity: 1
}

let product3 = {
    name: "guitar",
    price: 200,
    id: "QW3456",
    quantity: 1
}

let product4 = {
    name: "boat",
    price: 345,
    id: "ER3556",
    quantity: 3
}

let shoppingCart = [
    product1,product2,product3
]

function addToShoppingCart(_newObject) {
    shoppingCart.push(_newObject)
}

addToShoppingCart(product4)

function maxShoppingCart(_mostExpensive) {
    let mostExp = 0
    for (let i = 0; i < _mostExpensive.length; i++) {
        if (_mostExpensive[i].price > mostExp) {
            mostExp = _mostExpensive[i].price
        }
    }
    return mostExp
}

console.log(maxShoppingCart(shoppingCart))

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

let product1 = {
    name: "spaghetti",
    price: 20,
    id: "AR3435",
    quantity: 2
}

let product2 = {
    name: "light saber",
    price: 2000,
    id: "AS4456",
    quantity: 1
}

let product3 = {
    name: "guitar",
    price: 200,
    id: "QW3456",
    quantity: 1
}

let product4 = {
    name: "boat",
    price: 3545,
    id: "ER3556",
    quantity: 3
}

let shoppingCart = [
    product1,product2,product3
]

function addToShoppingCart(_newObject) {
    shoppingCart.push(_newObject)
}

addToShoppingCart(product4)


function latestShoppingCart(_shoppingCart) {
    return _shoppingCart[_shoppingCart.length - 1]
}

console.log(latestShoppingCart(shoppingCart))

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/


function loopUntil(x) {
    let num = 0
    let count = 0
    if (x < 0 || x > 9) {
        return
    }
    for (; ;) {
        num = Math.floor(Math.random() * 9)
        console.log(num)
        if (num >= x) {
            count++
        } else {
            count = 0
        } if (count === 3) {
            return
        }
    }
}

loopUntil(7)



/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

let array = [20 , 20 , 5 , 1 , 20 , 20 , 20 , "sddsfsdf" , "sdfsff"]

function average(_array) {
    let _average = 0
    let _realAvg = 0
    let count = 0
    for (let i = 0; i < _array.length; i++) {
        if (typeof (_array[i]) === "number") {
            _average += _array[i]
            count++
        }
    }
    _realAvg = _average/count
    return _realAvg
}

console.log(average(array))

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

let array = ["parolalunghissima" , "parola" , "word" , "Helloworld"]

function longest(_array) {
    let newWord = 0
    let index = 0
    for (let i = 0; i < array.length; i++) {
        if (_array[i].length > newWord) {
            newWord = _array[i].length
            index = i
        }
    }
    return _array[index]
}

console.log(longest(array))

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/



/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

let getGaps = (date) => {

    const today = new Date();
    today.setHours(0, 0, 0);
    date.setHours(0, 0, 0);
  
    let difference =  today.getTime() - date.getTime();
    difference = ((difference / 1000) / 3600) / 24
  
    return Math.round(difference);
  };
  
  const randomDay = new Date('8/11/2020');
  
  console.log(getGaps(randomDay));


/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/