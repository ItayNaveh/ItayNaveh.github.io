let hueVal;
let hueSlider;

let satVal;
let satSlider;

let briVal;
let briSlider;

function setup() {
  createCanvas(400, 400);
  hueVal = createP("Hue Value");
  hueSlider = createSlider(0, 255, 0, 1);

  satVal = createP("Saturation Value");
  satSlider = createSlider(0, 255, 255, 1);

  briVal = createP("Brightness/Value Value");
  briSlider = createSlider(0, 255, 255, 1);

  colorMode(HSB, 255);
}

function draw() {
  hueVal.elt.innerHTML = hueSlider.value();
  satVal.elt.innerHTML = satSlider.value();
  briVal.elt.innerHTML = briSlider.value();


  background(hueSlider.value(), satSlider.value(), briSlider.value());
}