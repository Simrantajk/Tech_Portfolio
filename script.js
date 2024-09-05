document.addEventListener("DOMContentLoaded", function() {
    // Add any JavaScript animations or interactive functionality here

    // Smooth scrolling for anchor links (if needed)
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
});
