class Block{
    constructor(x,y){
      var options ={
          isStatic:false
      }
      this.body=Bodies.rectangle(x,y,30,45,options);
      this.height=45;
      this.width=30;
      this.Visibility=255;
      World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
        var pos=this.body.position;
        fill(rgb(random(10,235),random(20,245),random(30,255)))
        rectMode(CENTER);
        rect(pos.x,pos.y,30,45);
        }
        else{
            var pos=this.body.position;
            World.remove(world,this.body);
            push();
            this.Visibilty=this.Visibility-5;
            tint(255,this.Visibility);
            //rect(pos.x,pos.y,30,45);
            pop();
        }
    }
}