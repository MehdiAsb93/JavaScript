function perimetreCercle (r){
    return 2*3.14*r
}

let monRayon= prompt("Saisir le rayon: ")
let resultat = perimetreCercle(monRayon)
alert("Le périmètre du cercle est de: " + resultat.toFixed(2))

function aireCercle (rayon){
    return 3.14*rayon**2
}

let Rayon= prompt("Saisir le rayon: ")
let resultat2 = aireCercle(Rayon)
alert("L'air du cercle est de: " + resultat2.toFixed(2))