const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;
var box2;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  box1 = new Box(200,100,50,50);
  console.log(box1);

  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  
  box1.display();
  
  //drawSprites();
}