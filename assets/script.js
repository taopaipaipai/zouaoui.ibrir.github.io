const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* méthode FromScratch
const ArrowGauche = document.querySelector(".arrow_left"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50
const ArrowDroit  = document.querySelector(".arrow_right"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50
*/

// méthode cours OpenClassroom
const ArrowGauche = document.querySelector("#banner .arrow_left"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50
const ArrowDroit  = document.querySelector("#banner .arrow_right"); // suite cours de from Scrtach il fallait mettre le . pour que la class soit reconnue !! 10/08/2023 17:50:50


// 14/08/2023 13:01:03 --> taille d'un tableau
let tailleTableau = slides.length

console.log("le tableau comprends "+ tailleTableau +" éléments")

const Dots = document.querySelector(".dots")

// boucle 18/08/2023 13:37:43
for (let i=0; i<tailleTableau; i++) {
	 const i = document.createElement("div")
	 i.classList.add("dot")
	 Dots.appendChild(i)
}

console.log(Dots)

// reprise le 09/09/2023 13:44:56
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// initialisation du compteur
let currentIndex = 0;

// fonction pour passer au slide suivant ou précédent avec pour entrée un nombre (-1) ou (+1)

function majSlider(NavigueSlide) {
 
// Début instruction du switch / case
 currentIndex = currentIndex + NavigueSlide;
 const maXXi = tailleTableau;
 
 console.log(" Valeur de la variable currentIndex AVANT d'entrer dans le switch/case vaut : " + currentIndex)
  
 switch (currentIndex) {
    case maXXi:
        currentIndex = 0 
        console.log(" Maximum atteint on reset la valeur à 0 !")
        break
    case -1 :
        currentIndex = tailleTableau - 1
        console.log(" Valeur négatif interdite, on l'a passe au max c-a-d à "+ currentIndex)
        break

    default:
        console.log(" OK tous va bien pas de valeur bizarre !! ")
}

 console.log(" Valeur de la variable currentIndex AprèS d'entrer dans le switch/case vaut : " + currentIndex)

// fin instruction switch / case 

 const slide = slides[currentIndex];
 console.log(currentIndex);
 console.log(slide.image);
 console.log(slide.tagLine);
 bannerImage.src = `./assets/images/slideshow/${slide.image}`;  // j'ai reussi à afficher une autre images le 09/09/2023 à 14:09:47 !!
 bannerText.innerHTML = slide.tagLine;

}

// 11/09/2023 13:03:07
// Fonction pour mettre à jour le style des bullet points
function majBulletActive() {
  const bullets = document.querySelectorAll(".dot");
  bullets.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
// met en place le bullet actif pour la 1er fois au chargement de la page
majBulletActive();

// maj et correction le 10/08/2023 18:18:45, puis revisiter le 09/09/2023 pour ajouter les fonctions majSlider() et majBulletActive()
ArrowGauche.addEventListener("click", ()=> {
	console.log ("vous avez cliqué sur le Arrow de Gauche");
	majSlider(-1);
	majBulletActive();
	});

ArrowDroit.addEventListener('click', ()=> {
	console.log ("vous avez cliqué sur le Arrow de Droit");
	majSlider(1);
	majBulletActive();
	});

