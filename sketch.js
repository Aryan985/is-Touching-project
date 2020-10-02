var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(500, 200, 50, 60);
 movingRect=createSprite(300, 100, 70, 60);
}

function draw() {
  background("yellow");
  
  movingRect.x = mouseX
  movingRect.y = mouseY

  if (isTouching()){
movingRect.shapeColor=("green")
fixedRect.shapeColor=("green")

  } else {
    movingRect.shapeColor=("white")
    fixedRect.shapeColor=("white")

  }

  
  drawSprites();
}

function isTouching(){

if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2&&
  movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 ){
return true;

  }else{
    return false;

  }

}



