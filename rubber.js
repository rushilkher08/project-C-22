class Rubber{

    constructor(x,y){
    
        var options = {
            restitution: 1,
            friction: 3,
            density: 20
        }
    
        this.body = Bodies.circle(x,y,30,options)
        this.radius = 30
        World.add(myworld,this.body);
    
    }
    
    display(){
        
        var pos = this.body.position
        var angle = this.body.angle
        
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
    
        fill("blue");
        ellipse(0,0,this.radius,this.radius);

        pop();
    }
    
    }