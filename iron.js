class Iron{

    constructor(x,y){
    
        var options = {
            restitution: 0.3,
            friction: 2,
            density: 1
        }
    
        this.body = Bodies.rectangle(x,y,50,50,options)
        this.width = 60
        this.height = 50
        World.add(myworld,this.body);
    
    }
    
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
    
        fill("silver");
        rect(0,0,this.width,this.height);

        pop();
    }
    
    }