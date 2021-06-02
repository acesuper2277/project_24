class Rubber{
	constructor(x,y,r)
	{
	    var options = {

			restituyion:0.3,
			density:1,
			friction:5
		}


		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r);
			pop()
	}

}