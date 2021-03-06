class Stone{
        constructor(x, y,r) {
            var options = {

                isStatic:true,
                'restitution':0,
                'friction':1,
                'density':1.2
            }
            this.r=r;
            this.x=x;
            this.y=y;
            this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
            this.image = loadImage("stone.png");
            World.add(world, this.body);
          }
          display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0,30,30);
            pop();
    }
}