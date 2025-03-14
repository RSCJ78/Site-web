// Fichier: compteur.js

// Fonction pour initialiser le compteur de visiteurs
function initialiserCompteurVisiteurs() {
    // Vérifier si un compteur existe déjà dans le localStorage
    let compteur = localStorage.setItem('rscj78_visiteurs', compteur);
    
    // Si le compteur n'existe pas encore, l'initialiser à 1
    if (!compteur) {
      compteur = 1;
    } else {
      // Sinon, incrémenter le compteur existant
      compteur = parseInt(compteur) + 1;
    }
    
    // Enregistrer le nouveau compteur dans le localStorage
    localStorage.setItem('rscj78_visiteurs', compteur);
    
    // Retourner le compteur actuel
    return compteur;
  }
  
  // Créer et afficher le widget du compteur
  function afficherCompteurVisiteurs() {
    // Obtenir le nombre de visiteurs
    const nombreVisiteurs = initialiserCompteurVisiteurs();
    
    // Créer le conteneur du compteur
    const compteurElement = document.createElement('div');
    compteurElement.id = 'compteur-visiteurs';
    compteurElement.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: rgba(2, 0, 117, 0.8);
      color: white;
      padding: 10px 15px;
      border-radius: 8px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    `;
    
    // Ajouter une icône
    const icone = document.createElement('span');
    icone.innerHTML = '👁️ ';
    icone.style.marginRight = '5px';
    
    // Ajouter le texte du compteur
    const texte = document.createElement('span');
    texte.textContent = `${nombreVisiteurs} visiteur${nombreVisiteurs > 1 ? 's' : ''}`;
    
    // Assembler le compteur
    compteurElement.appendChild(icone);
    compteurElement.appendChild(texte);
    
    // Ajouter le compteur au document
    document.body.appendChild(compteurElement);
    
    // Ajouter un effet hover
    compteurElement.addEventListener('mouseenter', () => {
      compteurElement.style.backgroundColor = 'rgba(2, 0, 117, 1)';
      compteurElement.style.transform = 'scale(1.05)';
    });
    
    compteurElement.addEventListener('mouseleave', () => {
      compteurElement.style.backgroundColor = 'rgba(2, 0, 117, 0.8)';
      compteurElement.style.transform = 'scale(1)';
    });
  }
  
  // Exécuter la fonction d'affichage une fois que la page est chargée
  document.addEventListener('DOMContentLoaded', afficherCompteurVisiteurs);