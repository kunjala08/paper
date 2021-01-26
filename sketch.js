
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var bin1,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(1900, 700);
	
	//ground=createSprite(400,640,800,20);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new paper(100,499,60,50);
	ground1=new Ground(500,640,1900,20);
	bin3=new dustbin(1354,1025,97,1004)
	console.log(bin1)
	
    World.add(world,ground1);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ball.display();
  ground1.display();
  bin3.display();
 
}
function keyPressed(){
 if(keyCode === UP_ARROW){
   //console.log("line 52 reached")
   Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
 }

}


