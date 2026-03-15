// 📖 LE DICTIONNAIRE DE TES CLIENTS
// C'est ici que tu gères tous tes restaurants
const agenceClients = {
    "bistrot": {
        nom: "Le Bistrot Paris",
        recompense: "Cumulez <span class='highlight'>5 points</span> = 1 Dessert Offert 🍰",
        couleur: "#e63946", // Rouge vif
        // Tes formulaires Brevo pour le Bistrot
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg=="
    },
    
    "villa_saint_antoine": {
        nom: "Villa Saint Antoine",
        recompense: "Cumulez <span class='highlight'>10 points</span> = 1 Cocktail Signature Offert 🍸",
        couleur: "#c5a059", // Doré élégant
        // ⚠️ Pense à créer de nouveaux formulaires dans Brevo pour ce client !
        formInscription: "Lien_Formulaire_Inscription_Villa_Ici", 
        formValidation: "Lien_Formulaire_Validation_Villa_Ici"
    }
};

// 🛠️ LA FONCTION MAGIQUE
// Elle lit l'URL (?resto=...) et adapte toute l'interface
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    let restoID = urlParams.get('resto');

    // Si on ne précise pas de resto ou s'il n'existe pas, on met le Bistrot par défaut
    if (!restoID || !agenceClients[restoID]) {
        restoID = "bistrot"; 
    }

    const config = agenceClients[restoID];

    // 1. On applique la couleur principale au CSS
    document.documentElement.style.setProperty('--primary', config.couleur);
    // On crée aussi une version plus douce de la couleur pour les reflets (glow)
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); // 4D = 30% d'opacité
    
    // 2. On met à jour les textes partout sur la page
    document.querySelectorAll('.nom-resto').forEach(el => {
        el.innerText = config.nom;
    });

    document.querySelectorAll('.texte-recompense').forEach(el => {
        el.innerHTML = config.recompense;
    });

    // 3. On change le titre de l'onglet du navigateur
    document.title = config.nom + " - Fidélité";

    // On renvoie la config pour que les autres scripts puissent l'utiliser
    return { id: restoID, ...config };
}
