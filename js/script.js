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
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let targetScrollPosition;

        if (window.innerWidth <= 768) {
            targetScrollPosition = elementRect.top + window.scrollY - (windowHeight - elementRect.height) / 2 + 250;
        } else {
            targetScrollPosition = elementRect.top + window.scrollY - (windowHeight - elementRect.height) / 2 + 300;
        }

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    }
}
