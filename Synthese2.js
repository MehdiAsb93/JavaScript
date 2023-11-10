let choix;
let listecourse = []
let quitter = ""

do {
    choix = prompt("Choisissez une action (entrez le numéro correspondant)   \n1. Ajouter un élément à la liste de courses.\n2. Retirer un élément de la liste de courses.\n3. Afficher les éléments de la liste de courses.\n4. Vider la liste de courses.\n5. Quitter le programme (ou appuyer sur q)")

    switch (choix) {
        // case '1':
        //     if (choix === 'q') {
        //         alert("Au revoir !")
        //     } else {
        //         alert("Vous avez choisi d'ajouter un élément à la liste de courses.")
        //         var produit = prompt("Entrez le nom de l'élément à ajouter (ou appuyer sur q pour arrêter): ")
        //         if (produit !== 'q') {
        //             listecourse.push(produit)
        //             alert("Élément ajouté.")
        //         } else {
        //             alert("Au revoir !")
        //             choix = '5' 
        //         }
        //     }
        //         break

        case '1':
            var userInput = prompt("Entrez le nom de l'élément à ajouter (ou appuyer sur q pour arrêter): ").toLowerCase();
            if (userInput === 'q') {
                alert("Au revoir !");
            } else {
                if (userInput !== 'q') {
                    listecourse.push(userInput);
                    alert("Élément ajouté.");
                } else {
                    alert("Au revoir !");
                    choix = '5';
                }
            }
            break;



        case '2':
            if (choix === 'q' && choix === 'Q') {
                alert("Au revoir !")
            } else {
                var produit = prompt(("Liste de courses:\n" + listecourse.join('\n')) + "\nEntrez le nom de l'élément à supprimé (ou appuyer sur q pour arrêter): ")
                if (produit !== 'q') {
                    let supprime = listecourse.indexOf(produit);
                    if (supprime !== -1) {
                        listecourse.splice(supprime, 1)
                        alert("Élément supprimé.")
                    } else {
                        alert("Élément introuvable.")
                    }
                } else {
                    alert("Au revoir !")
                    choix = '5'
                }
            }
            break
        case '3':
            alert("Liste de courses:\n" + listecourse.join('\n'))
            break
        case '4':
            alert("liste de courses vidée.")
            listecourse.length = 0;
            break
        case '5':
            alert("Au revoir !");
            break
        case 'q':
            alert("Au revoir !");
            break
        case 'Q':
            alert("Au revoir !");
            break
        default:
            alert("Choix invalide. Veuillez reessayer.")
    }
} while (choix !== 'q' && choix !== 'Q' && choix !== '5');