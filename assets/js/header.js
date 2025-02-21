document.addEventListener('DOMContentLoaded', function () {
    const texts = ["desarrollador", "Ingeniero de Software", "Freelance", "Mikkel Alonso"];
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
            setTimeout(type, 1300); // Reduce el tiempo de espera entre palabras
        } else {
            setTimeout(type, 100); // Reduce el tiempo de espera entre letras
        }
    })();
});