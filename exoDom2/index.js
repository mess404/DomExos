/*
    Ecrivez un code HTML + JS qui permet :
    De demander à l'utilisateur d'entrer un nombre
    D'afficher à l'utilisateur son nombre multiplié par 2
    Par exemple : 
        Si l'utilisateur entre 5
        Le code doit afficher 10
        Si l'utilisateur entre 12
        Le code doit afficher 24
    Vous ne devez PAS utiliser de console.log
    Vous DEVEZ afficher le résultat directement sur la page
*/

const number = document.querySelector('#number');
const result = document.querySelector('#result')

number.addEventListener("input", (e) => {
    let num = number.value * 2;
    result.textContent = num
})
