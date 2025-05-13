document.addEventListener('DOMContentLoaded', function () {
    const texts = ["desarrollador", "Ingeniero de Software", "Freelancer", "Mikkel Alonso"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('dynamic-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 1300); // Tiempo de espera entre palabras
        } else {
            setTimeout(type, 100); // Tiempo de espera entre letras
        }
    })();
});

// Codigo para cambiar de tema oscuro a claro

//   const checkbox = document.getElementById('theme-toggle');

//         checkbox.addEventListener('change', () => {
//             document.body.classList.toggle('light-theme');
//         });

//         // Tema oscuro por defecto
//         window.addEventListener('DOMContentLoaded', () => {
//             document.body.classList.remove('light-theme');
//         });