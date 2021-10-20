let titles = [
"Dysfunctional Family.",
"My mom's show",
"Dad's show",
"The Gen X parents' show.",
"Out of british royalty drama",
"80s nostalgia.", 
" Drugs", 
"For Tweenagers",
"Depressed Actors",
"Must watch.", 
"Get your life together",
"2000s theater geek",
"Ran out of anime"]

let task = [];
let animating = false;
let randomIndex;
let button;

function preload (){
  for(let i = 0; i <= 11; i ++){  
    task[i] = loadImage ("MyPics/Task_" + i + ".jpg")
  }
}

function setup() {
  cnv= createCanvas (400,400);
  background (200)
  textSelection = ""
  imageSelection = 0
  console.log (tvshow);
  imageMode (CENTER)
button = createButton ('gimme a random flick');
   button.position(0, 0);
  button.mousePressed(pick);
  button.style("padding", "20px")
  button.style ("background-color","38b07a");
 
}

function draw() {  
  background(200,0,0);
  image(tvshow[imageSelection], width/2, height/2, 200, 250);
  text(textSelection, 200, 350)
  fill (255)
  textFont ('Avenir')
  textStyle (BOLD)
  textAlign (CENTER)
  
}

function pick() {
  textSelection = (titles[int(random(titles.length))])
  imageSelection = int(random(7))
  print(imageSelection);
}
