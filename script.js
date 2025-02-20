const projectItems = document.querySelectorAll('.sidebar .project-item');
const allCaseStudies = document.querySelectorAll('.case-study');

// Sidebar click: Show corresponding project section.
projectItems.forEach(item => {
  item.addEventListener('click', () => {
    // Hide all case studies.
    allCaseStudies.forEach(cs => cs.classList.add('hidden'));

    // Remove active class from all sidebar items.
    document.querySelectorAll('.project-item').forEach(pi => pi.classList.remove('active'));

    // Get target section from data attribute.
    const sectionId = item.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }

    // Mark this item as active.
    item.classList.add('active');
  });
});

// Name (home) click: Show the home section.
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('name-toggle');
  if (nameElement) {
    // Split name into spans.
    const nameText = nameElement.innerText;
    nameElement.innerHTML = [...nameText]
      .map(letter => `<span>${letter}</span>`)
      .join('');

    // Click on name toggles rotalic effect and shows "home".
    nameElement.addEventListener('click', () => {
      nameElement.classList.toggle('rotalic');

      allCaseStudies.forEach(cs => cs.classList.add('hidden'));
      document.querySelectorAll('.project-item').forEach(pi => pi.classList.remove('active'));

      const homeSection = document.getElementById('home');
      homeSection.classList.remove('hidden');

      // Mark the name's container (the .project-item in the navbar) as active.
      nameElement.closest('.project-item').classList.add('active');
    });
  }
});

// Gallery container click: Also go to corresponding project section.
const galleryContainers = document.querySelectorAll('.gallery-container[data-section]');
galleryContainers.forEach(container => {
  container.addEventListener('click', () => {
    // Hide all case studies.
    allCaseStudies.forEach(cs => cs.classList.add('hidden'));

    // Remove active state from sidebar items.
    document.querySelectorAll('.project-item').forEach(pi => pi.classList.remove('active'));

    // Get the target section from the container's data attribute.
    const sectionId = container.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }

    // Optionally, add active state to the matching sidebar item.
    const correspondingSidebarItem = document.querySelector(`.sidebar .project-item[data-section="${sectionId}"]`);
    if (correspondingSidebarItem) {
      correspondingSidebarItem.classList.add('active');
    }
  });
});
