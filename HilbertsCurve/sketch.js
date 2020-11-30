const order = 6;
let N;
let total;

const path = [];

function setup() {
  createCanvas(512, 512);

  N = int(pow(2, order));
  total = N * N;
  
  colorMode(HSB, 360, 255, 255);
  
  for (let i = 0; i < total; i++) {
    path.push(hilbert(i));
    const len = width / N;
    path[i].mult(len);
    path[i].add(len/2, len/2);
  }
}

let count = 0;
function draw() {
  background(0);
  
  noFill();
  stroke(255);
  strokeWeight(2);
  
  //beginShape();
  //for (int i = 0; i < count; i++) {
    //vertex(path[i].x, path[i].y);
  //}
  //endShape();
  for (let i = 1; i < count; i++) {
    stroke(map(i, 0, path.length, 0, 360), 255, 255);
    line(path[i].x, path[i].y, path[i-1].x, path[i-1].y);
  }
  
  //strokeWeight(4);
  //stroke(0, 0, 255);
  //for (int i = 0; i < count; i++) {
  //  point(path[i].x, path[i].y);
  //}
  
  count++;
  if (count >= path.length) {
    count = total;
  }
}

function keyPressed() {
  if (key == " ") {
    count = 0;
  }
}

function hilbert(i) {
  const points = [
    createVector(0, 0),
    createVector(0, 1),
    createVector(1, 1),
    createVector(1, 0)
  ];
  
  
  let index = i & 3;
  const v = points[index];
  
  for (let j = 1; j < order; j++) {
    i = i >>> 2;
    index = i & 3;
    
    const len = pow(2, j);
    switch (index) {
      case 0:
        const tmp = v.x;
        v.x = v.y;
        v.y = tmp;
        break;
      case 1:
        v.y += len;
        break;
      case 2:
        v.x += len;
        v.y += len;
        break;
      case 3:
        const t = v.x;
        v.x = len - 1 - v.y;
        v.y = len - 1 - t;
      
        v.x += len;
        break;
    }
  }

  return v;
}
