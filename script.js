document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name-toggle');
    if (nameElement) {
        nameElement.addEventListener('click', () => {
            window.location.href = '/index.html'; 
        });
    }
  
    const projectsTitle = document.querySelector('.projects h3'); 
    if (projectsTitle) {
        projectsTitle.addEventListener('click', () => {
            window.location.href = '/index.html'; 
        });
    }
  
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
  
    if (nameElement) {
        const nameText = nameElement.innerText;
        nameElement.innerHTML = [...nameText]
            .map(letter => `<span>${letter}</span>`)
            .join('');
    }
  
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        const projectText = title.innerText;
        title.innerHTML = [...projectText]
            .map(letter => `<span>${letter}</span>`)
            .join('');
  
        title.addEventListener('mouseenter', () => {
            title.classList.add('hover');
        });
  
        title.addEventListener('mouseleave', () => {
            title.classList.remove('hover');
        });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const projectTitles = document.querySelectorAll(".project-item");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    projectTitles.forEach((project, index) => {
      const section = project.getAttribute("data-section");
  
      const rotation = index % 2 === 0 ? "rotate(15deg)" : "rotate(-15deg)";
  
      project.addEventListener("mouseenter", () => {
        galleryItems.forEach((item) => {
          if (item.getAttribute("data-section") === section) {
            const img = item.querySelector("img");
            img.style.transform = `${rotation}`;
            img.style.margin = "-5%";
            img.style.zIndex = "10";
          }
        });
      });
  
      project.addEventListener("mouseleave", () => {
        galleryItems.forEach((item) => {
          if (item.getAttribute("data-section") === section) {
            const img = item.querySelector("img");
            img.style.transform = "";
            img.style.margin = "";
            img.style.zIndex = "";
          }
        });
      });
    });
  });
  