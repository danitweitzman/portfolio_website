const projectItems = document.querySelectorAll('.sidebar .project-item');
const allCaseStudies = document.querySelectorAll('.case-study');
const mainContent = document.querySelector('.main-content'); 

function navigateToProjectPage(projectName) {
    if (projectName) {
        window.location.href = `/projects/${projectName}/index.html`;
    }
}

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');

        if (sectionId) {
            navigateToProjectPage(sectionId);
        }
    });
});

const galleryContainers = document.querySelectorAll('.gallery-container[data-section]');
galleryContainers.forEach(container => {
    container.addEventListener('click', () => {
        const sectionId = container.getAttribute('data-section');

        if (sectionId) {
            navigateToProjectPage(sectionId);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name-toggle');
    if (nameElement) {
        const nameText = nameElement.innerText;
        nameElement.innerHTML = [...nameText]
            .map(letter => `<span>${letter}</span>`)
            .join('');

        nameElement.addEventListener('click', () => {
            nameElement.classList.toggle('rotalic');

            allCaseStudies.forEach(cs => cs.classList.add('hidden'));
            document.querySelectorAll('.project-item').forEach(pi => pi.classList.remove('active'));

            const homeSection = document.getElementById('home');
            homeSection.classList.remove('hidden');

            mainContent.scrollTop = 0;

            nameElement.closest('.project-item').classList.add('active');
        });
    }
});
