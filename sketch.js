var ship , sea , shipImg , seaImg ;


function preload(){

  //loading the images 

  seaImg= loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png")
}


function setup(){
  createCanvas(400,400);

//creating ship sprite and giving velocity 


sea = createSprite(400,200);
sea.addImage(seaImg)
sea.scale = 0.6
sea.velocityX = -5


//ship sprite and velocity

ship = createSprite(170,300,30,30);
   ship.addAnimation("movingShip",shipImg)
  ship.scale = 0.25
  
  



}


function draw() {


  ship.frameDelay =  20

// repeating background 

  sea.velocityX = -5

  if (sea.x>0){

  sea.x = sea.width/8;

  }

 drawSprites()

}