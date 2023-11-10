let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somme = nombres.reduce(function (acc, curr) {
    return acc + curr;
}, 0)

console.log(somme);