// 1. Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-menu li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// 2. Product Quantity Control (Consolidated)
const quantityButtons = document.querySelectorAll('.quantity button, .quantity-selection button');
quantityButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const input = event.target.parentElement.querySelector('input');
        let currentValue = parseInt(input.value);
        
        if (event.target.innerText === '+') {
            input.value = currentValue + 1;
        } else if (event.target.innerText === '-' && currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
});



// 3. Add to Cart Functionality
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.drink');
        const productName = product.querySelector('h2').innerText;
        const productPrice = product.querySelector('.price').innerText;
        const quantity = product.querySelector('.quantity input').value;

        // Instead of alert, consider updating cart UI
        console.log(`Added to Cart: ${productName} x ${quantity} - ${productPrice}`);
    });
});

// 4. Responsive Header (Toggle Mobile Menu)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 5. Form Validation (For Example, Contact Form)
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (name === '' || email === '') {
        event.preventDefault();
        alert('Please fill out all fields.');
    } else if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// 6. Smooth Scrolling
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
