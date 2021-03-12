class Umbrella {
    constructor(x, y){
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
    
      this.body = Bodies.rectangle(x, y,options);
      this.image = loadImage("walking_1.png");
      World.add(world, this.body);
    }
  
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y);
      pop();
    }
  }
  
  