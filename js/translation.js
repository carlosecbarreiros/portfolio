const brFlag = document.getElementById('br-flag');
const usFlag = document.getElementById('us-flag');

const translations = {
    en: 'locales/en.json',
    br: 'locales/br.json'
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
            document.getElementById('react-bar').setAttribute('level', data['react-bar-level']);
            document.getElementById('sql-bar').setAttribute('level', data['sql-bar-level']);
            document.getElementById('node-bar').setAttribute('level', data['node-bar-level']);
            document.getElementById('cloud-bar').setAttribute('level', data['cloud-bar-level']);
            document.getElementById('git-bar').setAttribute('level', data['git-bar-level']);
            document.getElementById('uml-bar').setAttribute('level', data['uml-bar-level']);
            document.getElementById('cloud-skill').innerHTML = data['cloud-skill'];
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
            document.getElementById('crud-title').innerHTML = data['crud-title'];
            document.getElementById('crud-button').innerHTML = data['crud-button'];
            document.getElementById('crud-text').innerHTML = data['crud-text'];
            document.getElementById('crud-repository').innerHTML = data['crud-repository'];
            document.getElementById('crud-close').innerHTML = data['crud-close'];
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
    localStorage.setItem('selectedLanguage', flag === 'br' ? 'pt' : 'en');

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

const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
selectFlag(savedLanguage === 'pt' ? 'br' : 'us');
