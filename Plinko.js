class Plinko {

    constructor(x,y,radius){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius,{
        isStatic: true,
           
        })
        World.add(world,this.body);
      
    }
    display(){
            push();
            translate(this.body.position.x,this.body.position.y);
            fill(255,255,255);
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius);
            pop();
    }
    
    }