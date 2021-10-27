let randomIndex;
let imageCounter = 0;
let animating = false;
let button;
let fx;
let taskName = [];
let isLast = false;
let counter = 0;

function preload() {
 
  for (let i = 1; i <= 14; i++) {
    taskName[i] = loadImage("MyPics/Task_" + i + ".jpg");
  }
}

function setup() {
  createCanvas(500, 500);
  textSize(18);
  imageMode(CENTER);
  background(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  text("Task Generator (Express Ver.)", 290, 220);
  text("Click button below to begin.", 250, 180);
  console.log(taskName);
  frameRate(24);
  button = createButton("Randomize");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();

    if (imageCounter < taskName.length - 1) {
      background(random(255), random(255), random(255));
      imageCounter++;
      //console.log(taskPics[imageCounter]);
      console.log(imageCounter);
      //console.log("task pics " + taskPics.length);
    }
    else {
      imageCounter = 0;
    }
    image(taskName[imageCounter], width / 2, height / 2);
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 4000);
  fx.play();
}

