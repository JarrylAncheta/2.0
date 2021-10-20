let objective = [
  { title: "Jojo's Bizarre Adventure", genre: "Shounen" },
  { title: "Lucky Star", genre: "Shoujo" },
  { title: "HunterxHunter", genre: "Shounen" },

let randomIndex;
let counter = 0;
let animating = false;
let fx;
let taskName = [];
let imageCounter = 0;
let isLast = false;
let button;
let bunnypic;



function preload() {

  for (let i = 0; i <= 12; i++) {
    taskName[i] = loadImage("Task_" + i + ".jpg");
  }
}

function setup() {
  createCanvas(500, 500);
  textSize(18);
  textFont("consolas");
  textAlign(CENTER);
  imageMode(CENTER);
  background(random(255), random(255), random(255));
  fill(random(255), random(255), random(255));
  text("Anime Reccomendation Generator (Express Ver.)", 250, 230);
  text("Click button below to begin.", 250, 280);
  console.log(taskName);
  frameRate(15);
  button = createButton("CLICK ME!! OVER HERE!");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();

    if (imageCounter < taskName.length - 1) {
      background(random(255), random(255), random(255));
      imageCounter++;
      //console.log(animePics[imageCounter]);
      console.log(imageCounter);
      //console.log("anime pics " + animePics.length);
    }
    else {
      imageCounter = 0;
    }
    image(taskName[imageCounter], width / 2, height / 2);
  }


}


function randomizer() {
  animating = false;

  if (objective[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(objective.length));
    image(taskName[randomIndex], width/2, height/2.3);
    fill(random(255), random(255), random(255));
    text("TITLE: " + objective[randomIndex].title, 250, 450);
    text("GENRE: " + objective[randomIndex].genre, 250, 470);
    objective.splice(randomIndex, 1);
    taskName.splice(randomIndex, 1);
  } else {
    background(random(255), random(255), random(255));
    text("that's all for now!", 250, 250);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 4000);
  fx.play();
}

