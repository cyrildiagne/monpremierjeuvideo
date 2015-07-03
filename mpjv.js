var renderer, stage;

function setup() {
  renderer = PIXI.autoDetectRenderer(800, 600);
  document.body.appendChild(renderer.view);
  stage = new PIXI.Container();
  resize();

  document.body.addEventListener('keydown', keydown);
  document.body.addEventListener('keyup', keyup);
  window.addEventListener('resize', resize);

  auto_initialisation();
}

function keydown(ev) {
  if (ev.keyCode > 30 && ev.keyCode < 50) {
    ev.preventDefault();
  }
  auto_bouton_on();
}

function keyup(ev) {
  if (ev.keyCode > 30 && ev.keyCode < 50) {
    ev.preventDefault();
  }
  auto_bouton_off();
}

function resize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  renderer.resize(w, h);
}

function animate() {
	requestAnimationFrame(animate);
  auto_boucle();
  render();
}

function render() {
	renderer.render(stage);
}

// STARTUP

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

function create_tile(adresse) {
  var texture = PIXI.Texture.fromImage(adresse);
  var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height);
  stage.addChild(tilingSprite);
  return tilingSprite;
}

// STARTUP

setup();
animate();
