let isDarkMode = false

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDarkMode() {
    if (!isDarkMode) {
        /* toggle variable*/
        isDarkMode = true;

        /* make background black and text white (some things are not included) */
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        
        /* fix links */
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++) {
            links[i].style.color = "white";
        }

        /* fix buttons */
        var buttons = document.getElementsByTagName("button");
        for(var i=0;i<buttons.length;i++) {
            buttons[i].style.color = "white";
        }

        /** fix github and linkedin icons */
        var icons = document.getElementsByClassName("icon")
        for(var i=0;i<icons.length;i++) {
            icons[i].style.filter = "invert(100%)";
        }
    } else {
        /* toggle variable*/
        isDarkMode = false;

        /* make background white and text black (some things are not included) */
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++) {
            links[i].style.color = "black";
        }
        
    }
}