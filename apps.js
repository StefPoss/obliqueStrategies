// Oblique Strategies
// A random sentence generator
// inspired by Brian Eno and Peter Schmidt's Oblique Strategies
// written between 1975 and 1979

// Variable globale pour stocker les phrases
let sentencesArray = [];

/**
 * Charge les phrases depuis le fichier texte et les stocke dans sentencesArray.
 */
const loadSentences = () => {
    return fetch('assets/docs/obliqueStrategiesSentencesList.txt') // Vérifie ce chemin !
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            // Découper le texte en lignes et nettoyer les espaces inutiles
            sentencesArray = text.split('\n').map(sentence => sentence.trim());
            console.log("Tableau des phrases chargé :", sentencesArray);
        })
        .catch(error => console.error("Erreur lors du chargement des phrases :", error));
};

/**
 * Sélectionne une phrase aléatoire et l'affiche dans l'élément HTML.
 */
const displayRandomSentence = () => {
    if (sentencesArray.length > 0) {
        // Sélectionner un index aléatoire
        const randomIndex = Math.floor(Math.random() * sentencesArray.length);
        const randomSentence = sentencesArray[randomIndex];

        // Insérer la phrase dans l'élément HTML
        const displayElement = document.getElementById('displaySentence');
        if (displayElement) {
            displayElement.textContent = randomSentence;
        } else {
            console.error("L'élément #displaySentence est introuvable dans le DOM.");
        }
    } else {
        console.error("Le tableau des phrases est vide !");
    }
};

// ** Attendre que le DOM soit chargé avant d'exécuter les fonctions **
document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM complètement chargé, initialisation...");

    // Charger les phrases avant d'ajouter l'écouteur d'événement
    await loadSentences(); 

    // Ajouter un écouteur d'événement sur le bouton pour générer une nouvelle phrase lors d'un clic
    const newSentenceButton = document.getElementById('newSentenceBtn');
    if (newSentenceButton) {
        newSentenceButton.addEventListener('click', displayRandomSentence);
        console.log("Événement click attaché au bouton !");
    } else {
        console.error("Le bouton avec l'ID 'newSentenceBtn' n'a pas été trouvé dans le DOM.");
    }
});
