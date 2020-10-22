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
  hueVal.elt.innerHTML = "Hue Value - " + hueSlider.value();
  satVal.elt.innerHTML = "Saturation Value - " + satSlider.value();
  briVal.elt.innerHTML = "Brightness/Value Value - " + briSlider.value();


  background(hueSlider.value(), satSlider.value(), briSlider.value());
}