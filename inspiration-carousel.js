// All carousels functionality
document.addEventListener('DOMContentLoaded', () => {
    // Inspiration carousel
    const inspirationImages = [
        'imgs/inspo.png',
        'imgs/inspo2.png',
        'imgs/inspo3.png',
        'imgs/inspo4.png',
        'imgs/inspo5.png',
        'imgs/inspo6.png'
    ];

    // Iterations carousel
    const iterationsImages = [
        'imgs/iterations.png',
        'imgs/iterations2.png',
        'imgs/iterations3.png',
        'imgs/iterations4.png',
        'imgs/iterations5.png',
        'imgs/iterations6.png'
    ];

    // Final design carousel
    const finaldesignImages = [
        'imgs/finaldesign.png',
        'imgs/finaldesign2.png',
        'imgs/finaldesign3.png',
        'imgs/finaldesign4.png'
    ];

    // Collaboration carousel
    const collaborationImages = [
        'imgs/teamcharter.png',
        'imgs/flowspace.png',
        'imgs/whatsapp.png'
    ];

    // Initialize inspiration carousel
    initCarousel('inspiration', inspirationImages);

    // Initialize iterations carousel
    initCarousel('iterations', iterationsImages);

    // Initialize final design carousel
    initCarousel('finaldesign', finaldesignImages);

    // Initialize collaboration carousel
    initCarousel('collaboration', collaborationImages);

    function initCarousel(carouselName, images) {
        let currentIndex = 0;
        const imageElement = document.getElementById(`${carouselName}-image`);
        const currentSpan = document.getElementById(`${carouselName}-current`);
        const totalSpan = document.getElementById(`${carouselName}-total`);
        const prevButton = document.getElementById(`${carouselName}-prev`);
        const nextButton = document.getElementById(`${carouselName}-next`);

        // Set total count
        if (totalSpan) {
            totalSpan.textContent = images.length;
        }

        function updateImage() {
            if (imageElement) {
                imageElement.src = images[currentIndex];
                imageElement.alt = `${carouselName} ${currentIndex + 1}`;
            }
            if (currentSpan) {
                currentSpan.textContent = currentIndex + 1;
            }
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }

        // Event listeners
        if (nextButton) {
            nextButton.addEventListener('click', nextImage);
        }

        if (prevButton) {
            prevButton.addEventListener('click', prevImage);
        }

        // Initialize
        updateImage();
    }
});