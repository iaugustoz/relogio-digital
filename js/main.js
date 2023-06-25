const hora  = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function horarioAtual() {
    let data = new Date();
    let horaRelogio = data.getHours();
    let minutosRelogio = data.getMinutes();
    let segundosRelogio = data.getSeconds();


    if (segundosRelogio < 10) {
        segundosRelogio = "0" + segundosRelogio;

    } else if (minutosRelogio < 10) {
        minutosRelogio = "0" + minutosRelogio;

    } else if (horaRelogio < 10) {
        horaRelogio = "0" + horaRelogio;
    }

    hora.innerHTML = horaRelogio;
    minutos.innerHTML = minutosRelogio;
    segundos.innerHTML = segundosRelogio;

}

setInterval(horarioAtual, 1000);

const linkPortfolio = document.getElementById("portfolio");

linkPortfolio.addEventListener("click", function() {
    Swal.fire({
        titleText: 'Em desenvolvimento 🚧',
        icon: 'info',
        confirmButtonColor: "#000"
    });
});

