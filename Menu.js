// JavaScript to handle category switching
const categories = document.querySelectorAll('.menu-category');
const sections = document.querySelectorAll('.menu-section');

categories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        // Add active class to the clicked category
        category.classList.add('active');

        // Hide all sections and remove active class
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Get the target section to show
        const targetSection = document.querySelector(`.${category.getAttribute('data-target')}`);
        targetSection.classList.add('active');
    });
});
