// js critiques and how I fixed them:
//Don't let me decide if it is the right number or not... Just force me to be more careful about when i drop.
    // did this by making the numbers not chosen at random, but based on position instead 
    // (couldn't figure out how to before, thank you recitation!)
//I think instead of doing a button drop, just have the ball drop when I click on the screen.
    // got rid of the button by deleting it and its functionality
    // made a new div for the part of the screen below the yes/no buttons, since if they are clicked inside of the
    // overall event listener it breaks it (not sure why, just how it goes)


// setting the buttons to their functions
// specifically : got ride of drop button, now a part of the screen is clickable
    // only the part below the yes and no buttons. if they are in it, it breaks when you try to click one of the buttons
const dropBtn = document.querySelector('#screen-click').addEventListener('click', ballDrop);
const yesBtn = document.querySelector('#yes').addEventListener('click', addDigit);
const noBtn = document.querySelector('#no').addEventListener('click', keepGoing);


// setting the constants and other variables that are needed for a lot of the functions
const ball = document.getElementById("ball");
let digit_arr = [];
// added canvas stuff from the ball ica
const canvas = document.querySelector('canvas');
const width = (canvas.width = window.innerWidth);

// will use the width of the grid container to see where the position of the ball is later
const grid_contain = document.getElementById("grid-container");
const grid_width = (grid_contain.width = window.innerWidth);
// console.log(grid_width);

// set velocity and position for the beginning of running the program
let vel = 15;
let pos = 0;

// don't want buttons always showing, so be prepared to block/do block, and then will bring them up later
block_yes = document.getElementById("yes");
block_yes.style.display = "none";
block_no = document.getElementById("no");
block_no.style.display = "none";
//block_drop = document.getElementById("drop-ball");



// add the digit if it landed on it correctly to the digit array
function addDigit() {
    // adding new digits to the array
    const newDigit = document.querySelector('#phone-digits');
    // digit_arr.push(number);
    // console.log(digit_arr);

    // specifically format the phone number as (xxx) xxx-xxxx
    if(digit_arr.length === 0){
        digit_arr.push("(");
        digit_arr.push(number);
        // console.log(digit_arr);
    }
    else if(digit_arr.length === 3){
        digit_arr.push(number);
        digit_arr.push(") ");
        // console.log(digit_arr);
    }
    else if(digit_arr.length === 8){
        digit_arr.push("-");
        digit_arr.push(number);
        // console.log(digit_arr);
    }
    else{
        digit_arr.push(number);
        // console.log(digit_arr);
    }

    // array has commas, don't want commas in printing phone number, so use "join" function
    newDigit.textContent = digit_arr.join("");

    // length includes the extra characters not just the numbers, so it is 13 - do not stop until reach the end
    if(digit_arr.length < 13) {
        keepGoing();
    }
    // once reaches the end, show ending "congrats" message and take out the displays of everything except last message
    else {
        // changing the message
        const message = document.querySelector("h1");
        message.textContent = "Congratulations! Your number is " + newDigit.textContent;

        // blocking the things you don't want to see
        block_yes.style.display = "none";
        block_no.style.display = "none";
        block_yes.style.display = "none";

        // new things are being blocked
        block_question = document.getElementById("question");
        block_digits = document.getElementById("phone-digits");
        block_ball = document.getElementById("ball");
        block_grid = document.getElementById("grid-container");

        //block_drop.style.display = "none";
        block_question.style.display = "none";
        block_digits.style.display = "none";
        block_ball.style.display = "none";
        block_grid.style.display = "none";

    }
};

// always call this function to continue to run program until entire phone number is added
function keepGoing(){
    // "return" in the animation function didn't work - so instead, reset velocity so that the animation goes again
    vel = 15;

    // clear all elements I do not want to see
    const clear = document.querySelector('#question');
    const clear1 = document.querySelector('#yes');
    const clear2 = document.querySelector('#no');
    clear.textContent = "";
    clear1.textContent = "";
    clear2.textContent = "";

    // putting the ball back on the top
    ball.style.top = "0px";
    ball.style.left = "0px";

    // reblock the things I don't want
    block_yes.style.display = "none";
    block_no.style.display = "none";
    //block_drop.style.display = "block";

};

function askQuestion(number) {

    // pull up the displays of the yes and no button, block the others
    // console.log("digits:" + digit_arr);
    block_yes.style.display = "block";
    block_no.style.display = "block";
    //block_drop.style.display = "none";

    const question = document.querySelector('#question');
    const yeah = document.querySelector('#yes');
    const nope = document.querySelector('#no');
   
    // add in the display of the question if the digit is correct and the buttons' text
    question.textContent = "Is " + number + " the next digit in your phone number?";
    yeah.textContent = "Yes";
    nope.textContent = "No";
    

};


function ballDrop() {
    // console.log(vel);

    ball.style.top = "300px";

    // make the animation stop
    //(for some reason just making it "stop" true and returning in the animation function doesn't work... ugh)
    vel = 0;

    // console.log(grid_width);
    // making the ball.style.left an integer to compare it to the percentages of the page width
    // + 25 so that it takes the position from the middle of the ball, not the left side
    position = parseInt(ball.style.left) + 25;
    // console.log(position);
   
    //depending on the position of the ball, drop it and ask the question based on the specific digit that shares the similar position
    if(position <= grid_width/10){
        number = 0;
        askQuestion(number);
    }
    else if(position <= grid_width/10*2){
        number = 1;
        askQuestion(number);
    }
    else if(position <= grid_width/10*3){
        number = 2;
        askQuestion(number);
    }
    else if(position <= grid_width/10*4){
        number = 3;
        askQuestion(number);
    }
    else if(position <= grid_width/10*5){
        number = 4;
        askQuestion(number);
    }
    else if(position <= grid_width/10*6){
        number = 5;
        askQuestion(number);
    }
    else if(position <= grid_width/10*7){
        number = 6;
        askQuestion(number);
    }
    else if(position <= grid_width/10*8){
        number = 7;
        askQuestion(number);
    }
    else if(position <= grid_width/10*9){
        number = 8;
        askQuestion(number);
    }
    else if(position <= grid_width){
        number = 9;
        askQuestion(number);
    }

};



//recursive loop to run the animation of the ball going back and forth
function animation(){  
 
    if(pos < width){
        pos += vel;
        ball.style.left = pos + 'px';
    } 
    else if (pos > 0){
        vel = -(vel);
        pos += vel;
        ball.style.left = pos + 'px';
    }
    if (pos < 0){
        vel = -(vel);
        pos += vel;
        ball.style.left = pos + 'px';
    }

    requestAnimationFrame(animation); 
};

// call it once to start off the animation
animation();