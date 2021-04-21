class ball {
    constructor(x,y,r){
        var b_option={
    
            
            friction:0.5,
            density:1.2,
            restitution:1
          }
    
        this.body=Bodies.circle(x,y,r,b_option)
        World.add(myworld,this.body);
     this.r = r
    }
      display()
      {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    
      }
    
    
    }