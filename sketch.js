const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone, iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,50)

    hammer = new Hammer(10,100);

    rubber = new Rubber(700,450,65);

    stone = new Stone(200,500);

    iron = new Iron(500,300);
}

function draw(){
    
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display()
 
}