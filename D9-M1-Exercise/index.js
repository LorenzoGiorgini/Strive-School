function createNumbersDiv(maxToGenerate, className , father) {
    let containerNode = document.getElementById(father)
    for (let i = 1; i <= maxToGenerate; i++) {
        let newDiv = document.createElement("div")
        newDiv.innerText = i
        newDiv.classList.add(className)

        containerNode.appendChild(newDiv)
    }
}

createNumbersDiv(76 , "numbers" , "number-container")

function randomizeBingoNumbers() {
    let button = document.getElementById("random-number")
    let allDivs = document.getElementsByClassName("numbers")
    button.addEventListener("click" , ()=>{
        let count = 0
        for (; ;) {
            let randomNum = Math.floor(Math.random() * 76)
            if (allDivs[randomNum].className !== "numbers selectedNum") {
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


createNumbersDiv(24 , "numbers-user" , "user-random-numbers")

function randomUserDivs() {
    let containerUserNode = document.getElementsByClassName("numbers-user")
    for (let i = 0; i <= containerUserNode.length; i++) {
        let randomNum = Math.floor(Math.random() * 76) + 1
        containerUserNode[i].innerText = randomNum
    }
}

randomUserDivs()