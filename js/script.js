// script.js
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

// Menu Hamburguer
menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuHamburguer.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Efeito de digitação
const typedText = document.querySelector('.typed-text');
const textArray = ["Desenvolvedor", "Analista de Dados", "Consultor", "Inovador", "Criativo"];
let textIndex = 0;
let charIndex = 0;

const type = () => {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
};

const erase = () => {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
};

// Criar bolhas decorativas dinamicamente
const createBubbles = () => {
    for (let i = 0; i < 3; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 150 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.top = `${posY}%`;
        bubble.style.opacity = Math.random() * 0.2 + 0.1;
        bubble.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        document.body.appendChild(bubble);
    }
};

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação
    if (typedText) setTimeout(type, 1000);
    
    // Bolhas decorativas
    createBubbles();
    
    // Partículas (se a biblioteca estiver incluída)
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'js/particles.json');
    }
});
