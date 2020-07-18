class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50); 
        this.img=loadImage("sprites/bird.png");
    }
    display(){
        super.display();
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;

    }

}
