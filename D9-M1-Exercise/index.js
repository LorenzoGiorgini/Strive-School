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
    for (let i = 0; i < 76; i++) {

    }
}