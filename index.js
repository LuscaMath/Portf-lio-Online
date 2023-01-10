const header = document.querySelector('.header')
const toogle = document.getElementById('chk')
const root = document.querySelector(':root')
const main = document.getElementById('main')
const slider = document.querySelector('.slider')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const mainText = document.querySelector('main-section-text')
const projectDiv = document.querySelectorAll('.projects-item')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
})

toogle.addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--primary-color', '#ffffff')
        root.style.setProperty('--secondary-color', '#6C63FF')
        root.style.setProperty('--font-color', '#242424')
        root.style.setProperty('--terciary-color', 'lightgrey')
        root.style.setProperty('--form-color', 'rgb(173, 166, 166)')
        slider.setAttribute('src', './imagens/sol.png');
        slider.style.backgroundColor = 'yellow'
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--primary-color', '#171818')
        root.style.setProperty('--secondary-color', '#6C63FF')
        root.style.setProperty('--font-color', '#ffffff')
        root.style.setProperty('--terciary-color', '#282c2c')
        root.style.setProperty('--form-color', '#171818')
        slider.setAttribute('src', './imagens/lua.png');
        slider.style.backgroundColor = '#48b4e0'
        main.dataset.theme = 'dark'
    }
})


