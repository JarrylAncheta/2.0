let quotes = [{name: "compliment"}, {name: "conversation"},{name:"explore"}, {name: "gas"},{name: "green"},{name: "podcast"},{name: "rap"},{name: "recipe"},{name: "rap"},{name: "recipe"},{name: "restaurant"},{name: "stocks"},{name: "tour"},{name: "walk"},{name: "water"},{name: "workout"},]

let randomIndex;
let randompics = [];
let imageCounter = 0;
let animating = false;
let button;
function preload(){

  for (let i = 0; i <=10; i++){

randompics[i] = loadImage(`MyPics/Task_${i}.jpg`)

  }
}



function setup() {
  createCanvas(600, 600);
  background(182,235,242);
  textSize(32);
  imageMode(CENTER);
  frameRate(5);

fill(255);
text("click blue button to randomize",50,50);

button = createButton("click for a helpful tip");
button.mousePressed(buttonPressed);
button.style("padding","20px");
button.style("background-color","#49b7e3");
}

function draw() {

if (animating == true){
  clear();

  image(randompics[imageCounter], width/2, height/2);

  if (imageCounter < randompics.length-1)
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter = 0;
}

}

function randomizer (){
  animating = false;
  if (quotes[0]){

  // background(random(200,255));

  randomIndex = int(random(quotes.length))
  text(`${quotes[randomIndex].name}'s favorite color inspect;
  ${quotes[randomIndex].color}`,50, 50);
  image(random(randompics), width/2, height/2);
  // text(dogs[randomIndex].name + "'s favorite color is" +
  // dogs[randomIndex].color,50, 50);
  quotes.splice(randomIndex, 1);
  }
  else {
    background(random(226,225,85));
    text("Have a great day :)",50,50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer,2500);


}
