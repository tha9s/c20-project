var speed,weight;
var car,wall;
var deformation;


function setup() {
  createCanvas(400,400);
  speed = Math.round(random(40,99));
  weight = Math.round(random(400,1500))
  car = createSprite(50,200,50,50);
  wall = createSprite(340,200,60,height/2);
  car.velocityX = speed

}

function draw() {
  background("red");
 

 if (wall.x-car.x < (car.width+wall.width)/2) {
car.velocityX = 0;
deformation = 0.5*weight*speed*speed/22500
if (deformation>180) {
 car.shapeColor = color(255,0,0);
}
if(deformation>100&&deformation<180) {
  car.shapeColor =  color(230,230,0)
}
if (deformation>180) {
  car.shapeColor = color(0,255,0)
}


 }

  drawSprites();
}

