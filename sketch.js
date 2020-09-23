
var monkey , monkey_running
var bananaImg, obstacle, obstacleImg
var FoodGroup, obstacleGroup
var survivaltime = 0
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg      = loadImage("banana.png");
  obstacleImg    = loadImage("obstacle.png");
  
  
  
}



function setup() {
  createCanvas(400,400)
  
  monkey        = createSprite(200,150,20,20)
  monkey        . addAnimation("S",monkey_running)
  monkey        . scale = 0.1
  
  ground        = createSprite(200,220,400,20);
  ground.x      = ground.width /2;
  
  FoodGroup     = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
 background("white")
  
 stroke("white");
 textSize(20);
 fill("white");
 text("score: " + score,500,50);
  
 stroke("black")
 textSize(20)
 fill("black")
 survivalTime = Math.ceil(frameCount/frameRate())
 text("Survival Time: " + survivalTime,100,50);
  
  if(keyDown("space")) {
     monkey.velocityY = -5;     }   
    
 monkey.velocityY = monkey.velocityY + 0.1
 monkey.collide(ground)
  
 drawSprites();
 Spawnbanana();
}

function Spawnbanana(){
if(frameCount % 80 == 0){
 var banana    = createSprite(400,200,20,20)
     banana.y  = Math.round(random(120,200))
     banana    . addImage(bananaImg)
     banana    . velocityX = -2
     banana    . scale= 0.1
     banana    . lifetime = 200
  FoodGroup    . add(banana)

  }
}

function spawnObstacles(){
if (frameCount % 300 === 0){
 var obstacle  = createSprite(600,165,10,40);
     obstacle  . addImage(obstaleImg)
     obstacle  . velocityX = -2
     obstacle  . scale = 0.5;
     obstacle  . lifetime = 300;
obstaclesGroup . add(obstacle);
 }
}
