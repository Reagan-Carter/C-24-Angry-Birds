class pig{

    constructor(x,y){
    
     var options={
    
     restitution: 0.5
    
     }   
    this.body=Bodies.rectangle(x,y,50,50,options)
    World.add(MyWorld,this.body);
    this.width=50;
    this.height=50;
    
    
    
    }
    
    display(){
    push()
    fill("red");

    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
       pop()
    }
    
    }