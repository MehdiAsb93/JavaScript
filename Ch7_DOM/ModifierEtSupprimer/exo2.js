let button = document.querySelector('#monBouton');

console.log(button)
button.addEventListener('click', function () {

    let elementASupprimer = document.getElementById("p1")
    elementASupprimer.parentNode.removeChild(elementASupprimer)
    elementASupprimer.remove()
});