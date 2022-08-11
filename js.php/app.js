const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
const body = document.body;

if(body.classList.contains('dark')){
    body.classList.add('light')
    body.classList.remove('dark')
    btnToggle.innerHTML = display_image('sun.png',
    276,
    110,
    'JavaScriptImage');
} else if(body.classList.contains('light')){
    body.classList.add('dark')
    body.classList.remove('light')
    btnToggle.innerHTML = display_image('moon.png',
    276,
    110,
    'JavaScriptImage');
}

})