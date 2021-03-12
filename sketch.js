const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop1
var maxDrops=200;
var engine, world;
var drops=[] 
var boy;
function preload(){
   
}

function setup(){
    createCanvas(500,700);
  
    engine = Engine.create();
    world = engine.world;
   
for(var i=0;i<maxDrops;i++){

    drops.push(new Drop(random(0,500),random(0,700),random(12,15)))
}

//boy=new Umbrella(550,450)
}


function draw(){
    Engine.update(engine)
    background("black")
//    boy.display(); 
    for(var i=0;i<maxDrops;i++){

        drops[i].display();
        drops[i].update();
    }   

    
    } 