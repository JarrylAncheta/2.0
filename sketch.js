
// Get all the images
image_array = [
  'MyPics/Task_compliment.jpg',
  'MyPics/Task_conversation.jpg',
  'MyPics/Task_explore.jpg',
  'MyPics/Task_gas.jpg',
  'MyPics/Task_green.jpg',
  'MyPics/Task_podcast.jpg',
  'MyPics/Task_rap.jpg',
  'MyPics/Task_recipe.jpg',
  'MyPics/Task_restaurant.jpg',
  'MyPics/Task_stocks.jpg',
  'MyPics/Task_tour.jpg',
  'MyPics/Task_walk.jpg',
  'MyPics/Task_water.jpg',
  'MyPics/Task_workout.jpg',

]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./images/${selected_image}`
}
