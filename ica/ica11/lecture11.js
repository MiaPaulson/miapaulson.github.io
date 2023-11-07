//seeing if the js is linked correctly to the html
// right click, inspect, console
console.log("test");

const x = 2;
const y = 2;


// conditionals
if(x === y) {
    console.log("SUCCESS");
}
else {
    console.log("FAIL");
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// set the size of the canvas we are drawing on once the page is loaded, and change once it is reloaded
document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });

function random(number) {
    // floor rounds the decimal down
    return Math.floor(Math.random() * number);
}

function random2(number) {
    return (Math.random() * number);
}


//clear the canvas, then draw 100 randomly placed random circles that are transparent randomly colored
function draw() {
    // console.log("inside draw function");

    ctx.clearRect(0,0, canvas.width, canvas.height);

    // only values from 0-100, not including 200
    for(let i = 0; i<200; i++) {
        ctx.beginPath();

        // to make the colors random!
        let red = random(225);
        let green = random(225);
        let blue = random(225);
        // up to 1 is the transparency
        let alpha = random2(1);
        // random color values
        let color = "rgba("+red+","+green+","+blue+","+alpha+")"
        ctx.fillStyle = color;
        // hover over the word arc and it explains what each of the numbers mean
        ctx.arc(
            random(canvas.width),
            random(canvas.height), random(100),0,2*Math.PI
        );
        ctx.fill();
    }
}

// call the draw function once the button is clicked
btn.addEventListener("click", draw);