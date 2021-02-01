var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bg,bgIMG;
var packageBody,ground,boxSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	boxSound=loadSound("zapsplat_foley_balloon_pop_20568.mp3")
	bgIMG=loadImage("EBmySIO.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bg=createSprite(width/2, 200, 10,10);
	bg.addImage(bgIMG)
	bg.scale=0.6

	packageSprite=createSprite(80, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	log1=new Log(280,515,300,10)
	log2=new Log(550,515,300,10)
	log3=new Log(420,655,10,270)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();

  log1.display()
  log2.display()
  log3.display()
 // text(mouseX+','+mouseY,mouseX,mouseY)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    boxSound.play();
  }
}



