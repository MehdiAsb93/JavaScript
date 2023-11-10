function diviser(a, b) {

    return new Promise((resolve, reject) => {
        if (b != 0) resolve(a/b)
        else reject("Division par zéro !")
    })

    
}

diviser(5,2)

.then((text)=>{console.log(text)})
.catch((text)=>{console.log(text)})