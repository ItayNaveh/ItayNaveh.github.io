let video;

// function setup() {
//   createCanvas(640, 480);
//   pixelDensity(1);
//   video = createCapture(VIDEO);
//   video.hide();
// }

// function draw() {
//   background(50);

//   let normal = createImage(video.width, video.height, RGB);

//   video.loadPixels();
//   normal.loadPixels();

//   let maxX = ((video.width / 2) * 4) - 1;
//   let maxY = (video.height * 4) - 1;
//   // normal.pixels = video.pixels.slice(0, maxX + maxY * video.width * 4);
//   // for (let i = normal.pixels.length; i < video.pixels.length; i++) {normal.push(0);}
//   let bigI = 0;
//   for (let x = 0; x < (video.width / 2) * 4; x++) {
//     for (let y = 0; y < video.height * 4; y++) {
//       let i = x + y * video.width * 4;
//   //     // bigI = max(bigI, i);
//       normal.pixels[i] = video.pixels[i];
//     }
//   }
//   // console.log(bigI);
//   // console.log(maxX + maxY * video.width * 4);

//   normal.updatePixels();
//   video.updatePixels();


//   push();
//   scale(-1.0, 1.0);
//   image(normal, -width, 0);//, width, height);
//   pop();

//   //pushMatrix();
//   //scale(2.0, 2.0);
//   image(normal, 0, 0);
//   //popMatrix();
//   // noLoop();
// }

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(50);
  // push();
  // scale(-1,1);
  // video.copy(400,100,100,100,400,300,100,100);
  // pop();
  // image(video,0,0);

  image(video, 0, 0);
  let reversed = get(0,0,width/2,height);
  push();
  scale(-1,1);
  image(reversed, -width, 0);
  pop();
}