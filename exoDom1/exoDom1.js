const inputUser = document.querySelector('#textInput')
const pUser = document.querySelector('#bonjour')
const submit = document.querySelector('#submit')

submit.addEventListener(('click'), (e) => {
    let texte = inputUser.value;
    pUser.textContent = "Bonjour " + texte
})


/*
    Ecrivez un code HTML + JS qui permet :
    De demander le nom de l'utilisateur (input)
    D'afficher  le nom de l'utilisateur sur la page (par ex. Bonjour Nom)
*/

/*
    Ecouter le click sur le bouton
    Récupérer le contenu (value) de mon input
    Afficher Bonjour Prénom
*/