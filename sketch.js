
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustBinObj, paperObj, groundObj;
var world;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
	dustBinObj = new DustBin(1000,450);
	paperObj = new Paper(200, 450, 40);
	groundObj = new Ground(width/2, 470, width, 20);

	//Render the objects
	var render = Render.create ({
		element: document.body,
		engine: engine,
		options: {
			width: 1000,
			height: 450,
			wireframes: false
		}
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustBinObj.display();
	paperObj.display();
	groundObj.display();

	drawSprites();
}

//Apply force when key pressed
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:95,y:-95});
	}
}




