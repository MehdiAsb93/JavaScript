function calculatrice(nb1, nb2, operation) {
    switch (operation) {
        case '+':
            return nb1 + nb2;
        case '-':
            return nb1 - nb2;
        case '*':
            return nb1 * nb2;
        case '/':
            return nb1 / nb2;
        default:
            return "Opération impossible";
    }
}

console.log(calculatrice(15, 5, '+'));
console.log(calculatrice(10, 3, '-'));
console.log(calculatrice(10, 4, '*'));
console.log(calculatrice(50, 5, '/'));