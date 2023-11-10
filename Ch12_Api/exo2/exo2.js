// document.addEventListener("DOMContentLoaded", function() {
//     const macForm = document.getElementById("macForm");
//     const macAddressInput = document.getElementById("macAddress");
//     const findManufacturerButton = document.getElementById("findManufacturer");
//     const manufacturerResult = document.getElementById("manufacturerResult");

//     findManufacturerButton.addEventListener("click", function() {
//         const macAddress = macAddressInput.value;
//         if (isValidMAC(macAddress)) {
//             fetchManufacturer(macAddress);
//         } else {
//             manufacturerResult.textContent = "Adresse MAC invalide.";
//         }
//     });

//     function isValidMAC(mac) {
//         const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
//         return macRegex.test(mac);
//     }

//     async function fetchManufacturer(mac) {
//         try {
//             const apiKey = "YOUR_API_KEY"; // Remplacez par votre clé API macaddress.io
//             const response = await fetch(`https://api.macaddress.io/v1?apiKey=${apiKey}&output=json&search=${mac}`);
//             const data = await response.json();
//             if (data.vendorDetails) {
//                 manufacturerResult.textContent = `Fabricant : ${data.vendorDetails.companyName}`;
//             } else {
//                 manufacturerResult.textContent = "Fabricant non trouvé pour cette adresse MAC.";
//             }
//         } catch (error) {
//             manufacturerResult.textContent = "Une erreur s'est produite lors de la récupération des données.";
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const macAddressInput = document.getElementById("macAddress");
    const findManufacturerButton = document.getElementById("findManufacturer");
    const manufacturerResult = document.getElementById("manufacturerResult");

    findManufacturerButton.addEventListener("click", function() {
        const macAddress = macAddressInput.value;
        if (isValidMAC(macAddress)) {
            fetchManufacturer(macAddress);
        } else {
            manufacturerResult.textContent = "Adresse MAC invalide.";
        }
    });

    function isValidMAC(mac) {
        const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        return macRegex.test(mac);
    }

    async function fetchManufacturer(mac) {
        try {
            const apiKey = "YOUR_API_KEY"; // Remplacez par votre clé API macaddress.io
            const response = await fetch(`https://api.macaddress.io/v1?apiKey=${apiKey}&output=json&search=${mac}`);
            const data = await response.json();
            if (data.vendorDetails) {
                manufacturerResult.textContent = `Fabricant : ${data.vendorDetails.companyName}`;
            } else {
                manufacturerResult.textContent = "Fabricant non trouvé pour cette adresse MAC.";
            }
        } catch (error) {
            manufacturerResult.textContent = "Une erreur s'est produite lors de la récupération des données.";
        }
    }
});
