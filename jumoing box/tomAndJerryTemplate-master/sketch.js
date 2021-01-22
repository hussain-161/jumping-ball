
var tom1
var tom1Image
var Garden
var GardenImage
var tom1,tom2,tom3,tom4
//var tomOne
//var tomOneImage

function preload(){
  tom1Image=loadImage("images/tomOne.png")
  GardenImage=loadImage("images/garden.png")
  tom2=loadImage("images/tomtow.png")
  }

function setup() {
  var canvas=createCanvas(800,600); 
  tom=createSprite(700, 200, 50, 50);
  tom.addImage("tom1",tom1Image)
  //tom1.velocityX=-3
  tom.scale=0.1

  //Garden=createSprite(400, 300,500,200);
 //Garden.addImage("Garden",GardenImage)
}


function draw() {
  background(GardenImage);  
  
  if(tom.x - jerry.x < (tom.width - jerry.width)/2) { tom.velocityX=0; tom.addAnimation("tomLastImage", tomImg3); tom.x =300; tom.scale=0.2; tom.changeAnimation("tomLastImage"); jerry.addAnimation("jerryLastImage", jerryImg3); jerry.scale=0.15; jerry.changeAnimation("jerryLastImage"); }
  drawSprites();
}
function keyPressed(){
if (keyCode === LEFT_ARROW){
tomOne.velocityX =-5
tomOne.addImage("tomOne",tomOneImage)

}

}
