import { burgerList } from './data.js';

const container = document.querySelector('#burger-container');

burgerList.forEach(burger => {
    const burgerCard = document.createElement('div');
    burgerCard.classList.add('burger-card');
    console.log();
  
    const burgerImg = document.createElement('div');
    burgerImg.classList.add('burger-img');
    const img = document.createElement('img');
    img.src = burger.img;
    img.alt = burger.nom;
    burgerImg.appendChild(img);
    console.log();
  
    const burgerDetails = document.createElement('div');
    burgerDetails.classList.add('burger-details');
    const nom = document.createElement('h3');
    nom.textContent = burger.nom;
    const description = document.createElement('p');
    description.textContent = burger.description;
    const prix = document.createElement('p');
    prix.textContent = burger.prix;
    burgerDetails.appendChild(nom);
    burgerDetails.appendChild(description);
    burgerDetails.appendChild(prix);
    console.log();
    burgerCard.appendChild(burgerImg);
    burgerCard.appendChild(burgerDetails);
    console.log();
  
    container.appendChild(burgerCard);
  });
  // Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console

// Etape 2
// Dans #burger-container afficher le nom des burgers

// Etape 3 
// Ajouter la description et le prix 

// Etape 4 
// Afficher l'image du burger

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients


