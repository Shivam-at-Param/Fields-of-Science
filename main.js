var screenWidth = window.innerWidth;
var navLinks = document.querySelectorAll('.side-nav ul li a');
var desktop = document.getElementsByClassName("desktop")[0];
var mobile = document.getElementsByClassName("mobile")[0];

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

    nav_links.forEach((link) => link.classList.remove('active'));
    nav_links[index].classList.add('active');

}






