
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform1,platform2,platform3;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,
block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,
block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43,block44,block45,block46,
block47;

var ball,slingShot,polygon_img;

function preload()
{
    polygon_img=loadImage("polygon.png");
}

function setup()
{
    createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    ground = new Ground(600,480,1500,20);
    platform1 = new Ground(380, 300, 280, 10);
    platform2 = new Ground(700,250,240,10);
    platform3 = new Ground(1000,350,280,10);

    block1 = new Block(260,275,40,40);
    block2 = new Block(300,275,40,40);
    block3 = new Block(340,275,40,40);
    block4 = new Block(380,275,40,40);
    block5 = new Block(420,275,40,40);
    block6 = new Block(460,275,40,40);
    block7 = new Block(500,275,40,40);

    block8 = new Block(280,235,40,40);
    block9 = new Block(320,235,40,40);
    block10 = new Block(360,235,40,40);
    block11 = new Block(400,235,40,40);
    block12 = new Block(440,235,40,40);
    block13 = new Block(480,235,40,40);

    block14 = new Block(300,195,40,40);
    block15 = new Block(340,195,40,40);
    block16 = new Block(380,195,40,40);
    block17 = new Block(420,195,40,40);
    block18 = new Block(460,195,40,40);

    block19 = new Block(320,155,40,40);
    block20 = new Block(360,155,40,40);
    block21 = new Block(400,155,40,40);
    block22 = new Block(440,155,40,40);

    block23 = new Block(340,115,40,40);
    block24 = new Block(380,115,40,40);
    block25 = new Block(420,115,40,40);

    block26 = new Block(380,75,40,40);

    block27 = new Block(600,225,40,40);
    block28 = new Block(640,225,40,40);
    block29 = new Block(680,225,40,40);
    block30 = new Block(720,225,40,40);
    block31 = new Block(760,225,40,40);
    block32 = new Block(800,225,40,40);

    block33 = new Block(620,185,40,40);
    block34 = new Block(660,185,40,40);
    block35 = new Block(700,185,40,40);
    block36 = new Block(740,185,40,40);
    block37 = new Block(780,185,40,40);

    block38 = new Block(640,145,40,40);
    block39 = new Block(680,145,40,40);
    block40 = new Block(720,145,40,40);
    block41 = new Block(760,145,40,40);

    block42 = new Block(660,105,40,40);
    block43 = new Block(700,105,40,40);
    block44 = new Block(740,105,40,40);

    block45 = new Block(680,65,40,40);
    block46 = new Block(720,65,40,40);

    block47 = new Block(700,25,40,40);

    block48 = new Block(880,330,40,40);
    block49 = new Block(920,320,40,40);
    block50 = new Block(960,320,40,40);
    block51 = new Block(1000,320,40,40);
    block52 = new Block(1040,320,40,40);
    block53 = new Block(1080,320,40,40);
    block54 = new Block(1120,320,40,40);

    block55 = new Block(900,295,40,40);
    block56 = new Block(940,295,40,40);
    block57 = new Block(980,295,40,40);
    block58 = new Block(1020,295,40,40);
    block59 = new Block(1060,295,40,40);
    block60 = new Block(1100,295,40,40);

    block61 = new Block(920,250,40,40);
    block62 = new Block(960,250,40,40);
    block63 = new Block(1000,250,40,40);
    block64 = new Block(1040,250,40,40);
    block65 = new Block(1080,250,40,40);

    block66 = new Block(940,225,40,40);
    block67 = new Block(980,225,40,40);
    block68 = new Block(1020,225,40,40);
    block69 = new Block(1060,225,40,40);

    block70 = new Block(960,200,40,40);
    block71 = new Block(1000,200,40,40);
    block72 = new Block(1040,200,40,40);

    block73 = new Block(1000,175,40,40);
           
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:90,y:300});
       
}

function draw()
{
    background(0);
    Engine.update(engine);
   
    fill("white");
    textSize(15);
    text("DRAG THE HEXAGONAL STONE  AND RELEASE IT ,TO HIT THE BLOCKS",10,30);
    
    fill("white");
    stroke ("black");
    strokeWeight(3);
    ground.display();
    platform1.display();
    platform2.display();
    platform3.display();
    
    fill(218,201,255);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill (172,246,248);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    fill(193,249,194);
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    fill(253,242,166);
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill(254,208,156);
    block23.display();
    block24.display();
    block25.display();

    fill(254,192,216);
    block26.display();

    fill(218,201,255);
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    fill (172,246,248);
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();

    fill(193,249,194);
    block38.display();
    block39.display();
    block40.display();
    block41.display();

    fill(253,242,166);
    block42.display();
    block43.display();
    block44.display();

    fill(254,208,156);
    block45.display();
    block46.display();

    fill(254,192,216);
    block47.display();

    fill(218,201,255);
    block48.display();
    block49.display();
    block50.display();
    block51.display();
    block52.display();
    block53.display();
    block54.display();

    fill (172,246,248);
    block55.display();
    block56.display();
    block57.display();
    block58.display();
    block59.display();
    block60.display();

    fill(193,249,194);
    block61.display();
    block62.display();
    block63.display();
    block64.display();
    block65.display();

    fill(253,242,166);
    block66.display();
    block67.display();
    block68.display();
    block69.display();

    fill(254,208,156);
    block70.display();
    block71.display();
    block72.display();
    
    fill(254,192,216);
    block73.display();
    
    fill("white");
    
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    
    slingShot.display();

}
function mouseDragged()
{
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}
