const toggleButton = document.getElementById('toggle');
const vrLogo = document.getElementById('vrLogo'); // Asegúrate de que este ID sea único
const header = document.querySelector('header');
const icon = document.querySelectorAll('.icon')

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('section').classList.toggle('dark-mode');
    
    document.querySelectorAll('.cards').forEach(card => card.classList.toggle('dark-mode'));
     

    // Cambiar la imagen según el modo
    if (document.body.classList.contains('dark-mode')) {
        vrLogo.src = '/img_logos/sd.png'; 
        vrLogo.style.width = '60px';
        // toggleButton.style.background = 'rgba(224, 219, 219, 0.38)'
        icon.forEach(icon => {
            icon.style.background = ' rgba(224, 219, 219, 0.38)';
        });
     
    } else {
        vrLogo.src = '/img_logos/VR_BLACK.png';
        vrLogo.style.width = ''; 

    }
 
});