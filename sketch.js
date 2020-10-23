
var box1;
var polygon;
function setup() {
  createCanvas(800,400);
  
  //level1
  box1=createSprite(330,235,30,40);
  box2=createSprite(360,235,30,40);
  box3=createSprite(390,235,30,40);
  box4=createSprite(420,235,30,40);
  box5=createSprite(450,235,30,40);
  //level2;
  box6=createSprite(360,195,30,40);
  box7=createSprite(390,195,30,40);
  box8=createSprite(420,195,30,40);
 
  //level3
  box9=createSprite(390,155,30,40);
 
   polygon=new Polygon(20,20,20,20);
  
}

function draw() {
  background(0);  
  drawSprites();
}