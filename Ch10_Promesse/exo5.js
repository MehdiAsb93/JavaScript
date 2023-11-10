function appelAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatoire = Math.random();
            console.log(aleatoire)
            let utilisateur = { nom: "Mehdi", age: 20 }
            if (aleatoire > 0.5) resolve(utilisateur)
            else reject("Erreur lors de l'appel API")
        }, 3000
        )
    })
}

appelAPI()

    .then((text) => { console.log(text) })
    .catch((text) => { console.log(text) })