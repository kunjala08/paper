class dustbin{
    constructor(x,y,width,height){
    var option={
        isStatic:true,
        density:0.2,
    }
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,option)
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
    
      //  fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
        image.height = 100
        this.image.width = 29
        pop();



    }
}