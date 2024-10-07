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
