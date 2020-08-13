//declaring sprites variables
var player,banana,obstacle,ObstacleGroup,BananaGroup,bg
//declearing image variables
var bananaImage,obstacleImage,bgimage,player_running,bananaimage
//declaring score variable
var score=0;
function preload(){
  bgimage=loadImage("jungle.png");
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimage=loadImage("banana.png");
  obstacleimage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,400,400);
  bg.addImage("label1",bgimage);
  bg.velocityX=-2;
  player=createSprite(100,370,20,20);
  player.addAnimation("label2",player_running);
  player.scale=0.10;
  ground=createSprite(400,380,400,20);
  ground.visible=false;
  }

function draw() {
  background(220);
  ground.velocityX=-4;
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
  if(BananaGroup.isTouching(player)){
    score=score+2;
    BananaGroup.destroyEach();
  }
  
  switch(score){
    case 10: player.scale=0.12;
              break;
    case 20: player.scale=0.14;
              break;
    case 30: player.scale=0.16;
              break;
    case 40: player.scale=0.18;
              break;
    case 50: player.scale=0.20;
              break;
              default: break;
  }
  
  if(ObstacleGroup.isTouching(player)){
    player.scale=0.10;
  }
  
  spawnObstacles();
  createfood();
  drawSprites();
  displaytext();
}

function displaytext(){
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 200, 100);
}


function createfood(){
  if(frameCount%80===0) {
    banana=createSprite(200,250,20,20);
    banana.y=Math.round(random(150,250));
    banana.addAnimation("label3","bananaimage");
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=80;
    
    //adjust the depth
    banana.depth = player.depth;
    player.depth = player.depth + 1;
    //add each banana to the group
    BananaGroup.add(banana);
  }
}


function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(200,355,20,20);
    obstacle.velocityX=-3;
    obstacle.addAnimation("label4","obstacleimage");
    obstacle.scale=0.15;
    obstacle.lifetime=133;
    ObstaclesGroup.add(obstacle);
    
  }
}

