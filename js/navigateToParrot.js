function navigate() {
    let parrotImg = document.getElementById("parrot-img")
    parrotImg.addEventListener("click", navigateToParrot)
}

function navigateToParrot() {
    window.location.href = "parrot.html"
}

navigate()