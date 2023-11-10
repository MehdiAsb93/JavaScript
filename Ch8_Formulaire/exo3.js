let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    var mdp = form.elements['mdp'].value;
    if (mdp === 'BTSCIEL92110') {
    window.location.href = "index2.html"
    return;
    }

    else {
    alert("Mot de passe incorrect")
    }
    
    });