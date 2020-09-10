const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,380,200,40,ground_options);
    World.add(world,ground);
     var option = {
     restitution:0.5


}
ball = Bodies.circle(100,100,20,option);
World.add(world,ball);

ball2 = Bodies.circle(100,200,30,option);
World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,40);

    ellipseMode(RADIUS);
    fill ("orange");
    ellipse(ball.position.x,ball.position.y,20,20);

    ellipseMode(RADIUS);
    fill("blue");
    ellipse(ball2.position.x,ball2.position.y,15,15);

}