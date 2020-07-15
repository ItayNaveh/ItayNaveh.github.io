let count;
let button;
function setup() {
  createCanvas(window.screen.width * 0.9 ,window.screen.height * 0.7);
  background(100);

  if (localStorage.getItem("count") == null){
    count = 0;
  }else {
    count = parseInt(localStorage.getItem("count"));
  }

  count_EL = document.getElementById("count");
  count_EL.innerHTML = count;
  button = new Button(width/2,height/2,55);
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