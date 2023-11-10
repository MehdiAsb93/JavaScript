function calculerTVA(ht,tva) {
return (ht*tva/100)   
}

let ttc = calculerTVA(100,20)
console.log("Le montant TTC: "+ttc)

// console.log("Le montant TTC: "+calculerTVA(100,20))