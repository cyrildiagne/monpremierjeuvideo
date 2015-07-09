// variable qui stocke la vitesse à laquelle le niveau défile
var vitesse_defilement = 3;

// variable pour stocker le joueur
var player;

// variable indiquant si le bouton de controlle est appuyé
var jump = false;

// Fonction automatique : auto_creation
// Cette fonction est appelée automatiquement lorsque l'application démarre
function auto_creation() {

  // on ajoute le fond d'écran
  ajoute_fond();

  // on ajoute l'image du joueur
  player = ajoute_image();

  // on position le joueur à gauche de l'écran, à 100 pixels du bord
  player.x = 100;

  // définit le poid de cette image pour qu'elle tombe automatiquement
  player.poids = 25;
}

// Fonction automatique : auto_boucle
// Cette fonction est appelée automatiquement à chaque fois que l'image est raffraichie (60 fois par secondes)
function auto_boucle() {

  // on avance horizontalement à la vitesse en cours
  avance_fond(vitesse_defilement);

  // si le bouton est appuyé, on propulse le joueur vers le haut
  if (jump) {
    propulse(player, 75);
  }
}

// Fonction automatique : auto_bouton_on
// Cette fonction est appelée automatiquement
// lorsque le bouton de jeu est appuyé
function auto_bouton_on() {

  // on passe la variable "jump" à "true" (vrai)
  jump = true;
}


// Fonction automatique : auto_bouton_on
// Cette fonction est appelée automatiquement
// lorsque le bouton de jeu est relaché
function auto_bouton_off() {

  // on passe la variable "jump" à "false" (faux)
  jump = false;
}

// lance l'application
start(this);
