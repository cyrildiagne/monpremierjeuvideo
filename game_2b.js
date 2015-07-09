// variable pour stocker le joueur
var player;

// variable qui stocke la vitesse du joueur
var vitesse = 3;

// Fonction automatique : auto_creation
// Cette fonction est appelée automatiquement lorsque l'application démarre
function auto_creation() {

  // on ajoute le fond d'écran
  ajoute_fond();

  // on ajoute l'image du joueur
  player = ajoute_image();

  // on position le joueur à gauche de l'écran, à 100 pixels du bord
  player.x = 0;
}

// Fonction automatique : auto_boucle
// Cette fonction est appelée automatiquement à chaque fois que l'image est raffraichie (60 fois par secondes)
function auto_boucle() {

  // on avance horizontalement à la vitesse en cours
  avance_fond(3);

  player.x = player.x + vitesse;

  if (player.x > 1100) {
    vitesse = -vitesse;
  }
  if (player.x < 0) {
    vitesse = -vitesse;
  }
}

// lance l'application
start(this);
