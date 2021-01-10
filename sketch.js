
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
	ball=new paper(50,605,25);
	bin1=new dustbin(590,595,14,70)
	bin2=new dustbin(700,595,14,70);
	bin3=new dustbin(644,623,97,14)
	//var option1={
	//	isStatic:true,
	//}
	ground1=new Ground(500,640,1900,20);
    World.add(world,ground1);
	console.log(bin1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
 keyPressed();
  bin1.display();
  bin2.display();
  bin3.display();
 ground1.display();
 // drawSprites();
 
}
function keyPressed(){
 if(keyCode === UP_ARROW){
   console.log("line 52 reached")
   Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
 }

}


