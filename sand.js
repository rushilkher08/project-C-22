class Sand{

    constructor(x,y){
    
        var options = {
            restitution: 0.1,
            friction: 2,
            density: 0.1
        }
    
        this.body = Bodies.circle(x,y,10,options)
        this.radius = 10
        
        World.add(myworld,this.body);
     
    }
    
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
    
        fill("yellow");
        ellipse(0,0,this.radius, this.radius);

        pop();
    }
    
    }