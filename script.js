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
// Seleciona o elemento da div e do link
const divClickReq = document.querySelector('.ClickReq');
const linkPagina = document.querySelector('.pagina');

// Ativa o hover na div ao tocar nela no celular
divClickReq.addEventListener('touchstart', () => {
  linkPagina.style.pointerEvents = 'auto'; // Permite o clique no link
  linkPagina.style.cursor = 'pointer';    // Mostra o cursor como pointer (opcional)
});

// Desativa o hover quando o toque sai da div
divClickReq.addEventListener('touchend', () => {
  linkPagina.style.pointerEvents = 'none'; // Desativa o clique no link
  linkPagina.style.cursor = 'default';    // Restaura o cursor (opcional)
});