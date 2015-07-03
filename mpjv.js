var app, renderer, stage;

function setup(app_) {

  app = app_;

  renderer = PIXI.autoDetectRenderer(800, 600);
  stage = new PIXI.Container();

  document.body.appendChild(renderer.view);
  document.body.addEventListener('mousedown', mousedown);
  document.body.addEventListener('mouseup', mouseup);
  window.addEventListener('resize', resize);

  resize();

  if (app.auto_boucle) {
    app.auto_initialisation();
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
}

function animate() {
	requestAnimationFrame(animate);

  if (app.auto_boucle) {
    app.auto_boucle();
  }
  render();
}

function render() {
	renderer.render(stage);
}

// UTILS

function half_chance() {
  return Math.random() < 0.5;
}

function get_screen_center() {
  return new PIXI.Point(renderer.width*0.5, renderer.height*0.5);
}

function create_sprite(adresse) {
  var texture = PIXI.Texture.fromImage(adresse);
  var sprite = new PIXI.Sprite(texture);
  sprite.position = get_screen_center();
  sprite.anchor.set(0.5);
  stage.addChild(sprite);
  return sprite;
}

function create_background(adresse) {
  var texture = PIXI.Texture.fromImage(adresse);
  var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
  texture.addListener('update',function(){
    tilingSprite.tileScale.x = tilingSprite.tileScale.y = renderer.height / texture.height;
  })
  stage.addChild(tilingSprite);
  return tilingSprite;
}
