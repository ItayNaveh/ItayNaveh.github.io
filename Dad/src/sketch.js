let count_EL;
let count = parseInt(localStorage.getItem("count"));
let button;
function setup() {
  createCanvas(600,600);
  background(100);

  count_EL = document.getElementById("count");
  count_EL.innerHTML = count;
  button = new Button(width/2,height/2,50);
}

function draw() {
  background(100);
  button.display();
}

function mouseClicked(){
  let dis = dist(mouseX,mouseY,button.x,button.y);
  if (dis <= button.r){
    button.clicked(width,height);
    count++;
    count_EL.innerHTML = count;
    localStorage.setItem("count",count.toString());
    // console.log("Int: " + parseInt(count));
    // console.log("String: " + count.toString());
  }
}