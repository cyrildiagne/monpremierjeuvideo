var obstacles = [];

// APP UTILS

function ajoute_image(adresse_img) {
  if (!adresse_img) {
    adresse_img = "assets/default/player.png";
  }
  var texture = PIXI.Texture.fromImage(adresse_img);
  var sprite = new PIXI.Sprite(texture);
  sprite.position = get_screen_center();
  sprite.scale.x = sprite.scale.y = renderer.height / 1024;
  sprite.anchor.set(0.5);
  game.addChild(sprite);
  return sprite;
}


function ajoute_fond(adresse_img) {
  if (!adresse_img) {
    adresse_img = "assets/default/background.png";
  }
  var texture = PIXI.Texture.fromImage(adresse_img);
  var sprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
  texture.addListener('update', resize);
  game.addChild(sprite);
  return sprite;
}

function avance_fond(vitesse) {
  var sprite;
  for (var i = 0; i < game.children.length; i++) {
    sprite = game.children[i];
    if (sprite.tileScale) {
      sprite.tilePosition.x -= vitesse;
    }
  }
}

function propulse(image, montant) {
  if (typeof(image.poid) == "undefined") {
    image.poid = 0;
    image.velocity = new PIXI.Point();
  }
  image.velocity.y -= montant * 0.01;
}

function ajoute_obstacle(adresse_img) {
  if (!adresse_img) {
    adresse_img = "assets/default/obstacle.png";
  }
  var texture = PIXI.Texture.fromImage(adresse_img);
  var sprite = new PIXI.Sprite(texture);
  sprite.anchor.set(0.5);
  sprite.scale.x = sprite.scale.y = renderer.height / 1024;
  game.addChild(sprite);
  obstacles.push(sprite);
  return sprite;
}

function avance_tous_les_obstacles(vitesse) {
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].position.x -= vitesse;
  }
}

function enleve_tous_les_osbtacles() {
  for (var i = 0; i < obstacles.length; i++) {
    game.removeChild(obstacles[i]);
  }
  obstacles = [];
}

function enleve_image(sprite) {
  game.removeChild(sprite);
}

function largeur_ecran() {
  return renderer.width;
}

function hauteur_ecran() {
  return renderer.width;
}

function une_chance_sur(num) {
  return Math.random() < (1/num);
}

function nombre_aleatoire_jusqua(max) {
  return Math.random() * max;
}

function affiche_score(score) {
  if (scoreLabel==null) {
    add_score();
  }
  scoreLabel.text = Math.round(score * 0.1);
  scoreLabel.position.x = (renderer.width-scoreLabel.width) * 0.5;
}

function affiche_score_grand(score) {
  if (scoreLabel==null) {
    add_score();
  }
  scoreLabel.text = Math.round(score * 0.1);
  var style = scoreLabel.style;
  style.font = 'bold 144px Arial';
  scoreLabel.style = style;
  scoreLabel.position.x = (renderer.width-scoreLabel.width) * 0.5;
  scoreLabel.position.y = (renderer.height-scoreLabel.height) * 0.5;
}

function cherche_collision_entre_les_obstacles_et(sprite) {
  var p = sprite.position.clone();
  p.x -= sprite.width * 0.5;
  p.y -= sprite.height * 0.5;
  for (var i = 0; i < obstacles.length; i++) {
    var obst  = obstacles[i];
    var op = obstacles[i].position.clone();
    op.x -= obst.width * 0.5;
    op.y -= obst.height * 0.5;
    var xOverlap =  (p.x > op.x && p.x < op.x + obst.width)
      || (p.x + sprite.width > op.x && p.x + sprite.width < op.x + obst.width);
    var yOverlap =  (p.y > op.y && p.y < op.y + obst.height)
      || (p.y + sprite.height > op.y && p.y + sprite.height < op.y + obst.height);
    if (xOverlap && yOverlap) {
      return true;
    }
  }
  return false;
}


function joue_son(adresse_son) {
  // TODO!
}



// APP UTILS ADVANCED

function get_screen_center() {
  return new PIXI.Point(renderer.width*0.5, renderer.height*0.5);
}

function loop_screen(sprite) {
  var width = renderer.width;
  var height = renderer.height;
  var pos = sprite.position;
  var marginX = sprite.width * 0.5;
  var marginY = sprite.height * 0.5;

  if (pos.y > height + marginY) {
    pos.y = -marginY;
  } else if (pos.y < -marginY) {
    pos.y = height + marginY;
  }
  if (pos.x > width + marginX) {
    pos.x = -marginX;
  } else if (pos.x < -marginX) {
    pos.x = width + marginX;
  }
}

// INTERNAL GAME

var scoreLabel;

function update_physics() {
  var sprite;
  for (var i = 0; i < game.children.length; i++) {
    sprite = game.children[i];
    var mass = sprite.poid || sprite.mass;
    if (mass) {
      if (typeof(sprite.velocity)=="undefined") {
        sprite.velocity = new PIXI.Point();
      }
      sprite.velocity.y += mass * 0.01;
      sprite.velocity.y = Math.min(Math.max(-20, sprite.velocity.y), 20);
      sprite.y += sprite.velocity.y;
    }
  }
}

function add_score() {
  scoreLabel = new PIXI.Text("score", {
    font: 'bold 72px Arial',
    fill: '#000055',
    stroke: '#FFFFFF',
    align : 'right',
    strokeThickness: 6
  });
  scoreLabel.position.x = scoreLabel.position.y = 20;
  ui.addChild(scoreLabel);
}


// INTERNAL ENGINE

var app, renderer, stage;
var ui, game;
var stopped;

function setup(app_) {

  app = app_;

  renderer = PIXI.autoDetectRenderer(800, 600);
  document.body.appendChild(renderer.view);

  stage = new PIXI.Container();

  game = new PIXI.Container();
  stage.addChild(game);

  ui = new PIXI.Container();
  stage.addChild(ui);

  document.body.addEventListener('mousedown', mousedown);
  document.body.addEventListener('mouseup', mouseup);
  window.addEventListener('resize', resize);

  resize();

  if (app.auto_creation) {
    app.auto_creation();
  }

  animate();
}

function mousedown(ev) {
  if (app.auto_bouton_on) {
    app.auto_bouton_on();
  }
}

function mouseup(ev) {
  if (app.auto_bouton_off) {
    app.auto_bouton_off();
  }
}

function resize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  renderer.resize(w, h);
  var sprite;
  for (var i = 0; i < game.children.length; i++) {
    sprite = game.children[i];
    if (sprite.tileScale) {
      sprite.tileScale.x = sprite.tileScale.y = renderer.height / sprite.texture.height;
      sprite.width  = w;
      sprite.height = h;
    }
    else {
      var scale = renderer.height / 1024;
      sprite.scale.x = sprite.scale.y = scale;
    }
  }
}

function animate() {
  if (!stopped) {
  	requestAnimationFrame(animate);
  }
  update_physics();
  if (app.auto_boucle) {
    app.auto_boucle();
  }
  render();
}

function render() {
	renderer.render(stage);
}

function stop() {
  stopped = true;
}
