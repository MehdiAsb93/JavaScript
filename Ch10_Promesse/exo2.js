const promesse = new Promise((resolve, reject) => {
    setTimeout(() => { 
        const aleatoire = Math.random(); 
        console.log(aleatoire)
    if (aleatoire > 0.5) resolve("Promesse résolue")
    else reject ("Promesse rejeté") 
    },2000 
    )

})

.then((text)=>{console.log(text)})
.catch((text)=>{console.log(text)})
console.log (promesse)  