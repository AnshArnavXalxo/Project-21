
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
		}	
}

function setup() {
	createCanvas(2000, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		
		friction:10000,
		density:1.2
	}

	//Create the Bodies Here.
    ball=Bodies.circle(200,10,20,ball_options)
    World.add(world,ball);
	ground=new Ground(width/2,670,width,20);
    leftSide=new Ground(850,600,20,120);
	rightSide=new Ground(1200,600,20,120);
	Engine.run(engine);

	fill ("yellow");
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-85});
	}
}


