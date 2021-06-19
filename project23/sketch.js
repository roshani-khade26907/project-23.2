const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase;
var playerBase;
var player;
var computerPlayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  // Player Base and Computer Base Object
  computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
  playerBase = new PlayerBase(300,random(450, height - 300),180,150);
  player=new Player(285,playerBase.body.position.y-153,50,180);
  computerPlayer=new Player(width-300,computerBase.body.position.y-153,50,180);
 }

function draw() {

  background("yellow");

  Engine.update(engine);

  // Title
  fill("violet");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   player.display();
   
   //display Player and computerplayer
   computerBase.display();
   computerPlayer.display();

}
