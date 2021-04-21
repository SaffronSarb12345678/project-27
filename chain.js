class rope{

    constructor(obj1,point){
    
        var options={
            bodyA:obj1,
            pointB:point,
            length:250,
            stiffness:0.5
          }
          
          
          this.sling=Constraint.create(options)
          World.add(myworld,this.sling)
          
          
          
    
    }
    
    
    display(){
    
    push()
    strokeWeight(5)
    if(this.sling.bodyA!=null){
    
    
    
    
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
    }   
    pop()
    
    
    }
    
    fly() {
      this.sling.bodyA = null 
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    