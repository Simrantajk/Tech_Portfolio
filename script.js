document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Initialize individual slideshows for each workshop
    let slideIndexes = [0, 0, 0, 0]; // Array to track the slide index for each workshop
    const workshopIds = ['workshop1', 'workshop2', 'workshop3', 'workshop4',]; // List of workshop IDs

    // Automatically cycle slides for each workshop
    workshopIds.forEach((workshopId, index) => {
        showSlides(slideIndexes[index], workshopId);

        setInterval(() => {
            changeSlide(1, index, workshopId);
        }, 5000); // Auto-slide every 5 seconds
    });

    // Change slide function for a specific workshop
    function changeSlide(n, workshopIndex, workshopId) {
        slideIndexes[workshopIndex] += n;
        showSlides(slideIndexes[workshopIndex], workshopId);
    }

    // Function to show slides for a specific workshop
    function showSlides(n, workshopId) {
        const slides = document.querySelectorAll(`#${workshopId} .workshop-slides img`);
        if (n >= slides.length) { slideIndexes[workshopIds.indexOf(workshopId)] = 0; }
        if (n < 0) { slideIndexes[workshopIds.indexOf(workshopId)] = slides.length - 1; }

        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndexes[workshopIds.indexOf(workshopId)]].style.display = "block";
    }
});
