// Oblique Strategies
// A random sentence generator
// inspired by Brian Eno and Peter Schmidt's Oblique Strategies
// written between 1975 and 1979


// Piocher au hasard une phrase et l'afficher à l'écran sur une page HTML en cliquant sur un bouton

// Déclarer une tableau de string qui contient toutes les phrases en fecthant le fichier /docs/assets/obliqueStrategiesSentences.txt
const loadSentences = () => {
    fetch('assets/docs/obliqueStrategiesSentencesList.txt')
    .then(response => response.text())
    .then(text => {
        // Découper le texte en lignes et supprimer les espaces ou retours inutiles
        sentencesArray = text.split('\n').map(sentence => sentence.trim());
        console.log("Tableau des phrases :", sentencesArray);
    })
    .catch(error => console.error("Erreur lors du chargement des phrases :", error));
};

// Appel de la fonction pour charger les phrases au démarrage
loadSentences();


/**
 * Sélectionne une phrase aléatoire dans sentencesArray et l'affiche dans l'élément HTML.
 */
const displayRandomSentence = () => {
    // Vérifier que le tableau n'est pas vide
    if (sentencesArray.length > 0) {
        // Calculer un index aléatoire
        const randomIndex = Math.floor(Math.random() * sentencesArray.length);
        // Récupérer la phrase correspondante
        const randomSentence = sentencesArray[randomIndex];
        
        // Récupérer l'élément HTML où afficher la phrase
        const displayElement = document.getElementById('displaySentence');
        if (displayElement) {
            // Mettre à jour le contenu texte de l'élément
            displayElement.textContent = randomSentence;
        } else {
            console.error("L'élément avec l'ID 'displaySentence' n'a pas été trouvé dans le DOM.");
        }
    } else {
        console.error("Le tableau des phrases est vide !");
    }
};

// Ajouter un écouteur d'événement sur le bouton pour générer une nouvelle phrase lors d'un clic
const newSentenceButton = document.getElementById('newSentenceBtn');
if (newSentenceButton) {
    newSentenceButton.addEventListener('click', displayRandomSentence);
} else {
    console.error("Le bouton avec l'ID 'newSentenceBtn' n'a pas été trouvé dans le DOM.");
}