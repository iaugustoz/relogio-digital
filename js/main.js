const hora  = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function horarioAtual() {
    const data = new Date();
    let horaRelogio = data.getHours();
    let minutosRelogio = data.getMinutes();
    let segundosRelogio = data.getSeconds();


    if (segundosRelogio < 10) {
        segundosRelogio = "0" + segundosRelogio;

    } 
    
    if (minutosRelogio < 10) {
        minutosRelogio = "0" + minutosRelogio;

    } 
    
    if (horaRelogio < 10) {
        horaRelogio = "0" + horaRelogio;
    }

    hora.textContent = horaRelogio;
    minutos.textContent = minutosRelogio;
    segundos.textContent = segundosRelogio;

}

setInterval(horarioAtual, 1000);

const span = document.getElementsByTagName("span")[5];
const ballon = document.getElementsByClassName("ballon")[0];
const div = document.getElementById("div");

span.addEventListener("click", function() {
    if (div.style.display == "none") {
        ballon.style.display = "block";
        div.style.cssText =
        "display: flex;" +
        "flex-direction: column;" +
        "justify-content: flex-end;" +
        "align-items: start;" +
        "padding: 0px 10px;" +
        "row-gap: 15px;"; 
        
    } else {
        div.style.display = "none";
    }

});
