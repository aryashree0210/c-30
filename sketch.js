
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground();
  stand1=new stand(390,300,250,10);
  stand2=new stand(700,200,200,10);


block1=new Block(500,360,20,30);
console.log(block1);
block2=new Block(520,360,20,30);
block3=new Block(540,360,20,30);
block4=new Block(560,360,20,30);
block5=new Block(580,360,20,30);
block6=new Block(600,360,20,30);


block7=new Block(510,330,20,30);
block8=new Block(530,330,20,30);
block9=new Block(550,330,20,30);
block10=new Block(570,330,20,30);
block11=new Block(590,330, 20,30);

block12=new Block(520,310,20,30);
block13=new Block(540,310,20,30);
block14=new Block(560,310,20,30);
block15=new Block(580,310,20,30);
 
block16=new Block(530,280,20,30);
block17=new Block(550,280,20,30);
block18=new Block(570,280,20,30);

block19=new Block(540,250,20,30);
block20=new Block(560,250,20,30);

block21=new Block(550,220,20,30);

block22=new Block(500,1353,20,30);
block23=new Block(520,135,20,30);
block24=new Block(540,135,20,30);
block25=new Block(560,135,20,30);
block26=new Block(580,135,20,30);
block27=new Block(600,135,20,30);

block28=new Block(510,105,20,30);
block29=new Block(530,105,20,30);
block30=new Block(550,105,20,30);
block31=new Block(570,105,20,30);
block32=new Block(590,105,20,30);

block33=new Block(520,75,20,30);
block34=new Block(540,75,20,30);
block35=new Block(560,75,20,30);
block36=new Block(580,75,20,30);

block37=new Block(530,45,20,30);
block38=new Block(550,45,20,30);
block39=new Block(570,45,20,30);
// ball holder with slings
ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingShot=new slingshot (this.ball,{x:100,y:200});
}

function draw() {
  background(56,44,44);  
  //Engine.update(engine);
  //text(mouseX+','+mouseY,10,15);
  textSize(20);
  fill("lightyellow");
  text("drag the hexagonal stone and release it,to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  

  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  fill("turquoise");
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  block17.display();
  block18.display();
  fill("skyblue");
  block19.display();
  block20.display();
  
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  fill("pink");
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  
  fill("gold");
  block37.display();
  block38.display();
  block39.display();
imageMode(CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40);

slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}