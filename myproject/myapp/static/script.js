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

    document.addEventListener('DOMContentLoaded', function() {
        var emailInput = document.getElementById('email');
        emailInput.addEventListener('input', function() {
            if (!emailInput.value.endsWith('@gmail.com')) {
                emailInput.value += '@gmail.com';
            }
        });
    });
    // Custom smooth scrolling function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const ease = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            smoothScroll(targetId, 1000); // Adjust the duration (in milliseconds) as needed
        });
    });
});


