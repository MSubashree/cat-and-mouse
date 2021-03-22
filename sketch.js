var tom,tomImg;
var garden,gardenImg;
var jerry,jerryImg;
var tomImg2, tomImg4;
function preload() {
    //load the images here
   gardenImg = loadImage("images/garden.png");
   jerryImg2=loadImage("images/mouse2.png");
   //jerryImg1=loadImage("images/mouse1.png");
   //jerryImg3=loadImage("images/mouse3.png");
   //jerryImg4=loadImage("images/mouse4.png");
  //tomImg = loadImage("images/cat1.png");
  tomImg2=loadImage("images/cat2.png");
  //tomImg3=loadImage("images/cat3.png");
  tomImg4=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites

    garden = createSprite(300,300,800,800);
    garden.addImage(gardenImg);
    //garden.scale=2.5;

    tom=createSprite(600,500,15,15);
     tom.addImage(tomImg4);
     tom.scale=0.1;

     jerry=createSprite(200,500,20,20);
     jerry.addImage(jerryImg);
     jerry.scale=0.1;
}

function draw() {
    background(0);

    
    


    
    drawSprites();
    
  
}


function keyPressed(){
 //For moving and changing animation write code here
if(keycode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addImage("catRunning",tomImg2);
  cat.changeImage("catRunning");
}
if().x)
}
