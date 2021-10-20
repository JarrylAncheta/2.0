// Task array
let TaskName = [
{name: "compliment"}  ,
{name:"conversation"}  ,
{name:"explore"}  ,
{name:"gas"}  ,
{name:"green"}  ,
{name:"podcast"}  ,
{name:"rap"}  ,
{name:"recipe"}  ,
{name:"restaurant"}  ,
{name:"stocks"}  ,
{name:"tour"}  ,
{name:"walk"}  ,
{name:"water"}  ,
{name:"workout"}  ,
];
let randomIndex;
let backgroundColor;
let animate = false;
let tasks = [];
let imageCounter = 0;
let button;

function preload() {
  // sound
  soundFormats("mp3");
  fx=loadSound("Drum-roll-snare-sound.mp3")
  for (let i = 0; i < TaskName.length; i++) {
    img = loadImage("MyPics/Task_" + TaskName[i].name + ".jpg")
    tasks[i] = {
      image: img,
      name: TaskName[i].name
    }
  }
myFont = loadFont('MyPics/BankGothicRegular.ttf');
}

function setup() {

  createCanvas(1000, 1000);

  background(color(random(255, 205), random(205, 255), random(205, 205)));
  backgroundColor = color(random(255, 205), random(205, 255), random(205, 205));
  textSize(30);
  textFont(myFont);
  fill(0);
  frameRate(20);
  imageMode(CENTER);
  textAlign(CENTER);
  text("Are you hungry,",width/2, height/2 -50);
  text("and can't decide what to eat?",width/2, height/2);
  text("click on the button below to explore",width/2, height/2 + 50);

// create a button
  button = createButton("Explore!");
  button.position(width/2 -100, height/2+400);
  button.size(200, 50);
  button.style("font-family", "BankGothicRegular");
  button.style("font-size", "30px");
  button.style('background-color', "#bfc8db");

// if button is pressed
  button.mousePressed(buttonPressed);
}
function draw() {
  if (animate == true) {
    clear();
    fill(random(255, 205), random(205, 255), random(205, 205))
    if (imageCounter < tasks.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
    Task = tasks[imageCounter]
    image(Task.image, width / 2, height / 2);
  }
}

function randomizer() {
  animate = false;
  if (tasks.length > 0) {
    // get random object from stuffs
    background(random(255, 205), random(205, 255), random(205, 205));
    randomIndex = int(random(tasks.length));
    fill(0);
    Task = tasks[randomIndex]
    image(Task.image, width / 2, height /2);
    TaskName = Task.name.replaceAll("_", " ");
    text(
      `How about some ${TaskName} ?`,
      width / 2,
      height /1.2
    );
    // and then take that object out of the array
    tasks.splice(randomIndex, 1);
  } else {
    //   draw the background again so it does not overlay the previous object
    background(backgroundColor);    // when we show all food, nothing else to show
    text("Seriously, you go all the way here?", width / 2, height / 2);
    text("Make up your mind. Eat anything!",width/2, height/2 +50)
  }
}

function buttonPressed() {
  // if there's more than 1 food in the array, run the timeout
  animate = tasks.length > 1;
  if (animate) {

    setTimeout(randomizer, 1500);

    fx.play();
    // don't run the timeout + display the last food
  } else {
    randomizer()
  }
}
