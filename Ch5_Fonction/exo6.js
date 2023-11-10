function convertir (celsius){
    return (celsius *9/5) + 32
}

let maTemperature= prompt(" Saisir la température en °C: ")

let resultat = convertir (maTemperature)

alert("La température en °Fahrenheit est de: "+resultat+"°")