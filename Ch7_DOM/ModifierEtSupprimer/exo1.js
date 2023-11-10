let button = document.querySelector('#monBouton');
let div1 = document.getElementById('div1')

button.addEventListener('click', function () {

    let newElement = document.createElement("p")
    div1.appendChild(newElement)
    newElement.textContent = "Bonjour le monde !"

});