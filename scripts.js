

document.addEventListener("DOMContentLoaded", function () {
    const animatedName = document.getElementById("animated-name");

    function checkScroll() {
        const rect = animatedName.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            animatedName.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load in case it's already visible
});

