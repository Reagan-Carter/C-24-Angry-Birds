const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var MyEngine,MyWorld

var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var ground1;
var bird1;
function setup() {
  createCanvas(1200,400);
MyEngine= Engine.create()
MyWorld= MyEngine.world;

box1=new box(700,350,70,70);
box2=new box(900,350,70,70);
box3=new box(700,250,70,70);
box4=new box(900,250,70,70);
box5=new box(800,100,70,70);

pig1= new pig(800,350);
pig2=new pig(800,250);

log1=new log(800,250,300,PI/2)
log2=new log(800,150,300,PI/2)
log3=new log(750,100,150,PI/3)
log4=new log(820,100,120,-PI/3)

bird1=new bird(500,200)

ground1=new ground(600,390,1200,20);
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();

  ground1.display();
}