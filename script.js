/*JavaScript for Navbar Scroll & Menu Toggle */
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Toggle menu on mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
