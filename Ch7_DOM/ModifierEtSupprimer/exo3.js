let button = document.querySelector('#monBouton');

console.log(button)
button.addEventListener('click', function () {

    let p = document.getElementById('p2');
    p.innerHTML = "<h2> Ceci est un nouveau texte pour le paragraphe.</h2>"
});