document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let skillPer = entry.target.querySelector('.skill-per');
                skillPer.style.setProperty('--per', skillPer.getAttribute('per'));
                skillPer.classList.add('animate');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 }); 

    document.querySelectorAll('.skills').forEach(skill => {
        observer.observe(skill);
    });
});

function scrollToClickedSection(targetId) {
    scrollToElement(targetId.substring(1));
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        const offset = 50; 
        const elementTop = element.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
        });
    }
}

function showProject(event) {
    let target = event.target.getAttribute('data-target'); 
    let mediaProjects = document.querySelector(`.media-projects[data-content="${target}"]`); 

    if (mediaProjects) {
        mediaProjects.style.display = 'flex'; 
    }

    event.target.classList.add('btn-active'); 
}

function closeProject() {
    let activeMedia = document.querySelector('.media-projects[style*="flex"]'); 
    let activeButton = document.querySelector('.btn-active'); 

    if (activeMedia) {
        activeMedia.style.display = 'none'; 
    }

    if (activeButton) {
        activeButton.classList.remove('btn-active'); 
    }
}

document.querySelectorAll('.btn-viewProject').forEach(btn => {
    btn.addEventListener('click', showProject);
});

