class box{

constructor(x,y,width,height){

 var options={

 restitution: 0.5,
 friction:1

 }   
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(MyWorld,this.body);
this.width=width;
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