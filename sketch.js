const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");

}

function setup() {
	createCanvas(1280, 400);
	
	engine = Engine.create();
	world = engine.world;

	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	m1 = new mango(900,150,8);
	m2 = new mango(950,120,10);
	m3 = new mango(1000,100,7);
	m4 = new mango(950,60,9);
	m5 = new mango(1050,60,6);
	m6 = new mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
		
	  }

	rectMode(CENTER);
	background("white")
    push();
    rect(width/2,370,width,10);
	chain.display();
    drawSprites();
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);
	strokeWeight(10);
	stroke(255);
	textSize(20);
    fill(0);
	text('Press space to pluck the mangoes again!!', 205, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	
	}
}