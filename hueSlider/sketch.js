let slider;
let val;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 255, 0, 1);
  val = createP("Hue Value");
  colorMode(HSB, 255);
}

function draw() {
  // console.log(slider.value());
  val.elt.innerHTML = slider.value();
  background(slider.value(), 255, 255);
}