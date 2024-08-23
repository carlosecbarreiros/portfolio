
function showProject(event) {
    let target = event.target.getAttribute('data-target');
    let mediaProjects = document.querySelector(`.media-projects[data-content="${target}"]`);

    if (mediaProjects) {
        mediaProjects.style.display = 'flex';

        const elementRect = mediaProjects.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        const offset = elementTop - (window.innerHeight / 2) + (elementRect.height / 2) + 150;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    event.target.classList.add('btn-active');
}

document.querySelectorAll('.btn-viewProject').forEach(btn => {
    btn.addEventListener('click', showProject);
});

function closeProject(event) {
    let button = event.target;
    let projectId = button.getAttribute('data-target');
    let mediaProjects = document.querySelector(`.media-projects[data-content="${projectId}"]`);
    let activeButton = document.querySelector(`.btn-viewProject[data-target="${projectId}"]`);

    if (mediaProjects) {
        mediaProjects.style.display = 'none';

        const cardRect = activeButton.closest('.card-projects').getBoundingClientRect();
        const cardTop = cardRect.top + window.pageYOffset;
        const offset = cardTop - (window.innerHeight / 2) + (cardRect.height / 2);

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    if (activeButton) {
        activeButton.classList.remove('btn-active');
    }
}

document.querySelectorAll('.btn-closeProject').forEach(btn => {
    btn.addEventListener('click', closeProject);
});
