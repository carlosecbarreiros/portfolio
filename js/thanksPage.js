function getSelectedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'pt'; // 'pt' como padrão
}

async function loadTranslations(language) {
    const response = await fetch(`locales/${language}.json`);
    return await response.json();
}

function applyTranslations(translations) {
    document.getElementById('thanks-heading').innerText = translations['thanks-heading'];
    document.getElementById('thanks-message').innerText = translations['thanks-message'];
}

async function initializeTranslation() {
    const language = getSelectedLanguage();
    const translations = await loadTranslations(language);
    applyTranslations(translations);
}

initializeTranslation();
