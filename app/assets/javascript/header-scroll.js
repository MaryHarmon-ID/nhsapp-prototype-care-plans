// Get the header element
const header = document.querySelector('.app-global-navigation-native');

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);