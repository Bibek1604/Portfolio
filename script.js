document.addEventListener('DOMContentLoaded', function() {
    // Select all <li> elements in the document
    var listItems = document.querySelectorAll('li');

    // Iterate through each <li> element and add mouseenter and mouseleave event listeners
    listItems.forEach(function(item) {
        // When the mouse enters the <li> element
        item.addEventListener('mouseenter', function() {
            // Change the text color to blue
            this.style.color = 'yellow';
        });

        // When the mouse leaves the <li> element
        item.addEventListener('mouseleave', function() {
            // Reset the text color back to its original state
            // If you have a specific color set in CSS, replace '' with that color
            this.style.color = '';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust scroll speed as needed
    const scrollWidth = slider.scrollWidth;
    const containerWidth = slider.parentElement.offsetWidth;

    function scrollSlider() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollWidth) {
            scrollPosition = -containerWidth;
        }
        slider.style.transform = `translateX(-${scrollPosition}px)`;
    }

    // Set interval for sliding
    const interval = setInterval(scrollSlider, 10); // Adjust interval duration as needed

    // Stop sliding when the mouse hovers over the slider
    slider.addEventListener("mouseenter", function() {
        clearInterval(interval);
    });

    // Resume sliding when the mouse leaves the slider
    slider.addEventListener("mouseleave", function() {
        interval = setInterval(scrollSlider, 10); // Adjust interval duration as needed
    });
});
