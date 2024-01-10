function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    const container = document.querySelector('.container');
    const containerHeight = container.offsetHeight;

    const offset = element.offsetTop - container.offsetTop;
    const targetScrollPosition = offset - (windowHeight - elementHeight) / 2 + containerHeight / 3 + (elementHeight / 30) + 170; 

    window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth'
    });
}

document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').slice(1);
        scrollToElement(targetId);
    }
});
