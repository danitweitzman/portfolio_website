const projectItems = document.querySelectorAll('.project-item');
const allCaseStudies = document.querySelectorAll('.case-study');

// Functionality for project items
projectItems.forEach(item => {
  item.addEventListener('click', () => {
    allCaseStudies.forEach(cs => {
      cs.classList.add('hidden');
    });

    projectItems.forEach(pi => {
      pi.classList.remove('active');
    });

    const sectionId = item.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }

    item.classList.add('active');
  });
});

// Functionality to rotate each letter individually on click and hover
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name-toggle');

  if (nameElement) {
    // Wrap each letter with a span for individual styling
    const nameText = nameElement.innerText;
    nameElement.innerHTML = [...nameText].map(letter => `<span>${letter}</span>`).join('');

    // Click event to toggle rotation
    nameElement.addEventListener('click', () => {
      nameElement.classList.toggle('rotalic');
    });
  }
});
