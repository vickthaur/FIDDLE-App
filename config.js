/**
 * 🎯 CONFIGURATION GÉNÉRALE AGENCE - FIDDLE
 * Un seul fichier pour piloter tous tes clients.
 */

const agenceClients = {
    // ---------------------------------------------------------
    // CLIENT 1 : LE BISTROT
    // ---------------------------------------------------------
    "bistrot": {
        id: "bistrot",
        nom: "Le Bistrot Paris",
        couleur: "#e63946", 
        seuilPoints: 5,
        recompense: "5 points = 1 Dessert Offert 🍰",
        logo: "https://vickthaur.github.io/FIDDLE/logo-bistrot.png",
        
        // Liens Brevo
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFANfE1Ud8qtliFwPa28l2_ezu8uq3LYTQgyIt1FJdCu6ADCk_qAvGFPQSFp6HtEVLnsSSBWPY0iWuOOLkQD9PtOzEg4zLN0fuwTKabJS3y5yW2LPzsf2FhbihtwWgWsAsrIamq8lCQvUuxIOb6Cn6zN8x4QyFFwDvc_x03QZONNextkyrknz6Uqew8VmYb2VoF5aYAXjhiNuf6A==",
        
        // Moteurs Google Script (Bistrot)
        scriptLecture: "https://script.google.com/macros/s/AKfycbynquHX2M6CNODt-UQFjVpX2lKJCwUpJXFgSW8sbOpLBTkyLi_ozWsynyE272fyH5TE_w/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbyDzCL_VVaRXrwGaMFAAYrvnCAoV6Qy3FCaDS3Uz2L75y_7QXLm9EUABKocaQgUxNJx8w/exec"
    },

    // ---------------------------------------------------------
    // CLIENT 2 : VILLA SAINT ANTOINE
    // ---------------------------------------------------------
    "villa_saint_antoine": {
        id: "villa_saint_antoine",
        nom: "Villa Saint Antoine",
        couleur: "#c5a059", 
        seuilPoints: 10,
        recompense: "10 points = 1 Cocktail Signature 🍸",
        logo: "https://vickthaur.github.io/FIDDLE/logo-villa.png",
        
        // Liens Brevo Villa
        formInscription: "https://9d65705b.sibforms.com/serve/MUIFAPNZrGyP3i0xNF-FdppNziEkhvnAiLtRY8uUfol3hxIyq6VHE11ofNd5fjQp_Iq7tjv6nklXAhjOPj_Le1u6Wxz_U2NCQLtoBMgkuGrjRNvCwMzFg7KcWEyXIcW-JPoDtL2QizWiwcOJl5-G96lbhakbnyeJT1cxI_8ZV4SVOfBt8CDOHTGIi-KdJSAAPTHMADTN5Gyt8PgqdA==",
        
        // Moteurs Google Script (Villa)
        scriptLecture: "https://script.google.com/macros/s/AKfycbynquHX2M6CNODt-UQFjVpX2lKJCwUpJXFgSW8sbOpLBTkyLi_ozWsynyE272fyH5TE_w/exec",
        scriptValidation: "https://script.google.com/macros/s/AKfycbyDzCL_VVaRXrwGaMFAAYrvnCAoV6Qy3FCaDS3Uz2L75y_7QXLm9EUABKocaQgUxNJx8w/exec"
    }
};

/**
 * 🛠️ FONCTION DE DEPLOIEMENT CONFIG
 */
function appliquerConfig() {
    const urlParams = new URLSearchParams(window.location.search);
    let restoID = urlParams.get('resto');

    if (!restoID || !agenceClients[restoID]) {
        restoID = "bistrot"; 
    }

    const config = agenceClients[restoID];

    // Style visuel
    document.documentElement.style.setProperty('--primary', config.couleur);
    document.documentElement.style.setProperty('--primary-glow', config.couleur + '4D'); 

    // Textes et titre
    document.title = config.nom + " - Programme Fidélité";
    document.querySelectorAll('.nom-resto').forEach(el => el.innerText = config.nom);
    document.querySelectorAll('.texte-recompense').forEach(el => el.innerHTML = config.recompense);

    return config;
}
