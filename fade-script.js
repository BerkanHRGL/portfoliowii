// Handle fade effect based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const channelsGrid = document.querySelector('.channels-grid');

    if (channelsGrid) {
        channelsGrid.addEventListener('scroll', () => {
            const scrollLeft = channelsGrid.scrollLeft;
            const maxScroll = channelsGrid.scrollWidth - channelsGrid.clientWidth;

            // Right fade: moves with scroll to stay at right edge of visible area
            const fadeOffset = -scrollLeft;

            // Left fade: moves with scroll to stay at left edge of visible area
            // When scrollLeft = 0, hide it (-200px off-screen)
            // When scrolled, show it at the left edge of viewport
            const leftFadeOffset = scrollLeft > 0 ? scrollLeft : -200;

            // Update CSS custom properties for both fade positions
            channelsGrid.style.setProperty('--fade-offset', `${fadeOffset}px`);
            channelsGrid.style.setProperty('--left-fade-offset', `${leftFadeOffset}px`);
        });
    }
});