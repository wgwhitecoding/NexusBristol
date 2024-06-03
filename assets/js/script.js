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

    // Email Form Submission
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert('Email sent to ' + email + ' with message: ' + message);
            // Here you would typically send the data to a server
        });
    }

    // VIP Booking Form Submission
    const vipBookingForm = document.getElementById('vipBookingForm');
    if (vipBookingForm) {
        vipBookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('vipName').value;
            const email = document.getElementById('vipEmail').value;
            const phone = document.getElementById('vipPhone').value;
            const date = document.getElementById('vipDate').value;
            const time = document.getElementById('vipTime').value;
            alert('VIP Table booked for ' + name + ' on ' + date + ' at ' + time);
            // Here you would typically send the data to a server
        });
    }

    // Burger Menu and Overlay
    const burgerMenu = document.querySelector('.burger-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const closeBtn = document.querySelector('.nav-overlay .close-btn');

    if (burgerMenu && navOverlay && closeBtn) {
        burgerMenu.addEventListener('click', function() {
            navOverlay.style.height = '100%';
            closeBtn.style.visibility = 'visible'; // Make close button visible when overlay is shown
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





