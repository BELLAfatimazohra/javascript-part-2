// declaration des variables 
let nombre1 = 5;
let nombre2 = 10;
let somme = nombre1 + nombre2;
// declaration d'une liste 
let numbers = [1, 2, 3, 4, 5];
let fruits = ["pomme", "banane", "orange"];
// changer un elemnet dans la liste par autre 
fruits[1] = "kiwi"
fruits.push("fraise"); // Ajouter "fraise" à la fin du tableau
fruits.pop();// supression du dernier element
let legumes = ["carotte", "brocoli"]; // declarationd'une autre liste
let alimentation = fruits.concat(legumes);// concatenation de deux liste 
fruits.unshift("fraise");// ajouter un element au debut 
fruits.shift();// supprimer le premier element 
// affichage d'un message au utilisateur 
alert("Mrhba bikom f 01 club");
// Déclaration de l'objet Person
var person = {
    firstName: "John",      // Propriété pour le prénom
    lastName: "Doe",        // Propriété pour le nom de famille
    age: 30,                // Propriété pour l'âge
    gender: "male",         // Propriété pour le genre
    occupation: "Developer" // Propriété pour la profession
};

// Accès aux propriétés de l'objet
// affichage dans la console 
console.log("Prénom: " + person.firstName);
console.log("Nom de famille: " + person.lastName);
console.log("Âge: " + person.age);
console.log("Genre: " + person.gender);
console.log("Profession: " + person.occupation);
// affichage de boite de dialogue modale 
alert("Prénom: " + person.firstName +
      "\nNom de famille: " + person.lastName +
      "\nÂge: " + person.age +
      "\nGenre: " + person.gender +
      "\nProfession: " + person.occupation);
      var age = 25;
// input
// Demander à l'utilisateur d'entrer quelque chose
var userInput = prompt("Entrez quelque chose :");
console.log("Vous avez saisi : " + userInput);
// decisions 
var userConfirmed = confirm("Voulez-vous continuer ?");
if (userConfirmed) {
    console.log("L'utilisateur a confirmé.");
} else {
    console.log("L'utilisateur a annulé.");
}
// les conditions 
if (age >= 18) {
    console.log("La personne est majeure.");
} else {
    console.log("La personne est mineure.");
}
// Vérifier la valeur saisie et afficher un message en conséquence
if (userInput === null) {
    console.log("Vous avez annulé l'entrée.");
} else if (userInput === "") {
    console.log("Vous n'avez rien saisi.");
} else {
    console.log("Vous avez saisi : " + userInput);
}
// switch case 
var day = prompt("Entrez un jour de la semaine :");

switch (day.toLowerCase()) {
    case "lundi":
        console.log("C'est le premier jour de la semaine.");
        break;
    case "mardi":
        console.log("C'est le deuxième jour de la semaine.");
        break;
    case "mercredi":
        console.log("C'est le troisième jour de la semaine.");
        break;
    case "jeudi":
        console.log("C'est le quatrième jour de la semaine.");
        break;
    case "vendredi":
        console.log("C'est le cinquième jour de la semaine.");
        break;
    case "samedi":
        console.log("C'est le sixième jour de la semaine.");
        break;
    case "dimanche":
        console.log("C'est le septième jour de la semaine.");
        break;
    default:
        console.log("Jour non reconnu.");
}
//les boucles 
for (var i = 0; i < 5; i++) {
    console.log("Itération " + (i + 1) + " : 01 CLUB ");
    
}
var i=8;
while (i < 5) {
    console.log(i);
    i++;
}
do {
    console.log(i);
    i++;
} while (i < 5);
// creation d'une fonction qui calcule la somme de deux nombres 
let a = prompt("Entrez la valeur de a :");
let b = prompt("Entrez la valeur de b :");
function additionner(a, b) {
    return a + b;
}
// appel de la fonction 
let resultat = additionner(2, 6);
console.log(resultat); // Affiche 8 dans la console
// une fonction qui changer l'image 
function changer() {
    // stocker la nouvelle image dans un variable 
    var  nouvelleImageURL="image2.png" ;
    // Sélectionnez l'élément img par son ID
    var monImage = document.getElementById('img1');
    monImage.src = nouvelleImageURL;

}
// l'appel de la fonction changer dans cette partie du code html (<button onclick="changer()">Changer l'image</button>)