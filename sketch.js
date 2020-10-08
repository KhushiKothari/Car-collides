var car, wall ;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = color(255);

  wall = createSprite(1200, 200, 40, 200);
  wall.shapeColor = (80, 80, 80);
  //wall.visible = true;

 
  
  
}

function draw() {
  background("pink");  
  
  wall.depth = car.depth;
  car.depth = car.depth + 3;
  
  if (wall.x-car.x < (car.width+wall.width/2)) {
 car.velocityX = 0;
 var deformation = 0.5 * weight * speed * speed/22509;

 //deformation = random(0, 200);

if (deformation>180) {
car.shapeColor = color(255, 0,0);
}


else if (deformation<180 && deformation>100) {
car.shapeColor = color(230, 230, 0);
}

else if (deformation<100 && deformation>0) {
car.shapeColor = color(0, 255, 0);
}
}
console.log("speed is : " + speed);
console.log("Weight is; " + weight);
  drawSprites();
}