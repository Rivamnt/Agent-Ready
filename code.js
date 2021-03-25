var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c17fcd6f-5c3a-4ad0-b08d-db51762efcba","ef0568ca-1f8d-4f8c-855a-43d6104e888f","4095355e-590c-4d02-85bc-25fecb9efc60","2a958c14-dd9e-42e2-9bc8-aef160973932","b06c9108-5475-4e5e-86a0-e864feea3d98","bf09f5b9-cfcf-415d-86e0-06471d7f659a","b059022f-3502-45e7-a11b-8692c6e49e79"],"propsByKey":{"c17fcd6f-5c3a-4ad0-b08d-db51762efcba":{"name":"coin","sourceUrl":null,"frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"1s5ejqh50m5_afCL8Q1lyAMT2JQeZ97r","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/c17fcd6f-5c3a-4ad0-b08d-db51762efcba.png"},"ef0568ca-1f8d-4f8c-855a-43d6104e888f":{"name":"flag","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"c4M.r6q0fszcEIXU.R7GnnGPmMhL8Ig1","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/ef0568ca-1f8d-4f8c-855a-43d6104e888f.png"},"4095355e-590c-4d02-85bc-25fecb9efc60":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"2a958c14-dd9e-42e2-9bc8-aef160973932":{"name":"lollipop_red_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"B90psF18LeLW0W9bWRXibxgilM_8ymv5","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/2a958c14-dd9e-42e2-9bc8-aef160973932.png"},"b06c9108-5475-4e5e-86a0-e864feea3d98":{"name":"ready","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9QuoBNV7rgK0IHWyO8Mp4kKNGcT9iGb2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b06c9108-5475-4e5e-86a0-e864feea3d98.png"},"bf09f5b9-cfcf-415d-86e0-06471d7f659a":{"name":"dead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"mAgKCnXr1StNCJLoo_ItCIIIeFl_3.lr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bf09f5b9-cfcf-415d-86e0-06471d7f659a.png"},"b059022f-3502-45e7-a11b-8692c6e49e79":{"name":"happy","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"f99hWdp3w7ULu5Vw8mJrGZ9i67Gt4pW2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b059022f-3502-45e7-a11b-8692c6e49e79.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create player as sprite object
var player = createSprite(0, 0,11,11);
player.setAnimation("ready");
player.scale=0.25;

//create lasers as sprite objects
var l1 = createSprite(30,65,170,15);
l1.shapeColor=("red");
var l2 = createSprite(60,120,10,50);
l2.shapeColor=("red");
var l3 = createSprite(68,170,90,10);
l3.shapeColor=("red");
var l4 = createSprite(110,240,15,70);
l4.shapeColor=("red");
var l5 = createSprite(15,235,60,10);
l5.shapeColor=("red");
var l6 = createSprite(200,220,80,10);
l6.shapeColor=("red");
var l7 = createSprite(200,180, 10,60);
l7.shapeColor=("red");
var l8 = createSprite(250,100, 75,10);
l8.shapeColor=("red");
var l9 = createSprite(175,25, 10,70);
l9.shapeColor=("red");
var l10 = createSprite(285,100, 10,90);
l10.shapeColor=("red");
var l11 = createSprite(325,90, 60,10);
l11.shapeColor=("red");
var l12 = createSprite(370,30, 70,15);
l12.shapeColor=("red");
var l13 = createSprite(350,190, 90,15);
l13.shapeColor=("red");
var l14 = createSprite(240,280, 60,10);
l14.shapeColor=("red");
var l15 = createSprite(150,320, 80,10);
l15.shapeColor=("red");
var l16 = createSprite(235, 375,15,70);
l16.shapeColor=("red");
var l17 = createSprite(40,320, 70,10);
l17.shapeColor=("red");
var l18 = createSprite(290,280, 10,100);
l18.shapeColor=("red");
var l19 = createSprite(325,265, 50,10);
l19.shapeColor=("red");
var l20 = createSprite(365,315, 60,10);
l20.shapeColor=("red");
var l21 = createSprite(350,360, 15,30);
l21.shapeColor=("red");

//create ending point
var end = createSprite(380,367, 20,20);
end.setAnimation("flag");
end.scale=1;

//create sprite objects as coins with animation
var coin1 = createSprite(130,25);
coin1.setAnimation("coin");
coin1.scale=0.5;
var coin2 = createSprite(260,270);
coin2.setAnimation("coin");
coin2.scale=0.5;
var coin3 = createSprite(240,190);
coin3.setAnimation("coin");
coin3.scale=0.5;
var coin4 = createSprite(360,230);
coin4.setAnimation("coin");
coin4.scale=0.5;
var coin5 = createSprite(350,150);
coin5.setAnimation("coin");
coin5.scale=0.5;
var coin6 = createSprite(30,270);
coin6.setAnimation("coin");
coin6.scale=0.5;
var coin7 = createSprite(195,360);
coin7.setAnimation("coin");
coin7.scale=0.4;
var coin8 = createSprite(20,125);
coin8.setAnimation("coin");
coin8.scale=0.4;
var coin9 = createSprite(145,100);
coin9.setAnimation("coin");
coin9.scale=0.5;

//create sprite objects as whirlwinds with animation
var shock1 = createSprite(245, 35);
shock1.setAnimation("lollipop_red_1");
shock1.scale=0.5;
var shock2 = createSprite(165, 280);
shock2.setAnimation("lollipop_red_1");
shock2.scale=0.4;

//create invisible sprites for bounceOff for some lasers
var invisible1 = createSprite(230, 315,15,15);
invisible1.visible=false;
var invisible2 = createSprite(230,100, 80,10);
invisible2.visible=false;

//variables to store game state
var gameState="serve";

//variable to store score
var Lives=5;

function draw() {
  //set background colour
  background("black");
  
  //create edge boundaries
  //make the player bounce off edges
  createEdgeSprites();
  player.bounceOff(edges);
  
  //movement of player with arrow keys
  if (keyDown(DOWN_ARROW)) {
    player.y=player.y+2;
  }
  if (keyDown(UP_ARROW)) {
    player.y=player.y-2;
  }
  if (keyDown(LEFT_ARROW)) {
    player.x=player.x-2;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+2;
  }
  
  //sound for game instructions in serve state
  playSound("assets/Recording.mp3", false);
  stopSound("assets/Recording.mp3");
  
  //move the lasers when space pressed
  if (keyDown("space")&& gameState==="serve") {
   player.setAnimation("ready");
   serve();
   gameState="play"; 
  }
  
  //make the moving lasers bounce off other lasers
  l2.bounceOff(l1); l2.bounceOff(l3);
  l5.bounceOff(leftEdge); l5.bounceOff(l4);
  l17.bounceOff(leftEdge); l17.bounce(l15);
  l15.bounce(l17); l15.bounceOff(invisible1);
  l14.bounceOff(l18); l14.bounceOff(shock2);
  l19.bounceOff(rightEdge); l19.bounceOff(l18);
  l20.bounceOff(l18); l20.bounceOff(rightEdge);
  l21.bounceOff(bottomEdge); l21.bounceOff(l20);
  l11.bounceOff(rightEdge); l11.bounceOff(l10);
  l8.bounceOff(coin9); l8.bounceOff(l10);
  l7.bounceOff(invisible2); l7.bounceOff(l6);

  //make the collected coin invisible to look as if taken
  if (player.isTouching(coin1)){
  coin1.visible=false;  
  }
  if (player.isTouching(coin2)){
  coin2.visible=false;  
  }
  if (player.isTouching(coin3)){
  coin3.visible=false;  
  }
  if (player.isTouching(coin4)){
  coin4.visible=false;  
  }
  if (player.isTouching(coin5)){
  coin5.visible=false;  
  }
  if (player.isTouching(coin6)){
  coin6.visible=false;  
  }
  if (player.isTouching(coin7)){
  coin7.visible=false;  
  }
  if (player.isTouching(coin8)){
  coin8.visible=false;  
  }
  if (player.isTouching(coin9)){
  coin9.visible=false;  
  }
  
  //text to display scores/lives
  fill("red");
  textSize(20);
  text("Lives : "+Lives, 15, 370);
  
  //reset the player position and decrease 1 life if it touches any laser
  if (player.isTouching(l1)||player.isTouching(l2)||player.isTouching(l3)||
  player.isTouching(l4)||player.isTouching(l5)||player.isTouching(l6)||
  player.isTouching(l7)||player.isTouching(l8)||player.isTouching(l9)||
  player.isTouching(l10)||player.isTouching(l11)||player.isTouching(l12)||
  player.isTouching(l13)||player.isTouching(l14)||player.isTouching(l15)||
  player.isTouching(l16)||player.isTouching(l17)||player.isTouching(l18)||
  player.isTouching(l19)||player.isTouching(l20)||player.isTouching(l21))
  { playSound("assets/category_projectile/retro_game_weapon_-laser_shot_single.mp3", false);
    player.x=0; player.y=0;
    Lives=Lives-1;
  }
  
  //stop all moving sprites when game over or player loses
  if (Lives===0||player.isTouching(shock1)||player.isTouching(shock2)) {
    gameState="over";
    player.setAnimation("dead");
    l2.velocityY=0; l5.velocityX=0;
    l17.velocityX=0; l15.velocityX=0;
    l14.velocityX=0; l19.velocityX=0;
    l20.velocityX=0; l21.velocityY=0;
    l11.velocityX=0; l8.velocityX=0;
    l7.velocityY=0;
    player.velocityX=0; player.velocityY=0;
    textSize(17);
    text("Game Over!!", 130, 140);
    text("The robber escaped!", 112, 165);
    text("Press 'r' to Restart", 112, 190);
    l7.visible=false;
    coin3.visible=false;
  }
  
  //stop all moving sprites when game over or player wins
  if (player.isTouching(end)) {
    gameState="over";
    player.setAnimation("happy");
    player.velocityX=0;player.velocityY=0;
    l2.velocityY=0; l5.velocityX=0;
    l17.velocityX=0; l15.velocityX=0;
    l14.velocityX=0; l19.velocityX=0;
    l20.velocityX=0; l21.velocityY=0;
    l11.velocityX=0; l8.velocityX=0;
    l7.velocityY=0;
    fill("yellow");
    textSize(17);
    text("You caught the robber!", 112, 140);
    text("You are a great agent!", 115, 165);
    text("Press 'r' to Restart", 112, 190);
    l7.visible=false;
    coin3.visible=false;
  }
  
  //restart or reset the game when 'r' is pressed
  if (keyDown("r") && gameState === "over") {
    reset();
    gameState = "serve";
  }
  
  drawSprites();
}

//function to move the lasers
function serve(){
 l2.velocityY=2; 
 l5.velocityX=2;
 l17.velocityX=2;
 l15.velocityX=-2;
 l14.velocityX=2;
 l19.velocityX=2;
 l20.velocityX=-2;
 l21.velocityY=2;
 l11.velocityX=2;
 l8.velocityX=-2;
 l7.velocityY=-2;
}

//function to reset positions of lasers and player
//function to reset score/lives
//function to make visible all the coins
//function to play game info audio again
function reset(){
  l2.y=120; 
  l5.x=15;
  l7.y=180;
  l8.x=250;
  l11.x=325;
  l14.x=240;
  l15.x=150;
  l17.x=40;
  l19.x=325;
  l20.x=365;
  l21.y=360;
  Lives=5;
  player.x=0; player.y=0;
  player.setAnimation("ready");
  playSound("assets/Recording.mp3", false);
  l7.visible=true;
  coin1.visible=true;
  coin2.visible=true;
  coin3.visible=true;
  coin4.visible=true;
  coin5.visible=true;
  coin6.visible=true;
  coin7.visible=true;
  coin8.visible=true;
  coin9.visible=true;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
