let isDarkMode = false

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    var theme = document.getElementsByTagName('link')[1];
    if (theme.getAttribute('href') == 'light.css') { 
        theme.setAttribute('href', 'dark.css'); 
    } else { 
        theme.setAttribute('href', 'light.css'); 
    } 
}