class Button{
    
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.msg = 
        "החיים יפים, הכל בסדר \n מותר להינות";
        this.red = 255;
        this.green = 255;
    }

    display() {
        // fill(0);
        // ellipseMode(CENTER);
        // ellipse(this.x,this.y,this.r*2,this.r*2);
        fill(this.red,this.green,255);
        textAlign(CENTER);
        textSize(24);
        text(this.msg,this.x,this.y);
    }

    clicked(w,h){
        this.x = Math.random() * ((w - this.r) - this.r) + this.r;
        this.y = Math.random() * ((h - this.r) - this.r) + this.r;
        this.red = Math.random() * (255 - 0) + 0;
        this.green = Math.random() * (255 - 0) + 0;
    }
}