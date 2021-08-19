function createNumbersDiv() {
    let containerNode = document.getElementById("number-container")
    for (let i = 1; i <= 76; i++) {
        let newDiv = document.createElement("div")
        newDiv.innerText = i
        newDiv.classList.add("numbers")

        containerNode.appendChild(newDiv)
    }
}

createNumbersDiv()

function randomizeBingoNumbers() {
    let button = document.getElementById("random-number")
    let allDivs = document.getElementsByClassName("numbers")
    button.addEventListener("click" , ()=>{
        let count = 0
        for (; ;) {
            let randomNum = Math.floor(Math.random() * 76)
            if (allDivs[randomNum].className !== "numbers selectedNum") {
                allDivs[randomNum].classList.add("selectedNum")
                console.log(allDivs[randomNum].innerText)
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

