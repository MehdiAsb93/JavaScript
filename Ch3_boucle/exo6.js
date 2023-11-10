// def checkPassword(password):
//     upperChars, lowerChars, specialChars, digits, length = 0, 0, 0, 0, 0 
//     length = len(password) 
    
//     if (length < 6): 
//         print("Le mot de passe doit contenir au moins 6 caractères! \n") 
//     else: 
//         for i in range(0, length): 
//             if (password[i].isupper()): 
//                 upperChars += 1 
//             elif (password[i].islower()): 
//                 lowerChars += 1 
//             elif (password[i].isdigit()): 
//                 digits += 1 
//             else: 
//                 specialChars += 1 
                    
//         if (upperChars != 0 and lowerChars != 0 and digits != 0 and specialChars != 0): 
//             if (length >= 10): 
//                 print("La force du mot de passe est forte. \n") 
//             else: 
//                 print("La force du mot de passe est moyenne. \n") 
//         else: 
//             if (upperChars == 0):
//                 print("Le mot de passe doit contenir au moins un caractère majuscule!\n") 
//             if (lowerChars == 0): 
//                 print("Le mot de passe doit contenir au moins un caractère minuscule!\n") 
//             if (specialChars == 0): 
//                 print("Le mot de passe doit contenir au moins un caractère spécial!\n") 
//             if (digits == 0): 
//                 print("Le mot de passe doit contenir au moins un chiffre!\n") 
                    
                    
// password = input("Veuillez entrer le mot de passe: ") 
// #checkPassword(password)

let tableau = ["Lundi", "Mardi", "Mercredi"]

for(let i = 0; i < tableau.length; i++)
{
    console.log(tableau[i])
}