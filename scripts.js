// Function to toggle the left menu
const leftMenu = document.getElementById("leftMenu");

function toggleMenu() {
    leftMenu.classList.toggle("open");
}

// Function to adjust page scaling based on screen width
function adjustPageScale() {
    const width = window.innerWidth; // Get the current screen width
    let scale;

    if (width >= 992 && width <= 1600) {
        scale = 0.9; // Shrink page to 90%
    } else if (width >= 700 && width <= 767) {
        scale = 0.8; // Shrink page to 80%
    } else if (width >= 600 && width < 700) {
        scale = 0.75; // Shrink page to 75%
    } else if (width <= 600) {
        scale = 0.5; // Shrink page to 50%
    } else {
        scale = 1; // Default to 100%
    }

    // Apply the scaling to the body element
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = "top left";
}

// Call the function on window resize and page load
window.addEventListener("resize", adjustPageScale);
window.addEventListener("load", adjustPageScale);
