const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car,ground1,ground2;
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
car=new Box(50,150,20,20);
ground1=new Ground(50,160,100,PI/2);
ground2=new Ground(141,123,100,PI/4);


   
}

function draw(){
    background(0);
    
    
    Engine.update(engine);
   car.display();
   ground1.display();
   ground2.display();
}






