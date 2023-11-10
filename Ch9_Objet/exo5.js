let produit = {
    nom: "PS5",
    prix: 35,

    fabricant: {
        nom: "Meh",
        adresse: "17 avenue du louvre",
    }
    
};
console.log(produit.prix)

delete produit.prix

console.log(produit.prix)