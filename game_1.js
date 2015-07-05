// variable qui stocke la vitesse à laquelle le niveau défile
var vitesse_defilement = 3;


// Fonction automatique : auto_creation
// Cette fonction est appelée automatiquement lorsque l'application démarre
function auto_creation() {

  // on ajoute le fond d'écran
  ajoute_fond();
}


// Fonction automatique : auto_boucle
// Cette fonction est appelée automatiquement à chaque fois que l'image est raffraichie (60 fois par secondes)
function auto_boucle() {

  // on avance horizontalement à la vitesse en cours
  avance_fond(vitesse_defilement);
}

// lance l'application
setup(this);
