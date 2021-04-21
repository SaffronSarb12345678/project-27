
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var myengine,myworld;
var chain,chain2,chain3,chain4,chain5
var ball1,ball2,ball3,ball4,ball5
var log1


function setup() {
	createCanvas(800, 700);
	myengine=Engine.create();
	myworld=myengine.world;
  


	//Create the Bodies Here.
log1 = new log(400,100,800,20)
ball1 = new ball(100,150,50)
ball2 = new ball(200,150,50)
ball3 = new ball(300,150,50)
ball4 = new ball(400,150,50)
ball5 = new ball(500,150,50)
chain = new rope(ball1.body,{x:100,y:100})
chain2 = new rope(ball2.body,{x:200,y:100})
chain3 = new rope(ball3.body,{x:300,y:100})
chain4 = new rope(ball4.body,{x:400,y:100})
chain5 = new rope(ball5.body,{x:500,y:100})


	Engine.run(myengine);
  
}


function draw() {

  background("white");
  rectMode(CENTER);
  Engine.update(myengine)

if(keyDown("up_arrow")){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-20})
}

  log1.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   chain.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();
}







