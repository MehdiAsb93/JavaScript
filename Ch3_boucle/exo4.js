function nombre (n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
      somme += i;
    }
    return somme;
  }
  
  const n = 5;
  const resultat = nombre(n);
  console.log(`La somme de tous les nombres de 1 à ${n} est : ${resultat}`);