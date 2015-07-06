# Mon Premier Jeu Vidéo

Workshop avec des enfants de 9 à 15 ans dans lequel ils réalisent leur premier jeu vidéo avec javascript et Codepen.io
Les enfants ont 3 séances de 3h réparties sur 3 jours pour faire leur jeu.

La template vide :
- http://codepen.io/kikko_fr/pen/BNrjqx?editors=001

La Collection Codepen des différentes étapes :
http://codepen.io/collection/AExwWP/

---

## Scéance 1 - (3h) :

### 1) Présentation - (15 min)

### 2) Discussions autour du jeu vidéo - (30 min)

  De quoi est composé un jeu vidéo ?

  * Gameplay

      a) Mécanisme/type de jeu (plateforme, shooter, sandbox, simulation..etc)
      b) Interaction homme-machine (manette, clavier, kinect..etc)
      c) Réflexion sur le design d'interaction :
        - Quelle est la différence entre un jeu et un film ?
        - Lequel des 2 vous préférez ? Pourquoi ?

  * Graphisme
      Technologie : 2D, 3D, réaliste, cartoon..etc

  * Audio
      Quelle importance de l'audio ? (immersion)

  * Histoire
      Est-ce que tous les jeux on des histoires ?

  * Le code
      l'élément qui fait lorsqu'on appuie sur une touche du clavier
      le personnage se déplace, que le son se joue..etc.


### 3) C'est quoi le code ? - (15 min)

  * à quoi ça ressemble ?

  * où est-ce qu'on trouve du code ?

  * qui écrit du code ?
    - les ingénieurs et informaticiens, mais aussi les artistes, les architectes, les animateurs..etc

  * que faut-il savoir faire pour coder ?
    - lire
    - écrire
    - compter

### 4) Introduction à Codepen - (30 min)

  * login

  * fork

### 5) Introduction à Javascript - (1h30)

  • game_0 : __affiche un fond d'écran__

    * notion de syntaxe
      - mots & symboles reconnus par l'ordinateur
      - ;   pour indiquer la fin d'une commande
      - ""  pour les liens vers les images
      - //  pour les commentaire

    * function : utilisation
      - les functions sont des actions que l'on fait executer fait_un_gateau()
      - les parenthèses indique que l'on veut lancer l'action (comme si on appuyait sur le bouton d'une machine)
      - les functions sont souvent imbriquées : pour faire un gateau, la machine rassemble les ingrédients..etc
      - les arguments permettent de personnaliser l'execution d'une action. Par exemple on choisit le type de fruits que l'on veut dans le gateau..etc

    * Résultat : http://codepen.io/kikko_fr/pen/wamMym?editors=001


  • game_1 : __fait avancer automatiquement le fond d'écran__

    * documentation :
      - avance_fond

    * function : création
      - mot clé 'function'
      - accolades

    * variable
      - mot clé "var"
      - on peut y stocker un nombre, un mot, une image ou n'importe quel autre élément du jeu

    * notion de raffraichissement d'image

    * Résultat : http://codepen.io/kikko_fr/pen/MwVKGx?editors=001


---

## Scéance 2 - (3h)

  • game_2 : __ajout du personnage principal__

    * documentation :
      - ajoute_image

    * fonction qui renvoie une valeur

    * coordonnées
      - axes X / Y
      - vélocité

    * notion de propriété qu'on lit/modifie avec '.'
      - 'x'
      - 'poid'

    * Résultat : http://codepen.io/kikko_fr/pen/eNMJrw?editors=001

  • game_3 : __ajout des controles du personnage__

    * documentation : auto_bouton_on & auto_bouton_off

    * booléens

    * if () {}

    * Résultat : http://codepen.io/kikko_fr/pen/vORLrm?editors=001

  • game_4 : __ajout des obstacles__

    * documentation :
      - une_chance_sur
      - ajoute_obstacle
      - largeur_ecran
      - hauteur_ecran
      - nombre_aleatoire_jusqua
      - avance_tous_les_obstacles

    * Résultat : http://codepen.io/kikko_fr/pen/vORLrm?editors=001

  • game_5 : __ajout des collisions avec les obstacles__

    * documentation :
      - cherche_collision_entre_les_obstacles_et
      - enleve_image();
      - stop();

    * Résultat : http://codepen.io/kikko_fr/pen/Wvzryg?editors=001

---

## Scéance 3 - (3h)

  • game_6 : __ajout du graphisme__

    * drawing tools :
      - http://pixelartmaker.com ou http://pixlr.com/editor
      - personnage
      - obstacles
      - background

    * Résultat : http://codepen.io/kikko_fr/pen/eNMJKw?editors=001

  • game_7 : __ajout du score et du son__

    * documentation :
      - affiche_score
      - affiche_score_grand
      - joue_son

    * Résultat : http://codepen.io/kikko_fr/pen/GJxoXM?editors=001

---

## Bonus

- augmenter progressivement la vitesse de défilement
- else {}
- <, >, == et !=

---

#  TODO :

* P1 :

* P2 :

* P3 :
  - add sounds
  - trouver documentation javascript en français
  - filtre parental imgur ou utiliser une autre plateforme ?
  - faire une selection de jeux dispos sur codepen

* P4 :
  - check mobile version
