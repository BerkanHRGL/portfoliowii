// Custom cursor implementation
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('.channel-card, .social-icon');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Show cursor when mouse enters window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});