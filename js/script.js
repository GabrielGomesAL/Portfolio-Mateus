// script.js
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuHamburguer.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Efeito de digitação
const typedText = document.querySelector('.typed-text');
const textArray = ["Desenvolvedor", "Analista de Dados", "Consultor"];
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

document.addEventListener('DOMContentLoaded', () => {
    if (typedText) setTimeout(type, 1000);
    particlesJS.load('particles-js', 'js/particles.json');
});