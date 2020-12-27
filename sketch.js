
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
	createCanvas(800, 700);
	
	//ground=createSprite(400,640,800,20);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new paper(50,605,25);
	bin1=new dustbin(480,589,14,80)
	bin2=new dustbin(590,589,14,80);
	bin3=new dustbin(534,623,97,14)
	var option1={
		isStatic:true,
	}
	ground1=Bodies.rectangle(400,640,800,20,option1);
    World.add(world,ground1);
	console.log(bin1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
 // keypressed();
  bin1.display();
  bin2.display();
  bin3.display();
 // ground1.display();
 // drawSprites();
 
}
function keypressed(){
 if(keyCode === 32){
   console.log("line 52 reached")
	Matter.Body.applyForce(paperBodies.body,paperObject.body.position,{x:85,y:-85})
 }

}


