alert("Sono nel file app.js");
//burgermenu
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('open');
}
);
//scroll reveal
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
}
);
//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }
        );
    }
    );
}
);
//form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    alert('Form submitted successfully!');
    form.reset();
}
);
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
//back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}
);
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }
    );
}
);
//dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
}
);
//carousel (using a simple implementation)
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');  