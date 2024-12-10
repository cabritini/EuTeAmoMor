function showCarousel(carouselId) {
    // Esconde todos os carrosséis
    const carousels = document.querySelectorAll('.carousel-overlay');
    carousels.forEach(carousel => {
        carousel.style.display = 'none';
    });

    // Exibe o carrossel selecionado
    const selectedCarousel = document.getElementById(carouselId);
    if (selectedCarousel) {
        selectedCarousel.style.display = 'flex';
    }
}

function hideCarousel(carouselId) {
    // Esconde o carrossel
    const selectedCarousel = document.getElementById(carouselId);
    if (selectedCarousel) {
        selectedCarousel.style.display = 'none';
    }
}

//-------- Botao VOltar-----------
let clickCount = 0;
let resetTimeout;

function DoubleClickVoltar(event) {
    clickCount++;

    // Impede o comportamento padrão do clique (não segue o link ainda)
    event.preventDefault();

    // Reseta a contagem após 2 segundos
    if (clickCount === 1) {
        resetTimeout = setTimeout(() => {
            clickCount = 0; // Reseta a contagem após 2 segundos
        }, 500);
    }

    // Se o link for clicado duas vezes, redireciona
    if (clickCount === 2) {
        // Usa currentTarget para garantir que estamos acessando o link correto
        window.location.href = event.currentTarget.href; // Redireciona para o link
    }
}