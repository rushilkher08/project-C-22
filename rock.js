class Rock{

    constructor(x,y){
    
        var options = {
            restitution: 0.5,
            friction: 2,
            density: 12
        }
    
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 80
        this.height = 70
        World.add(myworld,this.body);
    
    }
    
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
    
        fill("grey");
        rect(0,0,this.width,this.height);

        pop();
    }
    
    }