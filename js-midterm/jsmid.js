// setting the drop button to the function that drops the ball
const dropBtn = document.querySelector('#drop-ball').addEventListener('click', ballDrop);
const yesBtn = document.querySelector('#yes').addEventListener('click', addDigit);
const noBtn = document.querySelector('#no').addEventListener('click', keepGoing);



const ball = document.getElementById("ball");
let digit_arr = [];

// don't want the yes/no buttons showing at first... will add once question is asked
block_yes = document.getElementById("yes");
block_yes.style.display = "none";
block_no = document.getElementById("no");
block_no.style.display = "none";


// to find random index to put ball into
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};

// add the digit if it landed on it correctly to the digit array
function addDigit() {
    const newDigit = document.querySelector('#phone-digits');
    // digit_arr.push(number);
    // console.log(digit_arr);
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
    // no commas in printing phone number
    newDigit.textContent = digit_arr.join("");

    // length includes the extra characters not just the numbers
    if(digit_arr.length < 13) {
        keepGoing();
    }
    else {
        const message = document.querySelector("h1");
        message.textContent = "Congratulations! Your number is " + newDigit.textContent;
        block_yes.style.display = "none";
        block_no.style.display = "none";
        block_yes.style.display = "none";

        block_drop = document.getElementById("drop-ball");
        block_question = document.getElementById("question");
        block_digits = document.getElementById("phone-digits");
        block_ball = document.getElementById("ball");

        block_drop.style.display = "none";
        block_question.style.display = "none";
        block_digits.style.display = "none";
        block_ball.style.display = "none";

    }
    

};


function keepGoing(){
    const clear = document.querySelector('#question');
    const clear1 = document.querySelector('#yes');
    const clear2 = document.querySelector('#no');
    
    clear.textContent = "";
    clear1.textContent = "";
    clear2.textContent = "";

    // putting the ball back on the top and redoing the animation
    ball.style.top = "0px";
    ball.style.left = "0px";
    ball.classList.add('animate');
    block_yes.style.display = "none";
    block_no.style.display = "none";

    // if(number === 0){
    //     ball.style.left -= "2.5%";
    // }
    // else if(number === 1){
    //     ball.style.left -= "14%";
    // }
    // else if(number === 2){
    //     ball.style.left -= "23.5%";
    // }
    // else if(number === 3){
    //     ball.style.left -= "33%";
    // }
    // else if(number === 4){
    //     ball.style.left -= "42.5%";
    // }
    // else if(number === 5){
    //     ball.style.left -= "53%";
    // }
    // else if(number === 6){
    //     ball.style.left -= "62.5%";
    // }
    // else if(number === 7){
    //     ball.style.left -= "73%";
    // }
    // else if(number === 8){
    //     ball.style.left -= "81.5%";
    // }
    // else if(number === 9){
    //     ball.style.left -= "92%";
    // }

};

function askQuestion(number) {
    console.log("digits:" + digit_arr);
    block_yes.style.display = "block";
    block_no.style.display = "block";

    const question = document.querySelector('#question');
    const yeah = document.querySelector('#yes');
    const nope = document.querySelector('#no');
    
    question.textContent = "Is " + number + " the next digit in your phone number?";
    yeah.textContent = "Yes";
    nope.textContent = "No";
    

};


function ballDrop() {
    console.log("ballDrop")
    ball.style.top += "300px";
    // make the animation stop
    ball.classList.remove('animate');
    number = random(0,9);

    // const location = ball.getBoundingClientRect();
    // console.log(location.top, location.right, location.bottom, location.left);
    console.log(ball.offsetLeft);

    // if(ball.offsetLeft === 8) {
    //     ball.style.top -= "300px";
    //     askQuestion(2);
    // }

    if(number === 0){
        ball.style.left += "2.5%";
        askQuestion(number);
    }
    else if(number === 1){
        ball.style.left += "14%";
        askQuestion(number);
    }
    else if(number === 2){
        ball.style.left += "23.5%";
        askQuestion(number);
    }
    else if(number === 3){
        ball.style.left += "33%";
        askQuestion(number);
    }
    else if(number === 4){
        ball.style.left += "42.5%";
        askQuestion(number);
    }
    else if(number === 5){
        ball.style.left += "53%";
        askQuestion(number);
    }
    else if(number === 6){
        ball.style.left += "62.5%";
        askQuestion(number);
    }
    else if(number === 7){
        ball.style.left += "73%";
        askQuestion(number);
    }
    else if(number === 8){
        ball.style.left += "81.5%";
        askQuestion(number);
    }
    else if(number === 9){
        ball.style.left += "92%";
        askQuestion(number);
    }
};