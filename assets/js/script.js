document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const featuresContainer = document.getElementById('features-container');

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
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert('Email sent to ' + email + ' with message: ' + message);
    // Here you would typically send the data to a server
});

document.getElementById('vipBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('vipName').value;
    const email = document.getElementById('vipEmail').value;
    const phone = document.getElementById('vipPhone').value;
    const date = document.getElementById('vipDate').value;
    const time = document.getElementById('vipTime').value;
    alert('VIP Table booked for ' + name + ' on ' + date + ' at ' + time);
    // Here you would typically send the data to a server
});