// Project page functionality
document.addEventListener('DOMContentLoaded', () => {
    const projectsChannel = document.querySelector('.channel-card.projects');
    const readingChannel = document.querySelector('.channel-card.reading');
    const channelsGrid = document.querySelector('.channels-grid');
    const bottomProfile = document.querySelector('.bottom-profile');
    const socialIcons = document.querySelector('.social-icons');

    // Projects channel click handler with animation
    if (projectsChannel) {
        projectsChannel.addEventListener('click', () => {
            // Start fade-out animation
            channelsGrid.classList.add('fade-out');
            bottomProfile.style.transition = 'opacity 0.8s ease';
            socialIcons.style.transition = 'opacity 0.8s ease';
            bottomProfile.style.opacity = '0.3';
            socialIcons.style.opacity = '0.3';

            // Navigate after animation
            setTimeout(() => {
                window.location.href = 'projects.html';
            }, 400);
        });
    }

    // Reading guide channel click handler with animation
    if (readingChannel) {
        readingChannel.addEventListener('click', () => {
            // Start fade-out animation
            channelsGrid.classList.add('fade-out');
            bottomProfile.style.transition = 'opacity 0.8s ease';
            socialIcons.style.transition = 'opacity 0.8s ease';
            bottomProfile.style.opacity = '0.3';
            socialIcons.style.opacity = '0.3';

            // Navigate after animation
            setTimeout(() => {
                window.location.href = 'reading.html';
            }, 400);
        });
    }

    // Project tab switching (for when you add more projects)
    const projectTabs = document.querySelectorAll('.project-tab');
    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            projectTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');

            // Here you can add logic to switch between different projects
            const projectId = tab.dataset.project;
            console.log(`Switching to project ${projectId}`);
        });
    });
});