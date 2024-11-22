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

//-----------------------------------------Click Duplo--------------------------------------------------------
        // Variável para armazenar o timer
        let clickTimeout;

        // Função para lidar com os cliques
        function ClickDuplo(event) {
            const element = event.target;
            let ClickN = parseInt(element.getAttribute('data-click-count') || '0');
            
            // Incrementa o contador de cliques
            ClickN++;
            element.setAttribute('data-click-count', ClickN);

            if (clickTimeout) {
                clearTimeout(clickTimeout); // Limpa o timer anterior, se existir
            }

            if (ClickN === 2) {
                element.setAttribute('data-click-count', 0); // Reseta o contador
                return true; // Permite o redirecionamento
            }

            // Cancela o clique no primeiro e define o timeout para resetar o estado
            event.preventDefault();

            clickTimeout = setTimeout(() => {
                element.setAttribute('data-click-count', 0); // Reseta o contador após 2 segundos
            }, 500); // 2000 ms = 2 segundos
        }
    