var hora  = document.getElementById("hora");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

function horarioAtual() {
    var data = new Date();
    var horaRelogio = data.getHours();
    var minutoRelogio = data.getMinutes();
    var segundoRelogio = data.getSeconds();


    if (segundoRelogio < 10) {
        segundoRelogio = "0" + segundoRelogio;

    } else if (minutoRelogio < 10) {
        minutoRelogio = "0" + minutoRelogio;

    } else if (horaRelogio < 10) {
        horaRelogio = "0" + horaRelogio;
    }

    hora.innerHTML = horaRelogio;
    minutos.innerHTML = minutoRelogio;
    segundos.innerHTML = segundoRelogio;

}

setInterval(horarioAtual, 1000);

