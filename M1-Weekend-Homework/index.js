let students = [
    {
        id: 3456,
        name: "Jones",
        surname: "Miller",
        age: 29,
        email: "miller@gmail.com"
    }, 
    {
        id: 4674,
        name: "Giorgio",
        surname: "Rossi",
        age: 34,
        email: "smith.2000@outlook.it"
    },
    {
        id: 9567,
        name: "Lorenzo",
        surname: "Giorgini",
        age: 20,
        email: "lorenzo@outlook.com"
    }
]

let enrolledStudents = [

]

function createTd() {
    const key = ["id" , "name", "surname","age" ,"email"]
    const table = document.getElementsByTagName("table")[0]
    for (let i = 0; i < students.length; i++) {
        let newTr = document.createElement("tr")
        for (let j = 0; j < 5; j++) {
            let newTd = document.createElement("td")
            newTd.innerText = students[i][key[j]]
            newTr.appendChild(newTd)
        }
        let plusButton = document.createElement("button")
        plusButton.classList.add("action-button")
        plusButton.innerText = "+"
        plusButton.addEventListener("click" , ()=>{
            addButton(i)
        })
        newTr.appendChild(plusButton)
        table.appendChild(newTr)
    }
}

createTd()

function changeTextButton() {
    let title = document.getElementsByTagName("title")[0]
    let h1 = document.getElementById("page-title")
    let button = document.getElementById("changeText")
    button.addEventListener("click" , ()=>{
        h1.innerText = "textChange"
        title.innerText = "textChange"
    })
}

changeTextButton()

function emptyTextAreaAlert() {
    let button = document.getElementById("changeText")
    let textArea = document.getElementById("text-area")
    button.addEventListener("click" , ()=>{
        if(textArea.value === "") {
            alert("type something")
        }
    })
}

emptyTextAreaAlert()


function addButton(_index) {
    enrolledStudents.push(students[_index])
    let newLi = document.createElement("li")
    newLi.innerText = students[_index].id + ' ' + students[_index].name + ' ' + students[_index].surname + ' ' + students[_index].age + ' ' + students[_index].email
    const ul = document.getElementsByTagName("ul")[0]
    let minusButton = document.createElement("button")
    minusButton.classList.add("delete-button")
    minusButton.innerText = "-"
    newLi.appendChild(minusButton)
    removeButton(newLi , minusButton , ul)
    ul.appendChild(newLi)
}

function removeButton(_li , _button , _ul) {
    _button.addEventListener("click" , ()=>{
        _ul.removeChild(_li)
    })
}


function studentForm() {
    
}