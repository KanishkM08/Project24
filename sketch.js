
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paperBall = new Paper(200, 550, 20);
	dustbinWall1 = new Dustbin(515, 640, 20, 100);
	dustbinWall2 = new Dustbin(685, 640, 20, 100);
	dustbinWall3 = new Dustbin(600, 680, 150, 20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();  
  dustbinWall1.display();
  dustbinWall2.display();
  dustbinWall3.display();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:15, y:-12});
	}
}

