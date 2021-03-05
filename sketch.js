const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var object;
var box;

var object1;
function setup() {
  var canvas = createCanvas(400,400);
   engine = Engine.create();
    world = engine.world; 
    var object_options ={ 
      isStatic: true
     }
object= Bodies.rectangle(200,390,200,20,object_options);
   World.add(world,object);
  console.log(object);
  var objectbox={
    restitution:0.8,
    density:0.5
    
  }
  box=Bodies.rectangle(200,100,50,50,objectbox);
  World.add(world,box);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,20);
  rectMode(CENTER); 
  rect(box.position.x,box.position.y,50,50);
}
