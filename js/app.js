const worlds = document.querySelector("body")

const title = document.querySelector("body")

worlds.addEventListener("keydown", function (event) {
    worlds.innerHTML = event.key;
}
)