class Log{
    constructor(x,y,height,width){
        var options={
            restitution:1.0,
            friction:1.0,
            density:1.0,
            isStatic:true        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        //Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        //push()
        
       // translate(pos.x,pos.y)
        //rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        //stroke("white")
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
       // pop()
    }
}

    
    
