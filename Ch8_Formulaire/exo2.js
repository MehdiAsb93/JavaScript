let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    var nom = form.elements['nom'].value;
    var prenom = form.elements['prenom'].value;
    var adresse = form.elements['adresse'].value;
    var ville = form.elements['ville'].value;
    var postal = form.elements['postal'].value;
    
    if (nom === '') {
    alert('Le nom ne peut pas être vide');
    return;
    }
    if (prenom === '') {
    alert('Le prénom ne peut pas être vide');
    return;
    }
    if (adresse === '') {
    alert('L\'adresse ne peut pas être vide');
    return;
    }
    if (ville === '') {
    alert('La ville ne peut pas être vide');
    return;
    }
    if (postal === '') {
    alert('Le code postal ne peut pas être vide');
    return;
    }    
    console.log('nom: ' + nom + ', prenom: ' + prenom, "adresse: " + adresse, "ville: " + ville, "postal: " + postal);
    });