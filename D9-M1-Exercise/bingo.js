const generateRandoms = (max) => {
    let arr = [];
    arr.push(Math.floor(Math.random() * maxNumOfBingo));
    for (; ;) {
      let rnd = Math.floor(Math.random() * maxNumOfBingo);
      let flg = false;
      for (let i = 0; i < arr.length; i++) {
        if (rnd !== arr[i]) {
          flg = true;
        } else {
          flg = false;
          break;
        };
      }
      if (flg)
        arr.push(rnd);
      flg = false;
      if (arr.length === max) break;
    }
    return arr;
}
//
// Summary:
//      Returns an object, which is the HTML tag filld of numbers
//
// Parameters:
//      array:
//          An array filled with numbers, each index will be used
//          to fill the div
const generateDivOfNumbers = (array) => {
    const div = document.createElement("div");
    array.forEach((number) => {
        const numericDiv = document.createElement("div");
        numericDiv.innerText = number;
        numericDiv.classList.add("single-number");
        div.appendChild(numericDiv);
    });
    return div;
}

const generateAndHighlight = () => {
    const numbers = document.getElementsByClassName("single-number");
    for (; ;) {
        let rnd = Math.floor(Math.random() * maxNumOfBingo);
        if (!numbers[rnd].className.includes("highlighted")) {
            checkUsers(numbers[rnd].innerText);
            break;
        }
    }
}

const checkUsers = (generated) => {
    let userNumbers = document.getElementsByClassName("single-number");
    for (let i = 0; i < userNumbers.length; i++) {
        if (userNumbers[i].innerText == generated) {
            userNumbers[i].classList.add("highlighted")
        }
    }
}

// Main
const maxNumOfBingo = 76;
const maxNumOfBingoUsers = 24;

window.onload = () => {
    const bingoTable = generateDivOfNumbers( (() => {
        let arr = [];
        for (let i = 1; i <= maxNumOfBingo; i++) {
            arr.push(i);
        }
        return arr;
    })());
    bingoTable.classList.add("bingo");
    document.getElementById("bingo-table").appendChild(bingoTable);

    document.getElementById("generate").addEventListener("click", () => {
        generateAndHighlight();
    });

    document.getElementById("generate-users").addEventListener("click", () => {
        const numOfUsers = parseInt(document.getElementById("num-of-users").value);
        const allUsers = document.getElementById("all-users");
        for (let i = 0; i < numOfUsers; i++) {
            const obj = generateDivOfNumbers(generateRandoms(maxNumOfBingoUsers));
            obj.classList.add("bingo");
            obj.classList.add("user");
            allUsers.appendChild(obj);
        }
    });
}