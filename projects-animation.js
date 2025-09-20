// Projects page entrance animation
document.addEventListener('DOMContentLoaded', () => {
    const projectPage = document.querySelector('.project-page');
    const bottomProfile = document.querySelector('.bottom-profile');
    const socialIcons = document.querySelector('.social-icons');

    // Start with project page hidden
    if (projectPage) {
        projectPage.style.opacity = '0';
        projectPage.style.transform = 'scale(0.95)';

        // Start with profile and social icons dimmed
        bottomProfile.style.opacity = '0.3';
        socialIcons.style.opacity = '0.3';

        // Animate in the project page
        setTimeout(() => {
            projectPage.style.transition = 'all 0.8s ease';
            projectPage.style.opacity = '1';
            projectPage.style.transform = 'scale(1)';

            // Restore profile and social icons
            bottomProfile.style.transition = 'opacity 0.8s ease';
            socialIcons.style.transition = 'opacity 0.8s ease';
            bottomProfile.style.opacity = '1';
            socialIcons.style.opacity = '1';
        }, 100);
    }

    // Back button animation
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Fade out project page
            projectPage.style.transition = 'all 0.8s ease';
            projectPage.style.opacity = '0';
            projectPage.style.transform = 'scale(0.95)';

            // Dim profile and social icons
            bottomProfile.style.transition = 'opacity 0.8s ease';
            socialIcons.style.transition = 'opacity 0.8s ease';
            bottomProfile.style.opacity = '0.3';
            socialIcons.style.opacity = '0.3';

            // Navigate back after animation
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 400);
        });
    }
});