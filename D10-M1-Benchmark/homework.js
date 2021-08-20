//         JS EXERCISES

        // 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"

        let x = "John"
        let y = "Doe"
        console.log(`${x} <> ${y}`)

        // 22) Create an object with properties such name, surname, email

        let person = {
            name: "Lorenzo",
            surname: "Giorgini",
            email: "lorenzo.giorgini@outlook.com"
        }
        // 23) Delete Email from the previously created object

        delete person.email

        // 24) Create an array with 10 strings in it

        let strings = ["string","string","string","string","string","string","string","string","string","string"]

        // 25) Print in the console every string in the previous array

        console.log(strings)

        // 26) Create an array with 100 random numbers in it

        let randomArray = []
        for (let i = 0; i < 100; i++) {
            randomArray.push(Math.floor(Math.random() * 100) + 1)
        }
        console.log(randomArray)

        // 27) Wrote a function to get the MAX and the MIN from the previously created array

        function getMax(_randomArray) {
            let max = 0
            let min = _randomArray[0]
            for (let i = 0; i < _randomArray.length; i++) {
                if (_randomArray[i] > max) {
                    max = _randomArray[i]
                } if (_randomArray[i] < min) {
                    min = _randomArray[i]
                }
            }
            let bothMinAndMax = {
                max: max,
                min: min
            }
            return bothMinAndMax
        }

        console.log(getMax(randomArray))

        // 28) Create an array of arrays, in which every array has 10 random numbers

        let array = []
        for (let i = 0; i < 5; i++) {
            let _ = []
            for (let j = 0; j < 10; j++) {
                _.push(Math.floor(Math.random() * 100))
            }
            array.push(_)
        }
        console.log(array)

        // 29) Create a function that gets 2 arrays and returns the longest one

        function longestArray(_array1 , _array2) {
            if (_array1.length > _array2.length) {
                return _array1
            } else {
                return _array2
            }
        }

        let array1 = [1 , 34 ,445 ,556 ,656 ,656 ,443 ,4343]
        let array2 = [4 ,45, 545, 545 ,545, 54 , 4343]

        console.log(longestArray(array1 , array2))

        // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

        function higherSumOfNum(_array1 , _array2) {
            let _array1sum = 0
            let _array2sum = 0
            for (let i = 0; i < _array1.length; i++) {
                _array1sum += _array1[i]
            } 
            for (let j = 0; j < _array2.length; j++) {
                _array2sum += _array2[j]
            }
            if (_array1sum > _array2sum) {
                return _array1
            } else {
                return _array2
            }
        }

        console.log(higherSumOfNum(array1 , array2))