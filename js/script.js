

const menuIconElement = document.getElementById('menu-icon')
const menuElement = document.getElementById('menu-ul')

const showMenu = () => {
    if (menuElement.classList.contains('menu-show')) {
        menuIconElement.src = '../assets/icon-hamburger.svg'
        menuElement.classList.remove('menu-show')
    } else {
        menuIconElement.src = '../assets/icon-close.svg'
        menuElement.classList.add('menu-show')
    }
}

menuIconElement.addEventListener('click', showMenu)