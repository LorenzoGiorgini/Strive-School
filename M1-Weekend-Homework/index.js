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


function addButton() {
    let student_name = document.getElementsByClassName("name")
    let student_surname = document.getElementsByClassName("surname")
    let add_button = document.getElementsByClassName("action-button")
    let ul = document.getElementsByTagName("ul")[0]
    for (let i = 0; i < add_button.length; i++) {
        add_button[i].addEventListener("click" , ()=>{
            let remove_button = document.createElement("button")
            remove_button.innerText = "-"
            remove_button.classList.add("remove-item")
            let li = document.createElement("li")
            li.innerText = student_name[i].innerText + " " + student_surname[i].innerText
            li.appendChild(remove_button)
            removeButton()
            ul.appendChild(li)
        })
    }
}

addButton()

function removeButton() {
    let removeItem = document.getElementsByClassName("remove-item")
    let li = document.getElementsByTagName("li")
    console.log(li)
    for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click" , ()=>{
            li[i].remove()
        })
    }
}
