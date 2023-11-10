let nom = prompt("Quel est votre nom ?")
let result = confirm("Est-ce bien votre nom : " + nom)

if(result)
{
    alert("Bienvenue " + nom)
}