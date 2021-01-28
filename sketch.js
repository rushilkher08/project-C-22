const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myworld,myengine
var hammer
var rubber
var ground,ground2
var rock
var sand
var rock

function preload()
{
	
}                                                                                                                                                                                                           

function setup() {
	createCanvas(800, 700);
	myengine = Engine.create();
  myworld = myengine.world
  
  ground2 = new Ground(400,500,900,20);
  rubber = new Rubber(400,300);
  rock = new Rock(300,100);
  iron = new Iron(650,50);
  
  sand  = new Sand(600,300);
  sand2 = new Sand(600,340);
  sand3 = new Sand(670,320);
  sand4 = new Sand(620,360);
  sand5 = new Sand(610,370);
  sand6 = new Sand(690,400);

  hammer = new Hammer(400,350);
    		
}

function draw() {
 
  background("lightblue");
  Engine.update(myengine)

  
 
  rubber.display()
  ground2.display()
  rock.display()
  sand.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  iron.display()

  hammer.display()
}



