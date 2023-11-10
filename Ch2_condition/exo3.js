var day = 4;
var dayName;

switch (day)
{
    case 1:
        dayName = "Lundi";
        break;
    case 2:
        dayName = "Mardi";
        break;
    case 3:
        dayName = "Mercredi";
        break;
    case 4:
        dayName = "Jeudi";
        break;
    case 5:
        dayName = "Vendredi";
        break;
    case 6:
        dayName = "Samedi";
        break;
    case 7:
        dayName = "dimanche";
        break;
    default:
        dayName = "Inconnu";    
}
console.log(dayName);