let slideIndex = 0;
const slideInterval = 3000; // Tempo em milissegundos para trocar os slides

// Função para mostrar o slide atual
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Função para mover o slide (manual)
function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Função para iniciar a troca automática de slides
function startSlideShow() {
    setInterval(() => {
        moveSlide(1); // Move para o próximo slide
    }, slideInterval); // Troca de slide a cada 3 segundos
}

// Função para alternar o menu no modo móvel
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Adiciona evento de clique ao menu-toggle
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// Inicializa o slider ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startSlideShow();
});
