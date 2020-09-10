class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:2
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        strokeWeight(2);
        fill("white");
        line(posA.x,posA.y,pointB.x,pointB.y);
        }
    }
}