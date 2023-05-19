var screenWidth = window.innerWidth;

let sideNav = document.querySelector('.side-nav ul li a');
var navLinks = document.querySelectorAll('.side-nav ul li a');
var desktop = document.getElementsByClassName("desktop")[0];
var mobile = document.getElementsByClassName("mobile")[0];
let navColors = ["#AD7B10", "#AD7B10", "#4E6D6E", "#4E5F33", "#7D2B05", "#6F2700", "#012443", "#B1CC81", "#981F0E", "#233730", "#74B3BC", "#CD8D5D"];


if (screenWidth > 450) {
    mobile.classList.remove("active-section")
    desktop.classList.add("active-section")
} else {
    mobile.classList.add("active-section")
    desktop.classList.remove("active-section")
}


navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        if (current) {
            current[0].className = current[0].className.replace(' active', '');
        }
        this.className += ' active';
    });
});

window.onload = function () { changeActiveNav() };

// JavaScript
window.onscroll = function () { changeActiveNav() };

function changeActiveNav() {
    const activeSection = document.querySelector('.active-section');
    const sections = activeSection.querySelectorAll('.container > div');
    const nav_links = document.querySelectorAll('.side-nav ul li a');
    let index = sections.length;

    while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) { }

    nav_links.forEach((link) => {
        link.classList.remove('active')
        // Change the color of all links
        link.style.backgroundColor = navColors[index];
    });
    nav_links[index].classList.add('active');
}
