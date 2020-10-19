class log{

    constructor(x,y,height,angle){
    
     var options={
    
     restitution: 0.5,
     friction:1
    
     }   
    this.body=Bodies.rectangle(x,y,20,height,options)
    Matter.Body.setAngle(this.body,angle);
    World.add(MyWorld,this.body);
    this.width=20;
    this.height=height;
    
    
    
    }
    
    display(){
    push()
    fill("white");
    stroke("green");
    strokeWeight(5);
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
       pop()
    }
    
    }