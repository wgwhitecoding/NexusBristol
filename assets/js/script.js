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