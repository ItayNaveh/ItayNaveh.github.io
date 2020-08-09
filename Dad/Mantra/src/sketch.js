let count;
let button;
let red = 255;
let green = 255;
function setup() {
  createCanvas(window.screen.width * 0.9 ,window.screen.height * 0.7);
  background(100);

  if (localStorage.getItem("count") == null){
    count = 0;
  }else {
    count = parseInt(localStorage.getItem("count"));
  }

  button = new Button(width/2,height/2,75);
}

function draw() {
  background(100);
  button.display();
  fill(red,green,255);
  textSize(24);
  text(count,50,50);
}

function mouseClicked(){
  let dis = dist(mouseX,mouseY,button.x,button.y);
  if (dis <= button.r){
    button.clicked(width,height);
    // red = Math.random() * (255 - 0) + 0;
    // green = Math.random() * (255 - 0) + 0;
    count++;
    localStorage.setItem("count",count.toString());
    // console.log("Int: " + parseInt(count));
    // console.log("String: " + count.toString());
  }
}