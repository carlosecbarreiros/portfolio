// bioraphy-title animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    });

    const title = document.querySelector('#biography-title');
    observer.observe(title);
});

document.addEventListener('DOMContentLoaded', () => {
    function getThreshold() {
        return window.innerWidth <= 768 ? 0.1 : 0.3; 
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: getThreshold()
    });

    const targets = document.querySelectorAll('.biography-text');
    targets.forEach(target => observer.observe(target));

    
    window.addEventListener('resize', () => {
        observer.disconnect(); 
        const newThreshold = getThreshold();
        const newObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    newObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: newThreshold
        });

        targets.forEach(target => newObserver.observe(target));
    });
});

// skills-title animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const title = document.querySelector('#skills-title');
    observer.observe(title);
});

// skills animate
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    const skills = document.querySelectorAll('.skill-card'); 
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`; // atraso em cascata
        observer.observe(skill);
    });
});

// project-title animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const title = document.querySelector('#projects-title');
    observer.observe(title);
});

// projects animate
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const titles = document.querySelectorAll('.card-projects');
    titles.forEach((title, index) => {
        title.style.animationDelay = `${index * 0.1}s`;
        observer.observe(title);
    });
});