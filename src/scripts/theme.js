export function darkMode() {
    const figure = document.getElementsByClassName('header-figure')[0];
    const icon = figure.querySelector('img');

    figure.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            icon.src = './src/assets/icons/sun-icon.svg';
        } else {
            icon.src = './src/assets/icons/moon-icon.svg';
        }
    });
}
darkMode();