// setting the buttons to their functions
const dropBtn = document.querySelector('#drop-ball').addEventListener('click', ballDrop);
const yesBtn = document.querySelector('#yes').addEventListener('click', addDigit);
const noBtn = document.querySelector('#no').addEventListener('click', keepGoing);


// setting the constants and other variables that are needed for a lot of the functions
const ball = document.getElementById("ball");
let digit_arr = [];
// added canvas stuff from the ball ica
const canvas = document.querySelector('canvas');
const width = (canvas.width = window.innerWidth);
let vel = 15;
let pos = 0;

// don't want buttons always showing, so be prepared to block/do block, and then will bring them up later
block_yes = document.getElementById("yes");
block_yes.style.display = "none";
block_no = document.getElementById("no");
block_no.style.display = "none";
block_drop = document.getElementById("drop-ball");



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
        console.log(digit_arr);
    }
    else if(digit_arr.length === 3){
        digit_arr.push(number);
        digit_arr.push(") ");
        console.log(digit_arr);
    }
    else if(digit_arr.length === 8){
        digit_arr.push("-");
        digit_arr.push(number);
        console.log(digit_arr);
    }
    else{
        digit_arr.push(number);
        console.log(digit_arr);
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

        block_drop.style.display = "none";
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
    block_drop.style.display = "block";


};

function askQuestion(number) {

    // pull up the displays of the yes and no button, block the others
    console.log("digits:" + digit_arr);
    block_yes.style.display = "block";
    block_no.style.display = "block";
    block_drop.style.display = "none";

    const question = document.querySelector('#question');
    const yeah = document.querySelector('#yes');
    const nope = document.querySelector('#no');
   
    // add in the display of the question if the digit is correct and the buttons' text
    question.textContent = "Is " + number + " the next digit in your phone number?";
    yeah.textContent = "Yes";
    nope.textContent = "No";
    

};


function ballDrop() {
    console.log(vel);

    ball.style.top = "300px";

    // make the animation stop (for some reason just making it "stop" true doesn't work... ugh)
    vel = 0;

    position = ball.style.left;

    console.log("position: " + position);

    //depending on the position of the ball, drop it and ask the question based on the specific digit that shares the similar position
    if(position === 0 || position <= "60px"){
        number = 0;
        console.log(ball.style.left);
        askQuestion(number);
    }
    else if(position > "60px" || position <= "200px"){
        number = 1;
        console.log(ball.style.left);
        askQuestion(number);
    }
    else if(position > "200px" || position <= "300px"){
        number = 2;
        console.log("2:" + number);
        console.log(ball.style.left);
        askQuestion(number);
    }
    else if(position > "300px" || position <= "410px"){
        number = 3;
        askQuestion(number);
    }
    else if(position > "410px" || position <= "510px"){
        number = 4;
        askQuestion(number);
    }
    else if(position > "510px" || position <= "620px"){
        number = 5;
        askQuestion(number);
    }
    else if(position > "620px" || position <= "720px"){
        number = 6;
        askQuestion(number);
    }
    else if(position > "720px" || position <= "840px"){
        number = 7;
        askQuestion(number);
    }
    else if(position > "840px" || position <= "950px"){
        number = 8;
        askQuestion(number);
    }
    else if(position <= "1035px"){
        console.log(9);
        number = 9;
        askQuestion(number);
    }
    // just in case it's being wacky and it's any of the above options
    else{
        question.textContent = "Try again!";
        keepGoing();
    }


    //if(number === 0){
    //     ball.style.left = "2.5%";
    //     askQuestion(number);
    // }
    // else if(number === 1){
    //     ball.style.left = "14%";
    //     askQuestion(number);
    // }
    // else if(number === 2){
    //     ball.style.left = "23.5%";
    //     askQuestion(number);
    // }
    // else if(number === 3){
    //     ball.style.left = "33%";
    //     askQuestion(number);
    // }
    // else if(number === 4){
    //     ball.style.left = "42.5%";
    //     askQuestion(number);
    // }
    // else if(number === 5){
    //     ball.style.left = "53%";
    //     askQuestion(number);
    // }
    // else if(number === 6){
    //     ball.style.left = "62.5%";
    //     askQuestion(number);
    // }
    // else if(number === 7){
    //     ball.style.left = "73%";
    //     askQuestion(number);
    // }
    // else if(number === 8){
    //     ball.style.left = "81.5%";
    //     askQuestion(number);
    // }
    // else if(number === 9){
    //     ball.style.left = "92%";
    //     askQuestion(number);
    // }

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

animation();