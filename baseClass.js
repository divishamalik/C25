class BaseClass{
    constructor(x,y,width,height,angle){
        var options={
            'density': 1.2,
            'friction' :1,
            'restitution':0.6
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.img=loadImage("sprites/base.png");
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
        push();
        translate(p.x,p.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
    }
}