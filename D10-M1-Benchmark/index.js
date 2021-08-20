// DOM 

//         31) Get element with ID "container" from the page
//         32) Get every "td" from the page
//         33) Create a cycle that prints the text inside every td of the page
//         34) Write a function to change the heading of the page
//         35) Write a function to add an extra row to the table
//         36) Write a function to add the class "test" to each row in the table
//         37) Write a function to add a red background to every link in the page
//         38) Console log "Page loaded" when the page is correctly loaded
//         39) Write a function to add new items to a UL
//         40) Write a function to empty a list

//         EXTRA

//         41) Add an eventListener to alert when the mouse is over a link, displaying the URL
//         42) Add a button to hide every image on the page
//         43) Add a button to hide and show the table from the page
//         44) Write a function to sum every number inside the TD (if the content is numeric)
//         45) Delete the last letter from the title each time the user clicks on it
//         46) Change a single TD background color when the user clicks on it
//         47) Add a button DELETE, on click it should delete a random TD from the page
//         48) Add a pink border to a cell when the mouse is over it
//         49) Write a function to add a table with 4 rows and 3 columns programmatically
//         50) Write a function to remove the table from the page

let mainDiv = document.getElementById("main-container")
let allTd = document.getElementsByTagName("td")

for (let i = 0; i < allTd.length; i++) {
    let text = allTd[i].innerText
    console.log(text)
}

function changeHeading() {
    let changed = document.getElementById("title")
    changed.addEventListener("click" , ()=>{
        changed.innerText = "You're a FOOL"
    })
}

changeHeading()

function extraRow() {
    let anotherRow = document.getElementsByTagName("tbody")[0]
    let newRow = document.createElement("tr")
    anotherRow.appendChild(newRow)
}

extraRow()

function addClassToRows() {
    let getClass = document.querySelectorAll("tr")
    for (let i = 0; i < getClass.length; i++) {
        getClass[i].classList.add("test")
    }
}

addClassToRows()

function redLinks() {
    let getAnchorTags = document.getElementsByTagName("a")
    for (let i = 0; i < getAnchorTags.length; i++) {
        getAnchorTags[i].style.background = "red"
    }
}

redLinks()

window.onload = function () {
    window.addEventListener("load", ()=>{
      alert("the page started")
    })
  };

window.onload()


function addItemsUl() {
    let getUl = document.querySelector("ul")
    let newLi = document.createElement("li")
    getUl.appendChild(newLi)
    newLi.innerText = "sdadadadasd"
}

addItemsUl()

/* function emptyList() {
    let getList = document.querySelector("ul")
    getList.remove()
}

emptyList() */