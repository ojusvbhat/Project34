const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var bgImg;
var Player,Player_img;
var mangoImg;
var mango,mango2,mango3,mango4,mango5;
var rock,rock_img;

function preload() {
bgImg = loadImage("./Images/bg.png");
Player_img = loadImage("./Images/player.png");
mangoImg = loadImage("./Images/mango.png");
rock_img = loadImage("./Images/rock.png");
}
function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  engine = Engine.create();
  world = engine.world;

  Player = Bodies.rectangle(500,730,20,20,{isStatic:true});
  World.add(world,Player);

  mango = new Mango(180,600,30,30);
  mango2 = new Mango(570,510,30,30);
  mango3 = new Mango(340,585,30,30);
  mango4 = new Mango(710,580,30,30);
  mango5= new Mango(860,595,30,30);

  rock = Bodies.rectangle(460,670,10,10,{isStatic:true});
  World.add(world,rock)
  

}


function draw() 
{
  background(bgImg);
  Engine.update(engine);
  
  rect(Player.position.x,Player.position.y,10,10);

  push();
  imageMode(CENTER);
  image(Player_img,Player.position.x,Player.position.y,97,138);
  image(rock_img,rock.position.x,rock.position.y,30,30);
  pop();
  
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

 if(keyIsDown(RIGHT_ARROW)){
  Player.position.x +=5;
  rock.position.x +=5;
 }

 if(keyIsDown(LEFT_ARROW)){
  Player.position.x -=5;
  rock.position.x -=5;
 }

 if(keyIsDown(UP_ARROW)){
  Matter.Body.setVelocity(rock,{x:0,y:-10});
 }


}

