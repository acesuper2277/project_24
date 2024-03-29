class Stone {

    constructor(x,y){

        var options = {

            'restitution':0.8,
            'density':12,
            'friction':0.9
        }
        
        this.body = Bodies.rectangle(x,y,40,65,options);
        this.width = 40;
        this.height = 65;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("brown");
        rect(0, 0, this.width,this.height);
        pop()
    }
}