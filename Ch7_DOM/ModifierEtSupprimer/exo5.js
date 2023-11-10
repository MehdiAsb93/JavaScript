let button = document.querySelector('#monBouton');
let div2 = document.getElementById('div2')


button.addEventListener('click', function () {

    let p = document.getElementById('p2');
    
    var originalNode = document.getElementById('p2'); // Sélectionnez le nœud que vous souhaitez cloner

    // Utilisez la méthode cloneNode pour créer une copie du nœud
    var clonedNode = originalNode.cloneNode(true); // L'argument true indique de cloner également les descendants, false pour ne pas les cloner.

    // Vous pouvez maintenant manipuler la copie comme vous le souhaitez
    clonedNode.id = 'nouvelIdentifiant'; // Changer l'identifiant de la copie, par exemple.

    div2.appendChild(clonedNode); // Ajoutez la copie clonée à votre document

});