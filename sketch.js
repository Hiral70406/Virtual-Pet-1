//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock


function preload()
{
  dogImg=loadImage('images/dogImg.png');
  happyDog=loadImage('images/dogImg1.png');
	//load images here
}

function setup() {
  database=firebase.database()
 console.log(database);
	createCanvas(500, 500);

  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg)
  dog.scale=0.3


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
    
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  
}
  drawSprites();

  stroke("black");
    textSize(25);
    fill("blue")

    text ("Food Stock  " + foodS, 170,400);
    
    textSize(13);
    text("Press UP ARROW to feed", 60,10, 320, 50);
    

 //add styles here
}

function readStock(data){
  foodS=data.val();
  }

  function writeStock(x){

    if(x<=0){
      x=0
    }
    else {
    x=x-1
    }

    database.ref('/').update({
      Food:x
    })
  }



