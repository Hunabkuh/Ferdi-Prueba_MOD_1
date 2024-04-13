document.getElementById("div-laptops").addEventListener("click", animarOferta);

document.getElementById("div-laptops").style.animationPlayState = "paused";

function animarOferta() {
    document.getElementById("div-laptops").style.animationPlayState = "running";
}

