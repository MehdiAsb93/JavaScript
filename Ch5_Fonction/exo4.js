function estPair(nombre) {
    switch (nombre % 2) {
      case 0:
        return true;
      default:
        return false;
    }
  }
  
console.log(estPair(4));
console.log(estPair(7));
  