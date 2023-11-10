function verifierUtilisateur(user) {

    return new Promise((resolve, reject) => {
        if (user.age >= 18) resolve("Utilisateur majeur ")
        else reject("Utilisateur mineur")
    })

}

utilisateur = {
    nom: "Mehdi",
    age: 20
};

verifierUtilisateur(utilisateur)

.then((text)=>{console.log(text)})
.catch((text)=>{console.log(text)})