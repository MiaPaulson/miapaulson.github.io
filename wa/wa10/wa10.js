const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 40 fahrenheit in the room, so :insertx: decided to build a fire. When :inserty:, they were happy until :insertz:. Bob witnessed it all, and was shocked — :insertx: usually is good at building fires, but the logs weighed 300 pounds, so it was definitely dangerous to build the fire."
// var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

var insertX = ["Sasquatch", "the Yeti", "Santa"]
var insertY = ["the room got warmer", "the flames started to grow", "they got out marshmallows to roast"]
var insertZ = ["the logs blew up", "the igloo melted", "they burned off their eyebrows"]


randomize.addEventListener('click', result);

function result() {

    // can't make changes directly to storyText, or can only create new story once
    var newStory = storyText;
    const xItem= randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    //insert x appears twice, and one replace does not work for both!
    newStory = newStory.replace(":insertx:", xItem);
    



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*.0714286) + " stone";
    const temperature =  Math.round((40-32) * 5/9) + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("40 fahrenheit", temperature);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}