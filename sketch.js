
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,ground,paper
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bin1=new Dustbin(650,635,20,70)
bin2=new Dustbin(605,660,70,20)
bin3=new Dustbin(570,635,20,70)
ground=new Ground (350,680,700,20)
paper=new Paper(100,500,30)

	
  
}


function draw() {
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
  paper.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-21})
	}
}



