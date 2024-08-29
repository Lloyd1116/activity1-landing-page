document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-xmark'); // Change icon to "X" when menu is open
    });

    // Close the menu when a navbar link is clicked
    navbar.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark'); // Change icon back to bars
        }
    });

    // Smooth scrolling to sections
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Scroll to top button
    const scrollTopButton = document.querySelector('.footer-iconTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });
});