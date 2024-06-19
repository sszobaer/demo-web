//Preloader
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader once the content is loaded
    window.addEventListener("load", function() {
        var preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.menu li a');
    const sections = document.querySelectorAll('section');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });

    // Add 'active' class to the menu item when scrolling
    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});
