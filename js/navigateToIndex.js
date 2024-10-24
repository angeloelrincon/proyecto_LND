function navigateFromParrot() {
    let parrotImg = document.getElementById("home-button-header")
    parrotImg.addEventListener("click", navigateToIndex)
}

function navigateToIndex() {
    window.location.href = "index.html"
}

navigateFromParrot()