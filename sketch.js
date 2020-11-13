var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600,400,50,80);
  fixedrect.shapeColor = 'white';
  movingrect = createSprite(400,200,50,80);
  movingrect.shapeColor = 'white';
  
}
function draw() {
  background(0); 
  movingrect.x = World.mouseX ;
  movingrect.y = World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  console.log(fixedrect.width/2+movingrect.width/2);
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y - movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor = 'grey';
    fixedrect.shapeColor = 'grey';
  }
  else{
    movingrect.shapeColor = 'white';
    fixedrect.shapeColor = 'white';
  }
  drawSprites();
}