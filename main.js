import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Welcome Nerei!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click al logo per començar a contar!
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

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
