const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

function setup() {
  createCanvas(1800,600);

  engine = Engine.create();
  world = engine.world;

  platform=new Stand(900,400,350,20);
  block1=new Block(750,370);
  block2=new Block(780,370);
  block3=new Block(810,370);
  block4=new Block(840,370);
  block5=new Block(870,370);
  block6=new Block(900,370);
  block7=new Block(930,370);
  block8=new Block(960,370);
  block9=new Block(990,370);
  block10=new Block(1020,370);
  block11=new Block(1050,370);
  
  block12=new Block(780,325);
  block13=new Block(810,325);
  block14=new Block(840,325);
  block15=new Block(870,325);
  block16=new Block(900,325);
  block17=new Block(930,325);
  block18=new Block(960,325);
  block19=new Block(990,325);
  block20=new Block(1020,325);

  block21=new Block(810,280);
  block22=new Block(840,280);
  block23=new Block(870,280);
  block24=new Block(900,280);
  block25=new Block(930,280);
  block26=new Block(960,280);
  block27=new Block(990,280);

  block28=new Block(840,235);
  block29=new Block(870,235);
  block30=new Block(900,235);
  block31=new Block(930,235);
  block32=new Block(960,235);

  block33=new Block(870,190);
  block34=new Block(900,190);
  block35=new Block(930,190);

  block36=new Block(900,145);

  platform2=new Stand(1500,300,230,20);
  block37=new Block(1410,270);
  block38=new Block(1440,270);
  block39=new Block(1470,270);
  block40=new Block(1500,270);
  block41=new Block(1530,270);
  block42=new Block(1560,270);
  block43=new Block(1590,270);

  block44=new Block(1440,225);
  block45=new Block(1470,225);
  block46=new Block(1500,225);
  block47=new Block(1530,225);
  block48=new Block(1560,225);

  block49=new Block(1470,180);
  block50=new Block(1500,180);
  block51=new Block(1530,180);

  block52=new Block(1500,135);
  
  var pol_options={
    isStatic:false
  }
  polygon=Bodies.polygon(250,300,40,40,pol_options);
  World.add(world,polygon);
  polyimg=loadImage("polygon.png");


  slingshot=new Sling(polygon,{x:250,y:300});
}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();

  platform2.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  slingshot.display();

  imageMode(CENTER);
  image(polyimg,polygon.position.x,polygon.position.y,60,60);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
  slingshot.attach(this.polygon);
  }
}