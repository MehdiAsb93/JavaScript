let nbEtudiant = parseInt(prompt("Combien d'étudiants sont dans la classe ?"))
let nbNote = parseInt(prompt("Combien d'évalutations seront saisies pour chaque étudiant ?"))
let moyenne_classe = 0
let moyenne = []

for (let i = 1; i <= nbEtudiant; i++) {

    let notes = []

    for (let j = 1; j <= nbNote; j++) {

        var note = parseFloat(prompt("Saisissez la note de l'évaluation " + j + " pour l'étudiant " + i + " :"));

        notes.push(note)

    }

    moyenne = notes.reduce((acc, curr) => acc + curr, 0) / nbNote;

    var appreciation = ""

    if (moyenne > 18) {
        appreciation = "Excellent";
    } else if (moyenne >= 15 && moyenne <= 18) {
        appreciation = "Très bien";
    } else if (moyenne >= 12 && moyenne < 15) {
        appreciation = "Bien";
    } else {
        appreciation = "Peut mieux faire";
    }

    alert("Moyenne de l'etudiant " + i + ": " + moyenne + "\nAppréciation élève " + i + ": " + appreciation)

    moyenne_classe += moyenne

}

alert("Moyenne générale de la classe: " + moyenne_classe / nbEtudiant)











// let note =0
// let nbEtudiants= parseInt(prompt ("Combien d'étudiants sont dans la classe ?"))
// let nbEvaluations= parseInt(prompt ("Combien d'évaluations seront saisies pour chaque étudiant ?"))
// let tab_notes = []
// let tab_moyennes=[]

// for (let i = 1; i <= nbEtudiants; i++) {
//     for (let j = 1; j <= nbEvaluations; j++) {

//     note= parseFloat(prompt ("Entrez la note pour l'évaluation "+j+" de l'étudiant "+i+" : "))
//     tab_notes.push(note)
    

//     }
//     console.log(tab_notes)

//     let sum = tab_notes.reduce(function(acc, curr) {
//         return acc + curr; // Additionne les éléments du tableau
//         }, 0);
        

//         let moyenne = sum/nbEvaluations

//         if (moyenne >=18){
//             alert("La moyenne de l'étudiant: "+sum/nbEvaluations+"\nAppréciation: Excellent");
//             // console.log("Excellent")
//         }
        
//             else if (moyenne>=15 && moyenne <18) {
//             alert("La moyenne de l'étudiant: "+sum/nbEvaluations+"\nAppréciation: Très bien");

//                 // console.log("Très bien")
//             }
        
//             else if  (moyenne>=12 && moyenne <15) {
//             alert("La moyenne de l'étudiant: "+sum/nbEvaluations+"\nAppréciation: Bien");

//                 // console.log("Bien")
//             }
        
//             else if  (moyenne <12)   {
//             alert("La moyenne de l'étudiant: "+sum/nbEvaluations+" \nAppréciation: Peut mieux faire");

//                 // console.log("Peut mieux faire") 
//             }
//             else {
//                 alert("Erreur de saisie")
//             }
            
          



//         tab_moyennes.push(sum/nbEvaluations)



//     tab_notes = []
// }


// let sum = tab_moyennes.reduce(function(acc, curr) {
//     return acc + curr; // Additionne les éléments du tableau
//     }, 0);
// alert ("Moyenne générale de la classe :"+sum/nbEtudiants)
// console.log(tab_moyennes)