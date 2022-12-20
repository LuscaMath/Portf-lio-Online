const header = document.querySelector('.header')
const toogle = document.getElementById('chk')
const root = document.querySelector(':root')
const main = document.getElementById('main')
const slider = document.querySelector('.slider')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

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
        root.style.setProperty('--primary-color', '#656DC8')
        root.style.setProperty('--secondary-color', '#ffffff')
        slider.setAttribute('src', './imagens/sol.png');
        header.style.backgroundColor = '#2c2c2c'
        navMenu.style.backgroundColor = '#2c2c2c'
        slider.style.backgroundColor = 'yellow'
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--primary-color', '#2c2c2c')
        root.style.setProperty('--secondary-color', '#ffffff')
        slider.setAttribute('src', './imagens/lua.png');
        slider.style.backgroundColor = '#48b4e0'
        navMenu.style.backgroundColor = '#656DC8'
        header.style.backgroundColor = '#656DC8'
        main.dataset.theme = 'dark'
    }
})


