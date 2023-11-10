let poids = prompt("Quel est votre poids ?")
let taille = prompt("Quel est votre taille ?")

function imc() {
    alert("Votre imc est de : " + poids/(taille*taille))
}

imc();