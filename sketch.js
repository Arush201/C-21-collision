var fixedRect, movingRect;
var rect1  ,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);

  movingRect = createSprite(400,200,80,30);

  rect1 = createSprite(500,300,50,50)
  rect2 = createSprite(500,400,50,50)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  rect1.shapeColor = "green"
  rect2.shapeColor = "green"
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  if(isTouching(movingRect , fixedRect)){
      movingRect.shapeColor = "red"
      fixedRect.shapeColor = "red"
  }

  if(isTouching(rect2 , movingRect)){
   rect2.shapeColor = "red"
   movingRect.shapeColor = "red"
  } 
  if(isTouching(rect1 , movingRect)){
    movingRect.shapeColor = "red"
    rect1.shapeColor = "red"
  }
  
  drawSprites();

  }

