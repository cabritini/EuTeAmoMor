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

//-------------------------------------- Click Duplo Melhorado ------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const DivSelecionada = document.querySelector('.DoubleClick');

    DivSelecionada.addEventListener('touchstart', (event) => {
        event.stopPropagation(); // Impede propagação de toque
        event.preventDefault(); // Evita comportamento padrão

        // Adiciona a classe 'active' ao tocar na div
        DivSelecionada.classList.add('active');
    });
});