// Botón de volver arriba
const volverArribaBtn = document.getElementById('volver-arriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        volverArribaBtn.style.display = 'block';
    } else {
        volverArribaBtn.style.display = 'none';
    }
});

volverArribaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Seleccionamos el checkbox y el body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Escuchamos cuando el usuario cambia el modo
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Mostrar botón "Volver arriba" al hacer scroll
window.addEventListener('scroll', () => {
    const buttonUp = document.getElementById('volver-arriba');
    if (window.scrollY > 300) {
        buttonUp.style.display = 'block';
    } else {
        buttonUp.style.display = 'none';
    }
});

// script.js

// Cambiar entre modo claro y oscuro
const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.toggle('dark'));
    
    // Cambiar texto del botón según el modo
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = 'Modo Día';
    } else {
        toggleButton.textContent = 'Modo Noche';
    }
});

