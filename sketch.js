var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(1000,600,100,100);
  
  wall = createSprite(1000,200,150,50);

  car.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect, fixedRect);


  //isTouching(car, wall);

  bounceOff(car, wall);

  
  drawSprites();
}

function isTouching (obj1, obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  obj1.shapeColor = "red";
  obj2.shapeColor = "red";
}
  else
  {
  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
  }
}


function bounceOff(obj1, obj2)
{
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) 
  {
    obj1.velocityX = -1 * obj1.velocityX; 
  }
  else if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2)
  {
    obj1.velocityY = -1 * obj1.velocityY;
  }
}