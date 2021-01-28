class Hammer{

    constructor(x,y){
    
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 2
        }
    
        this.body = Bodies.rectangle(x,y,20,100,options)
        this.width = 20
        this.height = 100
        World.add(myworld,this.body);
    
    }
    
    display(){
    
        var pos = this.body.position
        var angle = this.body.angle
    
        pos.x = mouseX
        pos.y = mouseY

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)    
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    }