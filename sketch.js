var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

 bullet = createSprite(400, 200, 10, 20);
 bullet.shapeColor = color("white");
 bullet.velocityX = speed;

 thickness = random(22,83);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
}
function draw() {
  background(0);  

  if (bullet.isTouching(wall)){
  bullet.velocityX = 0;
  }

  damage = (0.5*speed*weight*speed)/(thickness*thickness*thickness);

 if (damage>10){
 wall.shapeColor = color("red");
}
 else if (damage<10){
 wall.shapeColor = color("green");
 }
  drawSprites();
}