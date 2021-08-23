let cells = [

]

function createNumbersDiv(array , className) {
    let containerNode = document.createElement("div") 
    for (let i = 0; i < array.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add(className)
        newDiv.innerText = array[i]
        containerNode.appendChild(newDiv)
    }
    return containerNode
}


function fillWithRandoms() {
  let arr = [];
  let random = Math.floor(Math.random() * 76);
  arr.push(random);
  for (; ;) {
    let rnd = Math.floor(Math.random() * 76);
    let flg = false;
    for (let i = 0; i < arr.length; i++) {
      if (rnd !== arr[i]) {
        flg = true;
      } else {
        flg = false;
        break;
      }
    }
    if (flg) arr.push(rnd);
    flg = false;
    if (arr.length === 24) break;
  }

  return arr;
}

fillWithRandoms()

let arrayBingoBoard = []
for (let i = 1; i <= 76; i++) {
    arrayBingoBoard.push(i)
}

let divBingo = document.getElementsByClassName("number-container")[0]
let divBingo2 = createNumbersDiv( arrayBingoBoard , "numbers" , "number-container")
divBingo2.classList.add("number-container")
divBingo.appendChild(divBingo2)

function randomizeBingoNumbers() {
    let button = document.getElementById("random-number")
    let allDivs = document.getElementsByClassName("numbers")
    let randomNumText = document.getElementById("random-num")
    button.addEventListener("click" , ()=>{
        let count = 0
        for (; ;) {
            let randomNum = Math.floor(Math.random() * 76)
            randomNumText.innerText =  `Number is : ${randomNum + 1}` 
            if (allDivs[randomNum].className !== "numbersselectedNum") {
                allDivs[randomNum].classList.add("selectedNum")
                break
            }
            if (count > 76) {
                break
            }
            count++
        }
    })
}
randomizeBingoNumbers()




function randomUserDivs() {
    let containerUserNode = document.getElementsByClassName("numbers-user")
    for (let i = 0; i < containerUserNode.length; i++) {
        let randomUserNum = Math.floor(Math.random() * 76)
        containerUserNode[i].innerText = randomUserNum
    }
}

randomUserDivs()



function generateUserBoard() {
    let value = document.getElementById("user-board-textarea")
    let button = document.getElementById("random-number-user")
    button.addEventListener("click" , ()=>{
        for (let i = 0; i < value.value; i++) {
            let newDivUser = document.createElement("div")
            let realDiv = document.getElementById("user-random-numbers")
            newDivUser.id = "user-random-numbers"
            let userDiv = createNumbersDiv( fillWithRandoms(), "numbers-user")
            userDiv.classList.add("numbers-user")
            newDivUser.appendChild(userDiv)
            realDiv.appendChild(newDivUser)
        }
    })
}

generateUserBoard()