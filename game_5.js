// variable qui stocke la vitesse à laquelle le niveau défile
var vitesse_defilement = 3;

// variable pour stocker le joueur
var player;

// variable indiquant si le bouton de controlle est appuyé
var bouton_on = false;

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
  player.poid = 25;
}

// Fonction automatique : auto_boucle
// Cette fonction est appelée automatiquement à chaque fois que l'image est raffraichie (60 fois par secondes)
function auto_boucle() {

  // on avance horizontalement à la vitesse en cours
  avance_fond(vitesse_defilement);

  // si le bouton est appuyé, on propulse le joueur vers le haut
  if (bouton_on) {
    propulse(player, 75);
  }

  // on s'assure que le joueur ne sorte pas de l'écran
  loop_screen(player);

  // une chance sur 50 d'ajouter un nouvel obtsacle
  if (une_chance_sur(100)) {
    var obstacle = ajoute_obstacle();
    obstacle.x = largeur_ecran();
    obstacle.y = nombre_aleatoire_jusqua(hauteur_ecran());
  }

  // on avance tous les obstacles
  avance_tous_les_obstacles(vitesse_defilement);

  // on regarde si le joueur touche un des obtsacles
  var collision = cherche_collision_entre_les_obstacles_et(player);

  // si c'est le cas on termine la partie
  if (collision) {

    // on enleve l'image du héro
    enleve_image(player);

    // on arrete le jeu
    stop();
  }
}

// Fonction automatique : auto_bouton_on
// Cette fonction est appelée automatiquement
// lorsque le bouton de jeu est appuyé
function auto_bouton_on() {

  // on passe la variable "bouton_on" à "true" (vrai)
  bouton_on = true;
}


// Fonction automatique : auto_bouton_on
// Cette fonction est appelée automatiquement
// lorsque le bouton de jeu est relaché
function auto_bouton_off() {

  // on passe la variable "bouton_on" à "false" (faux)
  bouton_on = false;
}

// lance l'application
setup(this);
