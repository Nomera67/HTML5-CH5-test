// variables de sélection de pages
const btnHome = document.querySelector('#btnHome');
const btnSource = document.querySelector('#btnSource');
const btnVisio = document.querySelector('#btnVisio');
const btnLight = document.querySelector('#btnLight');

const pageHome = document.querySelector('#pageHome');
const pageSource = document.querySelector('#pageSource');
const pageVisio = document.querySelector('#pageVisio');
const pageLight = document.querySelector('#pageLight');

// Afficher les pages en masquant les autres
function afficherPage(page) {
    // Masquer toutes les pages
    const pages = [pageHome, pageSource, pageVisio, pageLight];
    pages.forEach((p) => {
        p.style.display = 'none';
    });

    // Afficher la page demandée
    page.style.display = 'block';
}

// Surveiller les boutons pour réagir en fonction
btnHome.addEventListener('click', () => {
    afficherPage(pageHome);
    // Ajoutez la classe "active" au bouton actuellement sélectionné
    btnHome.classList.add('active');
    btnSource.classList.remove('active');
    btnVisio.classList.remove('active');
    btnLight.classList.remove('active');
});

btnSource.addEventListener('click', () => {
    afficherPage(pageSource);
    btnHome.classList.remove('active');
    btnSource.classList.add('active');
    btnVisio.classList.remove('active');
    btnLight.classList.remove('active');
});

btnVisio.addEventListener('click', () => {
    afficherPage(pageVisio);
    btnHome.classList.remove('active');
    btnSource.classList.remove('active');
    btnVisio.classList.add('active');
    btnLight.classList.remove('active');
});

btnLight.addEventListener('click', () => {
    afficherPage(pageLight);
    btnHome.classList.remove('active');
    btnSource.classList.remove('active');
    btnVisio.classList.remove('active');
    btnLight.classList.add('active');
});

// Afficher la pageHome par défaut
afficherPage(pageHome);
btnHome.classList.add('active');

//Variable des sliders et des boutons de gestion de l'éclairage
const sliders = document.querySelectorAll('.slider');
const lightOnButton = document.getElementById('lightOn');
const lightOffButton = document.getElementById('lightOff');

// Utiliser les sliders comme une liste à parcourir et y attacher un addEventListener
sliders.forEach((slider) => {
    const sliderValueId = slider.id.replace('slider', 'sliderValue');
    const sliderValueElement = document.getElementById(sliderValueId);

    // Fonction pour mettre à jour la valeur en-dessous du slider
    function updateSliderValue() {
        const sliderVal = slider.value;
        sliderValueElement.textContent = sliderVal;
    }

    // Suivre les changements de valeur des sliders
    slider.addEventListener('input', updateSliderValue);

    // Appeler la fonction initiale pour afficher la valeur par défaut
    updateSliderValue();
});

//Mettre à 100% en cas de sélection du bouton adéquat
lightOnButton.addEventListener('click', () => {
    sliders.forEach((slider) => {
        slider.value = 100;
        const sliderValueId = slider.id.replace('slider', 'sliderValue');
        const sliderValueElement = document.getElementById(sliderValueId);
        sliderValueElement.textContent = '100';
    });
});

// Mettre à 0% en cas de sélection du bouton adéquat
lightOffButton.addEventListener('click', () => {
    sliders.forEach((slider) => {
        slider.value = 0;
        const sliderValueId = slider.id.replace('slider', 'sliderValue');
        const sliderValueElement = document.getElementById(sliderValueId);
        sliderValueElement.textContent = '0';
    });
});

//Variables pour la section visio
const changeScreenButton = document.getElementById('changeScreen');
const visioFondImage = document.querySelector('.visio-fond');
const visioRetourImage = document.querySelector('.visio-retour');

changeScreenButton.addEventListener('click', () => {
    visioFondImage.classList.toggle('elargie');
    visioRetourImage.classList.toggle('elargie');
});

const labels = document.querySelectorAll('label');

labels.forEach((label) => {
    const inputId = label.getAttribute('for');
    const input = document.getElementById(inputId);

    // Ajoutez la classe "selected" lorsque l'input est en focus
    input.addEventListener('change', () => {
        labels.forEach((l) => {
            l.classList.remove('selected');
        });
        label.classList.add('selected');
    });
});
