class Dustbin{
    constructor(x,y,width,length){
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,length,options)
    this.width=width;
    this.length=length;
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.length)
    }
    }
    