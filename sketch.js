
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var tree_obj,stone_obj,ground_obj;
var boy_obj;
var mango_obj;

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	
	boy_obj=new Boy(200,320,0,0);
	stone_obj=new Stone(130,260,0,0);
	ground_obj=new Ground(600,390,1200,50);
	tree_obj=new Tree(1000,200,0,0);
	mango_obj=new Mango(1000,100);

  
	Engine.run(engine);

}


function draw() {
	
	background("yellow");
	Engine.update(engine);
boy_obj.display();
stone_obj.display();
ground_obj.display();
tree_obj.display();
mango_obj.display();
 
  drawSprites();
}