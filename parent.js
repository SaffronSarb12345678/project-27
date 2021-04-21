class parent{

    constructor(x,y,width,height,angle){
        var options={
    
            
          }

          
          this.body=Bodies.rectangle(x,y,width,height,options);
          World.add(myworld,this.body);
          this.width=width;
          this.height=height;
    
    
    }
    
    display()
    {
        push()
      
    
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)  
        image(this.image,0,0,this.width,this.height)
        pop()
      
        
    }
    
    
    }
















































