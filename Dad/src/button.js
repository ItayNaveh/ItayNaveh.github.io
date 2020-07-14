class Button{
    
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
    }

    display() {
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r*2,this.r*2);
    }

    clicked(w,h){
        this.x = Math.random() * (w - this.r) + this.r;
        this.y = Math.random() * (h - this.r) + this.r;
    }
}