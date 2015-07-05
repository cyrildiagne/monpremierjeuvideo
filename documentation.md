# MPJV - Documentation :


### Fonctions automatiques à créer

Si vous ajoutez ces fonctions au code de votre jeu avec le nom exact, elles seront appelées automatiquement.


*auto_creation*

Cette fonction est appelée automatiquement lorsque l'application démarre

__Exemple :__
```
function auto_creation() {

}
```


*auto_boucle*

Cette fonction est appelée automatiquement à chaque fois que l'image est redessinée (60 fois par secondes)

__Exemple :__
```
function auto_boucle() {

}
```


*auto_bouton_on*

Cette fonction est appelée automatiquement lorsque le bouton de jeu est appuyé

__Exemple :__
```
function auto_bouton_on() {

}
```


*auto_bouton_off*

Cette fonction est appelée automatiquement lorsque le bouton de jeu est relaché

__Exemple :__
```
function auto_bouton_off() {

}
```

---


### Fonctions utiles à appeler


Vous pouvez appeler ces fonctions pour enrichir votre jeu.


*ajoute_fond*

Cette fonction ajoute une image en fond d'écran. Le fond est automatiquement dupliqué pour remplir tout l'écran.
Il ne peut y avoir qu'un fond à la fois.

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

__Exemple :__
```
var monFond = ajoute_fond("http://imgur.com/jXQfmZX.jpg");
```


*avance_fond*

Cette fonction permet de faire avancer le fond

> Arguments :
- 1) nombre de pixel de déplacement du fond

__Exemple :__
```
avance_fond(5);
```


*ajoute_image*

Cette fonction ajoute une image au jeu

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

__Exemple :__
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
```


*ajoute_obstacle*

Cette fonction permet d'ajouter un obstacle.

> Arguments :
- 1) lien vers une image (une image par défaut est utilisé si l'argument n'est pas renseigné)

> Renvoi :
- une variable d'image

__Exemple :__
```
var monObstacle = ajoute_obstacle("http://imgur.com/jXQfmZX.jpg");
```


*avance_tous_les_obstacles*

Cette fonction fait avancer tous les obstacles.

> Arguments :
- 1) nombre de pixel de déplacement des obstacles

__Exemple :__
```
avance_tous_les_obstacles(5);
```


*une_chance_sur*

Cette fonction permet par exemple de n'effectuer une action que quelque fois.

> Arguments :
- 1) nombre qui indique le nombre de possibilités (équivalent au nombre de faces d'un dé)

> Renvoi :
- Un booléen (Vrai ou Faux) selon un tirage aléatoire

__Exemple :__
```
var chanceAleatoire = une_chance_sur(6);
if (changeAleatoire) {
  affiche_score_grand("BRAVO");
}
```


*nombre_aleatoire_jusqua*

Cette fonction permet d'obtenir un nombre aléatoire entre 0 et un maximum

> Arguments :
- 1) nombre maxium à ne pas dépasser

> Renvoi :
- Un nombre aléatoire entre 0 et le maximum donné en argument

__Exemple :__
```
var monNombreAleatoire = nombre_aleatoire_jusqua(10);
```


*largeur_ecran*

Cette fonction renvoie la largeur de l'écran

> Renvoi :
- Un nombre correspondant à la largeur de l'écran en pixels

__Exemple :__
```
var largeur = largeur_ecran();
```


*hauteur_ecran*

Cette fonction renvoie la hauteur de l'écran

> Renvoi :
- Un nombre correspondant à la hauteur de l'écran en pixels

__Exemple :__
```
var hauteur = hauteur_ecran();
```

*affiche_score*

Cette fonction affiche le score

> Arguments :
- 1) nombre du score actuel

__Exemple :__
```
var score_actuel = 4000;
affiche_score(score_actuel);
```


*affiche_score_grand*

Cette fonction affiche le score en grand au milieu de l'écran

> Arguments :
- 1) nombre du score actuel

__Exemple :__
```
var score_actuel = 4000;
affiche_score(score_actuel);
```


*cherche_collision_entre_les_obstacles_et*

Cette fonction regarde si l'image donnée en argument touche n'importe lequelle des obstacles

> Argument :
- 1) une image

__Exemple :__
```
var monJoueur = ajoute_image("http://imgur.com/jXQfmZX.jpg");
avance_tous_les_obstacles(10);
var collision = cherche_collision_entre_les_obstacles_et(monJoueur);
if (collision) {
  affiche_score("JOUEUR TOUCHE OBSTACLE!");
}
```

*joue_son*

Cette fonction joue un son

> Arguments :
- 1) adresse d'un son (mp3 ou wav)

__Exemple :__
```
joue_son("http://freesoundeffect.com/ghZ3o9");
```


*enleve_tous_les_osbtacles*

Cette fonction permet d'enlever tous les obstacles.

__Exemple :__
```
enleve_tous_les_osbtacles();
```


*enleve_image*

Cette fonction permet d'enlever une image ajoutée avec 'ajoute_image'

> Arguments :
- 1) une variable d'image

__Exemple :__
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
enleve_image(monImage);
```

*stop*

Cette fonction arrête l'execution du jeu

__Exemple :__
```
stop();
```

---


### Fonctions avancées

Ces fonctions ont des noms anglais.
Elles permettent d'ajouter des fonctionnalités avancées à votre jeu.


*loop_screen*

Cette fonction permet d'empécher une image de sortir de l'écran en la faisant revenir de l'autre coté.

> Argument :
- 1) une image

__Exemple :__
```
var monImage = ajoute_image("http://imgur.com/jXQfmZX.jpg");
loop_screen(monImage);
```


*get_screen_center*

Cette fonction renvoie les coordonnées du milieu de l'écran

> Renvoi :
- une variable de type Point représentant les coordonnées du milieu de l'écran

__Exemple :__
```
var milieu = get_screen_center();
monJoueur.position.x = milieu.x;
monJoueur.position.y = milieu.y;
```
