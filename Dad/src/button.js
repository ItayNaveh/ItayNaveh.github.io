class Button{
    
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.msg = 
        "החיים יפים, הכל בסדר \n מותר להינות";
    }

    display() {
        // fill(0);
        // ellipseMode(CENTER);
        // ellipse(this.x,this.y,this.r*2,this.r*2);
        fill(255);
        textAlign(CENTER);
        textSize(24);
        text(this.msg,this.x,this.y);
    }

    clicked(w,h){
        this.x = Math.random() * ((w - this.r) - this.r) + this.r;
        this.y = Math.random() * ((h - this.r) - this.r) + this.r;
    }
}