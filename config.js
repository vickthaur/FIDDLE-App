/**
 * ======================================================================
 * 🎯 CONFIGURATION GÉNÉRALE AGENCE - FIDDLE
 * ======================================================================
 * Ce fichier est le "cerveau" de l'application. 
 * Il contient toutes les informations de tes clients.
 */

const agenceClients = {
    // ==========================================
    // 🍽️ CLIENT 1 : LE BISTROT
    // ==========================================
    "bistrot": {
        id: "bistrot",
        nom: "Le Bistrot Paris",
        couleur: "#e63946", 
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        logo: "https://vickthaur.github.io/FIDDLE/logo-bistrot.png",
        
        // Liens Brevo
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFADjqIProT_Cl28inJrj0bX2b4zK_XA-Ov9LDV2gWtskwsKQ7VVo09QVM5hlDGzylzy6392uTx_swkr0hHIW_VqQybc45jJR5TbzoCVHjs8OaZqF1BF4j-j2hbOTYyNbscvcENAbY2zKv6QDi8hTpGkzLbe-2Ng8qNIkZaPO7yAU4sy6CCAxOAZhIpb1H-gBjsPxIEeL9bWuUsg==",
        
        // Liens Google Apps Script (IDENTIQUES POUR TOUS LES CLIENTS)
        scriptLecture: "https://script.google.com/macros/s/AKfycbxeUjqD3jLYvVgO4OxKraB_hX6fMcmzMrdYT75bkSAUDbBG6Ols852ea_iUiTiJn8HdOA/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbxEynrpjUiRF8Yc9h3MVH8NFtlCPbs_gSlfKxA9b8EjdwBOStPaxkrvZRJ3vjmFZkDZ-w/exec"
    },

    // ==========================================
    // 🍸 CLIENT 2 : VILLA SAINT ANTOINE
    // ==========================================
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", 
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        logo: "https://vickthaur.github.io/FIDDLE/logo-villa.png",
        
        // Liens Brevo
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        formValidation: "https://9d65705b.sibforms.com/serve/MUIFAJDcz_H5hCbvQ9g1SOqKVyAo5fIPRSH5Av5deHgtWT5pF0ZkzbdcnwySESsegIdFuxzkw8rMMZkfiUMzvAMDfIaGzl42YBw1P3Fw1H1Z6B914_I3TwYpVPNWMv0nqARUMZI8bG2Cja6rYBZ6EAkXhGLetQKjHnDCX4EP0I8Gv7Te36b1rLjJiUI4Fas-3uxA1-XpotgR3ujdWg==",
        
        // Liens Google Apps Script (IDENTIQUES POUR TOUS LES CLIENTS)
        scriptLecture: "https://script.google.com/macros/s/AKfycbxeUjqD3jLYvVgO4OxKraB_hX6fMcmzMrdYT75bkSAUDbBG6Ols852ea_iUiTiJn8HdOA/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbxEynrpjUiRF8Yc9h3MVH8NFtlCPbs_gSlfKxA9b8EjdwBOStPaxkrvZRJ3vjmFZkDZ-w/exec"
    },

    // ==========================================
    // 🚀 FUTURS CLIENTS (À remplir plus tard)
    // ==========================================
    "client_3": { id: "client_3", nom: "Nom du Client 3", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_4": { id: "client_4", nom: "Nom du Client 4", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_5": { id: "client_5", nom: "Nom du Client 5", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_6": { id: "client_6", nom: "Nom du Client 6", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_7": { id: "client_7", nom: "Nom du Client 7", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_8": { id: "client_8", nom: "Nom du Client 8", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_9": { id: "client_9", nom: "Nom du Client 9", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_10": { id: "client_10", nom: "Nom du Client 10", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_11": { id: "client_11", nom: "Nom du Client 11", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" },
    "client_12": { id: "client_12", nom: "Nom du Client 12", couleur: "#000000", seuilPoints: 10, recompense: "10 points = Cadeau", logo: "URL_LOGO", formInscription: "URL", formValidation: "URL", scriptLecture: "TON_NOUVEAU_LIEN_SCRIPT_LECTURE", scriptValidation: "TON_NOUVEAU_LIEN_SCRIPT_VALIDATION" }
};

/**
 * ======================================================================
 * ⚙️ MOTEUR DE DÉPLOIEMENT (Ne pas modifier)
 * ======================================================================
 * Cette fonction lit l'URL et met à jour les couleurs et les textes.
 */
function appliquerConfig() {
    // 1. On regarde dans l'URL quel restaurant est demandé
    const urlParams = new URLSearchParams(window.location.search);
    let restoID = urlParams.get('resto');

    // 2. Sécurité : si le restaurant n'existe pas, on met Bistrot par défaut
    if (!restoID || !agenceClients[restoID]) {
        restoID = "bistrot"; 
    }

    const config = agenceClients[restoID];

    // 3. Application des couleurs (Variables CSS)
    document.documentElement.style.setProperty('--primary', config.couleur);
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 

    // 4. Application des textes
    document.title = config.nom + " - Programme Fidélité";
    
    document.querySelectorAll('.nom-resto').forEach(el => {
        el.innerText = config.nom;
    });

    document.querySelectorAll('.texte-recompense').forEach(el => {
        el.innerHTML = config.recompense;
    });

    // 5. On retourne la configuration pour que les autres pages l'utilisent
    return config;
}
