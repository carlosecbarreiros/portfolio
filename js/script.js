// scroll function
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

function scrollToMe() {
    const targetElement = document.getElementById('carlos-barreiros');

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// skills animation
document.addEventListener("DOMContentLoaded", function () {
    let observer = new IntersectionObserver(function (entries, observer) {
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

// project button
function showProject(event) {
    let target = event.target.getAttribute('data-target');
    let mediaProjects = document.querySelector(`.media-projects[data-content="${target}"]`);

    if (mediaProjects) {
        mediaProjects.style.display = 'flex';
    }

    event.target.classList.add('btn-active');
}

function closeProject(event) {
    let button = event.target;
    let projectId = button.getAttribute('data-target');
    let mediaProjects = document.querySelector(`.media-projects[data-content="${projectId}"]`);
    let activeButton = document.querySelector(`.btn-viewProject[data-target="${projectId}"]`);

    if (mediaProjects) {
        mediaProjects.style.display = 'none';
    }

    if (activeButton) {
        activeButton.classList.remove('btn-active');
    }
}

document.querySelectorAll('.btn-viewProject').forEach(btn => {
    btn.addEventListener('click', showProject);
});

// translation
const brFlag = document.getElementById('br-flag');
const usFlag = document.getElementById('us-flag');

const translations = {
    en: 'en.json',
    br: 'br.json'
};

function loadLanguage(language) {
    fetch(translations[language])
        .then(response => response.json())
        .then(data => {
            document.getElementById('occupation').innerText = data.ocupation;
            document.getElementById('aboutMe-button').innerText = data['aboutMe-button'];
            document.getElementById('hardSkills-button').innerText = data['hardSkills-button'];
            document.getElementById('projects-button').innerText = data['projects-button'];
            document.getElementById('contacts-button').innerText = data['contacts-button'];
            document.getElementById('biography-title').innerText = data['biography-title'];
            document.getElementById('biography-text').innerHTML = data['biography-text'];
            document.getElementById('skills-title').innerHTML = data['skills-title'];
            document.getElementById('java-bar').setAttribute('level', data['java-bar-level']);
            document.getElementById('js-bar').setAttribute('level', data['js-bar-level']);
            document.getElementById('html-bar').setAttribute('level', data['html-bar-level']);
            document.getElementById('css-bar').setAttribute('level', data['css-bar-level']);
            document.getElementById('sql-bar').setAttribute('level', data['sql-bar-level']);
            document.getElementById('nosql-bar').setAttribute('level', data['nosql-bar-level']);
            document.getElementById('cn-bar').setAttribute('level', data['cn-bar-level']);
            document.getElementById('cyber-bar').setAttribute('level', data['cyber-bar-level']);
            document.getElementById('uml-bar').setAttribute('level', data['uml-bar-level']);
            document.getElementById('computerNetworks-skill').innerHTML = data['computerNetworks-skill'];
            document.getElementById('cybersecurity-skill').innerHTML = data['cybersecurity-skill'];
            document.getElementById('uml-skill').innerHTML = data['uml-skill'];
            document.getElementById('projects-title').innerHTML = data['projects-title'];
            document.getElementById('javaBet-title').innerHTML = data['javaBet-title'];
            document.getElementById('javaBet-button').innerHTML = data['javaBet-button'];
            document.getElementById('javaBet-text').innerHTML = data['javaBet-text'];
            document.getElementById('javaBet-repository').innerHTML = data['javaBet-repository'];
            document.getElementById('javaBet-close').innerHTML = data['javaBet-close'];
            document.getElementById('onefootball-title').innerHTML = data['onefootball-title'];
            document.getElementById('onefootball-button').innerHTML = data['onefootball-button'];
            document.getElementById('onefootball-text').innerHTML = data['onefootball-text'];
            document.getElementById('onefootball-documentation').innerHTML = data['onefootball-documentation'];
            document.getElementById('onefootball-close').innerHTML = data['onefootball-close'];
            document.getElementById('contacts-title').innerHTML = data['contacts-title'];
            document.getElementById('contacts-location').innerHTML = data['contacts-location'];
            document.getElementById('form-name').innerHTML = data['form-name'];
            document.getElementById('form-message').innerHTML = data['form-message'];
            document.getElementById('form-msgSpace').setAttribute('placeholder', data['form-msgSpace-placeholder']);
            document.getElementById('form-button').innerHTML = data['form-button'];
            document.getElementById('footer-message').innerHTML = data['footer-message'];
        });
}

function selectFlag(flag) {
    if (flag === 'br') {
        brFlag.classList.add('flag-selected');
        usFlag.classList.remove('flag-selected');
        loadLanguage('br');
    } else if (flag === 'us') {
        usFlag.classList.add('flag-selected');
        brFlag.classList.remove('flag-selected');
        loadLanguage('en');
    }
}

brFlag.addEventListener('click', () => selectFlag('br'));
usFlag.addEventListener('click', () => selectFlag('us'));

selectFlag('br');

