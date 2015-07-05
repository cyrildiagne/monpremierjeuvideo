# MPJV - Documentation :


### Fonctions automatiques à créer

Si vous ajoutez ces fonctions au code de votre jeu avec le nom exact, elles seront appelées automatiquement.


__auto_creation__

Cette fonction est appelée automatiquement lorsque l'application démarre

*Exemple :*
```
function auto_creation() {

}
```


__auto_boucle__

Cette fonction est appelée automatiquement à chaque fois que l'image est redessinée (60 fois par secondes)

*Exemple :*
```
function auto_boucle() {

}
```


__auto_bouton_on__

Cette fonction est appelée automatiquement lorsque le bouton de jeu est appuyé

*Exemple :*
```
function auto_bouton_on() {

}
```


__auto_bouton_off__

Cette fonction est appelée automatiquement lorsque le bouton de jeu est relaché

*Exemple :*
```
function auto_bouton_off() {

}
```

---


### Fonctions utiles à appeler


Vous pouvez appeler ces fonctions pour enrichir votre jeu.


__ajoute_fond__

Cette fonction ajoute une image en fond d'écran. Le fond est automatiquement dupliqué pour remplir tout l'écran.
Il ne peut y avoir qu'un fond à la fois.

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

*Exemple :*
```
var monFond = ajoute_fond("http://imgur.com/jXQfmZX.jpg");
```


__avance_fond__

Cette fonction permet de faire avancer le fond

> Arguments :
- 1) nombre de pixel de déplacement du fond

*Exemple :*
```
avance_fond(5);
```


__ajoute_image__

Cette fonction ajoute une image au jeu

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

*Exemple :*
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
```


__ajoute_obstacle__

Cette fonction permet d'ajouter un obstacle.

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

*Exemple :*
```
var monObstacle = ajoute_obstacle("http://imgur.com/jXQfmZX.jpg");
```


__avance_tous_les_obstacles__

Cette fonction fait avancer tous les obstacles.

> Arguments :
- 1) nombre de pixel de déplacement des obstacles

*Exemple :*
```
avance_tous_les_obstacles(5);
```


__une_chance_sur__

Cette fonction permet par exemple de n'effectuer une action que quelque fois.

> Arguments :
- 1) nombre qui indique le nombre de possibilités (équivalent au nombre de faces d'un dé)

> Renvoi :
- Un booléen (Vrai ou Faux) selon un tirage aléatoire

*Exemple :*
```
var chanceAleatoire = une_chance_sur(6);
if (changeAleatoire) {
  affiche_score_grand("BRAVO");
}
```


__nombre_aleatoire_jusqua__

Cette fonction permet d'obtenir un nombre aléatoire entre 0 et un maximum

> Arguments :
- 1) nombre maxium à ne pas dépasser

> Renvoi :
- Un nombre aléatoire entre 0 et le maximum donné en argument

*Exemple :*
```
var monNombreAleatoire = nombre_aleatoire_jusqua(10);
```


__largeur_ecran__

Cette fonction renvoie la largeur de l'écran

> Renvoi :
- Un nombre correspondant à la largeur de l'écran en pixels

*Exemple :*
```
var largeur = largeur_ecran();
```


__hauteur_ecran__

Cette fonction renvoie la hauteur de l'écran

> Renvoi :
- Un nombre correspondant à la hauteur de l'écran en pixels

*Exemple :*
```
var hauteur = hauteur_ecran();
```

__affiche_score__

Cette fonction affiche le score

> Arguments :
- 1) nombre du score actuel

*Exemple :*
```
var score_actuel = 4000;
affiche_score(score_actuel);
```


__affiche_score_grand__

Cette fonction affiche le score en grand au milieu de l'écran

> Arguments :
- 1) nombre du score actuel

*Exemple :*
```
var score_actuel = 4000;
affiche_score(score_actuel);
```


__cherche_collision_entre_les_obstacles_et__

Cette fonction regarde si l'image donnée en argument touche n'importe lequelle des obstacles

> Argument :
- 1) une image

*Exemple :*
```
var monJoueur = ajoute_image("http://imgur.com/jXQfmZX.jpg");
avance_tous_les_obstacles(10);
var collision = cherche_collision_entre_les_obstacles_et(monJoueur);
if (collision) {
  affiche_score("JOUEUR TOUCHE OBSTACLE!");
}
```

__joue_son__

Cette fonction joue un son

> Arguments :
- 1) adresse d'un son (mp3 ou wav)

*Exemple :*
```
joue_son("http://freesoundeffect.com/ghZ3o9");
```


__enleve_tous_les_osbtacles__

Cette fonction permet d'enlever tous les obstacles.

*Exemple :*
```
enleve_tous_les_osbtacles();
```


__enleve_image__

Cette fonction permet d'enlever une image ajoutée avec 'ajoute_image'

> Arguments :
- 1) une variable d'image

*Exemple :*
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
enleve_image(monImage);
```

__stop__

Cette fonction arrête l'execution du jeu

*Exemple :*
```
stop();
```

---


### Fonctions avancées

Ces fonctions ont des noms anglais.
Elles permettent d'ajouter des fonctionnalités avancées à votre jeu.


__loop_screen__

Cette fonction permet d'empécher une image de sortir de l'écran en la faisant revenir de l'autre coté.

> Argument :
- 1) une image

*Exemple :*
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
loop_screen(monImage);
```


__get_screen_center__

Cette fonction renvoie les coordonnées du milieu de l'écran

> Renvoi :
- une variable de type Point représentant les coordonnées du milieu de l'écran

*Exemple :*
```
var milieu = get_screen_center();
monJoueur.position.x = milieu.x;
monJoueur.position.y = milieu.y;
```
