const regionSelect = document.getElementById('region');
const departementSelect = document.getElementById('departement');
const communeSelect = document.getElementById('commune');

// Fonction pour récupérer la liste des régions depuis l'API
function fetchRegions() {
    fetch('https://geo.api.gouv.fr/regions')
        .then(response => response.json())
        .then(regions => {
            regionSelect.innerHTML = '<option value="">Sélectionnez une région</option>';
            regions.forEach(region => {
                const option = document.createElement('option');
                option.value = region.code;
                option.textContent = region.nom;
                regionSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des régions :", error);
        });
}

// Fonction pour récupérer la liste des départements d'une région depuis l'API
function fetchDepartements(regionCode) {
    fetch(`https://geo.api.gouv.fr/regions/${regionCode}/departements`)
        .then(response => response.json())
        .then(departements => {
            departementSelect.innerHTML = '<option value="">Sélectionnez un département</option>';
            departements.forEach(departement => {
                const option = document.createElement('option');
                option.value = departement.code;
                option.textContent = departement.nom;
                departementSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des départements :", error);
        });
}

// Fonction pour récupérer la liste des communes d'un département depuis l'API
function fetchCommunes(departementCode) {
    fetch(`https://geo.api.gouv.fr/departements/${departementCode}/communes`)
        .then(response => response.json())
        .then(communes => {
            communeSelect.innerHTML = '<option value="">Sélectionnez une commune</option>';
            communes.forEach(commune => {
                const option = document.createElement('option');
                option.value = commune.code;
                option.textContent = commune.nom;
                communeSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des communes :", error);
        });
}

// Écouteurs d'événements pour les sélections
regionSelect.addEventListener('change', () => {
    const selectedRegion = regionSelect.value;
    if (selectedRegion) {
        fetchDepartements(selectedRegion);
    }
});

departementSelect.addEventListener('change', () => {
    const selectedDepartement = departementSelect.value;
    if (selectedDepartement) {
        fetchCommunes(selectedDepartement);
    }
});

// Appel initial pour obtenir la liste des régions
fetchRegions();