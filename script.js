// Custom cursor tracking
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.wii-menu::before');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Channel click effects
document.querySelectorAll('.channel-card').forEach(card => {
    card.addEventListener('click', function() {
        if (!this.classList.contains('empty')) {
            // Add click effect
            this.style.transform = 'translateY(-3px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Add channel name to console (placeholder for navigation)
            const channelText = this.querySelector('.channel-text').textContent;
            console.log(`Navigating to: ${channelText}`);
        }
    });
});

// Add subtle floating animation to the profile section
document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.bottom-profile');
    let floatDirection = 1;

    setInterval(() => {
        const currentTransform = profile.style.transform || 'translateY(0px)';
        const currentY = parseFloat(currentTransform.match(/translateY\((.+?)px\)/) || [0, 0])[1];
        const newY = currentY + (floatDirection * 0.5);

        if (Math.abs(newY) > 3) {
            floatDirection *= -1;
        }

        profile.style.transform = `translateY(${newY}px)`;
    }, 100);
});