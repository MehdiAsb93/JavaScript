var marques = ["apple", "samsung", "dell", "hp", "lg", "acer"];

console.log("Liste des marques :");
for (var i = 0; i < marques.length; i++) {
  console.log((i + 1) + "-" + marques[i]);
}

var marquePreferee = prompt("Quelle marque préférez-vous ?");

var indexMarque = marques.indexOf(marquePreferee);

if (indexMarque !== -1) {
  marques.splice(indexMarque, 1);
  console.log("Ok");
} else {
  console.log("Indisponible");
}

console.log("Liste des marques après la sélection :");
for (var i = 0; i < marques.length; i++) {
  console.log((i + 1) + ". " + marques[i]);
}