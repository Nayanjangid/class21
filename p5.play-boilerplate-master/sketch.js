var frect,mrect;
var box1,box2;
function setup() {
  createCanvas(800,800);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor="green";
  mrect=createSprite(600,200,50,50);
  mrect.shapeColor="green";
  frect.velocityX=2;
  mrect.velocityX=-2;
  box1=createSprite(200,300,100,100);
  box2=createSprite(200,600,100,100);
  box1.velocityY=2;
  box2.velocityY=-2;
}

function draw() {
  background(255,255,255); 
 // mrect.x=mouseX;
  //mrect.y=mouseY;
 if(istouching(box1,box2)){
   box1.shapeColor="red";
   box2.shapeColor="red";
 }
  else{
    box1.shapeColor="green";
   box2.shapeColor="green";
  }
  bounceoff(mrect,frect);
  drawSprites();
}

  