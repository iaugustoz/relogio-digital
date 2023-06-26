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

    hora.innerHTML = horaRelogio;
    minutos.innerHTML = minutosRelogio;
    segundos.innerHTML = segundosRelogio;

}

setInterval(horarioAtual, 1000);