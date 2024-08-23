function scrollToClickedSection(targetClass) {
    scrollToElement(targetClass);
}

function scrollToElement(className) {
    const element = document.querySelector(className);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
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