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

function clickCoracao(event) {
    // Recupera o número de cliques armazenados no elemento
    const element = event.target;
    let Clicks = parseInt(element.getAttribute('data-click-count') || '0');
    
    // Incrementa o número de cliques
    Clicks++;
    element.setAttribute('data-click-count', Clicks);
    
    // Se for o segundo clique, segue o link
    if (Clicks === 2) {
        element.setAttribute('data-click-count', 0); // Reseta o contador
        return true; // Permite o redirecionamento
    }
    event.preventDefault();
}