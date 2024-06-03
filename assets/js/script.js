document.addEventListener('DOMContentLoaded', function() {
    // Arrow Navigation for Features
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const featuresContainer = document.getElementById('features-container');

    if (leftArrow && rightArrow && featuresContainer) {
        leftArrow.addEventListener('click', function() {
            featuresContainer.scrollBy({
                left: -featuresContainer.clientWidth / 3, // Scroll by one-third of the container width
                behavior: 'smooth'
            });
        });

        rightArrow.addEventListener('click', function() {
            featuresContainer.scrollBy({
                left: featuresContainer.clientWidth / 3, // Scroll by one-third of the container width
                behavior: 'smooth'
            });
        });
    }

    // Function to highlight the current page link
    function highlightCurrentPageLink() {
        const currentPath = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll('.custom-navbar a');
        links.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
            if (linkPath === currentPath) {
                link.classList.add('highlighted-link'); // Add the class to highlight the link
            } else {
                link.classList.remove('highlighted-link'); // Remove the class if it's not the current page
            }
        });
    }

    // Burger Menu and Overlay
    const burgerMenu = document.querySelector('.burger-menu');
    const navOverlay = document.getElementById('navOverlay') || document.getElementById('nav-overlay');
    const closeBtn = document.querySelector('.nav-overlay .close-btn');

    if (burgerMenu && navOverlay && closeBtn) {
        burgerMenu.addEventListener('click', function() {
            navOverlay.style.height = '100%';
            closeBtn.style.visibility = 'visible'; // Make close button visible when overlay is shown
            highlightCurrentPageLink(); // Highlight the current page link when the overlay is shown
        });

        closeBtn.addEventListener('click', function() {
            navOverlay.style.height = '0';
            closeBtn.style.visibility = 'hidden'; // Hide close button when overlay is hidden
        });

        // Optionally, close the overlay if the user clicks outside the content
        navOverlay.addEventListener('click', function(event) {
            if (event.target === navOverlay) {
                navOverlay.style.height = '0';
                closeBtn.style.visibility = 'hidden'; // Hide close button when overlay is hidden
            }
        });
    }

    // Hide burger menu on index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const burgerMenuElement = document.querySelector('.burger-menu');
        if (burgerMenuElement) {
            burgerMenuElement.style.display = 'none';
        }
    }
});








