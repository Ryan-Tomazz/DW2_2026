let lampada = document.getElementById("lampada")

function lam() {
    lampada.addEventListener("click", function () {
        if (lampada.src.includes("lampada-off.jpg")) {
            lampada.src = "./images/lampada-on.jpg";
            lampada.alt = "Lâmpada ligada";
        } else {
            lampada.src = "./images/lampada-off.jpg";
            lampada.alt = "Lâmpada desligada";
        }
    });
}

lam();