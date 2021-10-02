const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var particles = []
var plinko = []
var division = []
var divisionHeight = 300




function setup() {
  engine = Engine.create();
  world = engine.world
  createCanvas(600,850);

  

  g1 = new Ground(300,795,560,30);

  g2 = new Ground2(300,840,600,20);
  g3 = new Ground2(300,10,600,20);
  g4 = new Ground2(10,425,20,850);
  g5 = new Ground2(590,425,20,850);
  


  for(var k = 30; k<=600; k = k + 77){
    division.push(new Division(k,810-divisionHeight/2,10,divisionHeight))
    
  }
  for(var l = 85; l<= 520; l = l + 50){
    plinko.push(new Plinko(l,100,10));
  }

  for(var l = 65; l<= 535; l = l + 50){
    plinko.push(new Plinko(l,200,10));
  }

  for(var l = 85; l<= 520; l = l + 50){
    plinko.push(new Plinko(l,300,10));
  }

  for(var l = 65; l<= 535; l = l + 50){
    plinko.push(new Plinko(l,400,10));
  }
 
  
  

}

function draw() {
  rectMode(CENTER)
  background(0,0,0);  
  Engine.update(engine)

  if(frameCount%60 === 0){
    particles.push(new Particle(random(82,520),25,15));
    
  }
  
  

  g1.display();

  g2.display();
  g3.display();
  g4.display();
  g5.display();

  for (var j = 0; j< particles.length; j++){
    particles[j].display();
  }
   

console.log(plinko)

  for(var i = 0; i<8; i = i + 1){
    division[i].display();
  }
  
  for(var n = 0; n<37 ; n = n+1){
    plinko[n].display();
  }

  

 
  
  
  
  
}


