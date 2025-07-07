const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;
let index = 0;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
}

setInterval(() => {
    nextSlide();
}, 5000);

// მაღლა ასქროლვა

let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// cookie ==========

document.addEventListener('DOMContentLoaded', function() {
        const cookieNotification = document.getElementById('cookie');
        const acceptButton = document.getElementById('acceptCookies');
        cookieNotification.style.display = 'flex';
        acceptButton.addEventListener('click', function() {
            cookieNotification.style.display = 'none';
        });
    });