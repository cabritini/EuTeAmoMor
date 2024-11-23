const dataInicial = new Date("2024-09-21T18:48:00");

function Contador() {
    const dataAtual = new Date();
    const diferenca = dataAtual - dataInicial;

    const diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horasPassadas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosPassados = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundosPassados = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.querySelector("#dias").innerHTML = String(diasPassados).padStart(2, '0');
    document.querySelector("#horas").innerHTML = String(horasPassadas).padStart(2, '0');
    document.querySelector("#minutos").innerHTML = String(minutosPassados).padStart(2, '0');
    document.querySelector("#segundos").innerHTML = String(segundosPassados).padStart(2, '0');
}

setInterval(Contador, 1000);

//-------------------------------------- Click Duplo Triste ------------------------------------------------------
let clickCount = 0;
let resetTimeout;

function DoubleClick(event) {
    clickCount++;

    // Impede o comportamento padrão do clique (não segue o link ainda)
    event.preventDefault();

    // Reseta a contagem após 2 segundos
    if (clickCount === 1) {
        resetTimeout = setTimeout(() => {
            clickCount = 0; // Reseta a contagem após 2 segundos
        }, 2000);
    }

    // Se o link for clicado duas vezes, redireciona
    if (clickCount === 2) {
        // Usa currentTarget para garantir que estamos acessando o link correto
        window.location.href = event.currentTarget.href; // Redireciona para o link
    }
}