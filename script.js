function scrollToElement(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = elementRect.top + window.scrollY;
        const targetScrollPosition = offset - (windowHeight - elementRect.height) / 2 + 200; // Ajuste aqui

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        scrollToElement(targetId);
    }
});
