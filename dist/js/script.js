
// Function to toggle dark/light mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("bg-gray-900"); // Dark background
    body.classList.toggle("bg-gray-300"); // Light background
    body.classList.toggle("text-white"); // Dark text
    body.classList.toggle("text-gray-900"); // Light text
    body.classList.toggle("light-theme");

    // Update button styles
    const projetcts = document.querySelectorAll(".project, .skill-card, .navbar");
    projetcts.forEach((div) => {
        div.classList.toggle("bg-gray-800"); // Dark div background
        div.classList.toggle("bg-gray-200"); // Light div background
        // Light div text Light div hover
    });

    // Update input and textarea styles
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
        input.classList.toggle("bg-gray-800"); // Dark input background
        input.classList.toggle("bg-white"); // Light input background
        input.classList.toggle("text-white"); // Dark input text
        input.classList.toggle("text-gray-900"); // Light input text
        input.classList.toggle("border-gray-700"); // Dark input border
        input.classList.toggle("border-gray-300"); // Light input border
    });

    // Save the theme preference in local storage
    if (body.classList.contains("bg-gray-900")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    // Update the icon based on the current theme
    const themeIcon = document.getElementById("theme-icon");
    if (body.classList.contains("bg-gray-900")) {
        themeIcon.setAttribute(
            "d",
            "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 1 9.002-5.998Z"
        );
        /* themeIcon.setAttribute('d', 'M12 3v1.5a7.5 7.5 0 1 0 0 15v1.5a9 9 0 1 1 0-18z'); */ // Moon icon path
    } else {
        themeIcon.setAttribute(
            "d",
            "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227 -4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        );
        /* themeIcon.setAttribute('d', 'M12 4.5a7.5 7.5 0 0 1 0 15 9 9 0 1 0 0-15z'); */ // Sun icon path
    }
}

// Load the theme from local storage on page load
window.onload = function () {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        toggleTheme();
    }

    // Hide the back to top button initially
    const backToTopButton = document.getElementById("back-to-top");
    const whatsaapButton = document.getElementById("whatsapp-button");
    backToTopButton.style.display = "none";
    whatsaapButton.style.display = "none"; // Show button

    // Show/hide the back to top button based on scroll position
    window.addEventListener("scroll", function () {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            backToTopButton.style.display = "flex"; // Show button
            whatsaapButton.style.display = "flex"; // Show button
        } else {
            backToTopButton.style.display = "none"; // Hide button
            whatsaapButton.style.display = "none"; // Hide button
        }
    });

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        if (mobileMenu.classList.contains('show')) {
            mobileMenuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 50);
            });
        } else {
            mobileMenuItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-5px)';
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove('show');
            mobileMenuItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-5px)';
            });
        }
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenuItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-5px)';
            });
        });
    });
};

const text = "Web and Mobile Developer";
const typingEffect = document.querySelector(".typing-effect");
let charIndex = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        // Remove a character
        typingEffect.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex <= 0) {
            isDeleting = false; // Start typing again
            setTimeout(type, 1500); // Pause before starting to type again
        } else {
            setTimeout(type, 150); // Typing speed
        }
    } else {
        // Add a character
        typingEffect.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === text.length) {
            isDeleting = true; // Start deleting after completing the text
        }
        setTimeout(type, 100); // Typing speed
    }
}

type();

 // Function to handle video play on hover
 const projectCards = document.querySelectorAll('.project');

 projectCards.forEach((card) => {
     const video = card.querySelector('video');
 
     // Show video on click for mobile
     card.addEventListener('click', () => {
         if (video.classList.contains('hidden')) {
             video.classList.remove('hidden'); // Show the video
             video.play(); // Play the video
         } else {
             video.pause(); // Pause the video
             video.currentTime = 0; // Reset to the start
             video.classList.add('hidden'); // Hide the video
         }
     });
 });