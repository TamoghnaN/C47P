var runner, coin, bar, obc1 ,obc2;
var running, jumping, coinImg, barImg;
var coinGroup, barGroup, obcJGroup, obcDGroup;
var bg,bgImg,bg2;
var invisGround;

function preload(){
  running = loadAnimation("assets/r2.png", "assets/r3.png", "assets/r4.png","assets/r5.png","assets/r6.png","assets/r7.png","assets/r8.png");
  jumping = loadAnimation("assets/j1.png", "assets/j2.png", "assets/j3.png", "assets/j4.png", "assets/j5.png", "assets/r1.png");
  ducking  = loadAnimation("assets/d2.png");
  coinImg = loadImage("assets/coin.png");
  barImg = loadImage("assets/energy bar.png");
  obc1 = loadImage("assets/obcD.png");
  obc2= loadImage("assets/obcJ.png");
bgImg = loadImage("assets/bg.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
runner=createSprite(windowWidth/2-700,windowHeight-250);
runner.addAnimation("run",running);
runner.addAnimation("jump",jumping);
runner.addAnimation("duck",ducking);
runner.changeAnimation("run",running);
runner.scale=0.7;

bg=createSprite(windowWidth/2,windowHeight/2);
bg.addImage(bgImg);
bg.x=bg.width/2;
bg.scale=2.75;
bg.depth=0;
bg2=createSprite(windowWidth/2,windowHeight/2);
bg2.addImage(bgImg);
bg2.x=windowWidth+200;
bg2.scale=2.75;
bg2.depth=0;

invisGround=createSprite(windowWidth/2,windowHeight-150,windowWidth,10);

obcDGroup = new Group();
obcJGroup = new Group();
coinGroup = new Group();
barGroup = new Group();

}

function draw() {
  background(0);  
  drawSprites();
  invisGround.visible=false;
bg.velocityX=-5;
bg2.velocityX=-5;
if(bg.x<windowWidth/2-1650){
  bg.x=windowWidth+725;
}
if(bg2.x<windowWidth/2-1650){
  bg2.x=windowWidth+725;
}

var ran=Math.round(random(1,2));
if(frameCount%200===0){
  if(ran===1){
    obstacleD();
  }
  else {
    obstacleJ();
  }
}

if(keyDown("space")&&runner.y>windowHeight-300){
  runner.changeAnimation("jump");
runner.velocityY=-15;

}
else{
  runner.changeAnimation("run");
}

if(keyDown("down")){
  runner.changeAnimation("duck");

}
else{
  runner.changeAnimation("run");
}


runner.velocityY+=0.5;
runner.collide(invisGround);

}

function obstacleD(){
  var obstacle1=createSprite(windowWidth,windowHeight-300);
  obstacle1.addImage(obc1);
  obstacle1.angle=90
  obstacle1.scale=0.5;
  obstacle1.velocityX=-5;
  obcDGroup.add(obstacle1);
  obstacle1.depth=runner.depth;
  runner.depth+=1;
}

function obstacleJ(){
  var obstacle2=createSprite(windowWidth,windowHeight-200);
  obstacle2.addImage(obc2);
  obstacle2.scale=0.5;
  obstacle2.velocityX=-5;
  obcJGroup.add(obstacle2);
  obstacle2.depth=runner.depth;
  runner.depth+=1;
}
