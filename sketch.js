let randomIndex;
let counter = 0;
let animating = false;
let fx;
let animePics = [];
let imageCounter = 0;
let isLast = false;
let button;
let bunnypic;



function preload() {
  //song
  soundFormats("mp3");
  fx = loadSound("Drum Roll - Gaming Sound Effect (HD).mp3");
bunnypic = loadImage("bunny.gif");

  for (let i = 0; i <= 12; i++) {
    animePics[i] = loadImage("anime" + i + ".png");
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
  image(bunnypic, 230, 400);
  console.log(animePics);
  frameRate(15);
  button = createButton("CLICK ME!! OVER HERE!");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();

    if (imageCounter < animePics.length - 1) {
      background(random(255), random(255), random(255));
      imageCounter++;
      //console.log(animePics[imageCounter]);
      console.log(imageCounter);
      //console.log("anime pics " + animePics.length);
    }
    else {
      imageCounter = 0;
    }
    image(animePics[imageCounter], width / 2, height / 2);
  }


}


function randomizer() {
  animating = false;

  if (animeShows[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(animeShows.length));
    image(animePics[randomIndex], width/2, height/2.3);
    fill(random(255), random(255), random(255));
    text("TITLE: " + animeShows[randomIndex].title, 250, 450);
    text("GENRE: " + animeShows[randomIndex].genre, 250, 470);
    animeShows.splice(randomIndex, 1);
    animePics.splice(randomIndex, 1);
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

