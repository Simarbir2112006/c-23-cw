class Ground {
    constructor(){
        var options={
            isStatic:true
        }
        this.width=canvasWidth;
        this.height=40;
     this.body=Bodies.rectangle( canvasWidth/2 , canvasHeight, this.width, this.height , options )   
     World.add(world  , this.body );

    }


    display(){
        
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);


    }


}
