function changeH1() {
    let h1 = document.getElementById("logo-h1")
    h1.addEventListener("click" , ()=> {
        h1.innerText = "changed"
    })
}

changeH1()

function changeBackGround() {
    let background = document.getElementsByTagName("body")[0]
    background.addEventListener("dblclick" , ()=> {
        background.style.background = "cyan"
    })
}

changeBackGround()


function changeFooter () {
    const footer = document.getElementById("copyright")
    footer.addEventListener("click" , ()=> {
        footer.innerText = "fake text"
    })
}

changeFooter()


function changeAmazonLinks() {
  let amazonLink = document.querySelector("#merch a");
  console.log(amazonLink)
  amazonLink.classList.add("amazonLinks")
}

changeAmazonLinks()