// setting the drop button to the function that drops the ball
const dropBtn = document.querySelector('#drop-ball').addEventListener('click', ballDrop);
const yesBtn = document.querySelector('#yes').addEventListener('click', addDigit);
const noBtn = document.querySelector('#no').addEventListener('click', keepGoing);


const ball = document.getElementById("ball");
let digit_arr = [];

// to find random index to put ball into
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};

// add the digit if it landed on it correctly to the digit array
function addDigit(i) {
    const newDigit = document.querySelector('#phone-digits');
    digit_arr.push(i);
    newDigit.textContent = digit_arr;

    keepGoing();

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
    ball.classList.add('animate');

};

function askQuestion() {
    const question = document.querySelector('#question');
    const yeah = document.querySelector('#yes');
    const nope = document.querySelector('#no');
    
    question.textContent = "Is this the next digit in your phone number?";
    yeah.textContent = "Yes";
    nope.textContent = "No";

};


function ballDrop() {
    console.log("ballDrop")
    ball.style.top += "400px";
    // make the animation stop
    ball.classList.remove('animate');
    number = random(0,9);
    if(number === 0){
        ball.style.left += "2.5%";
        askQuestion();
    }
    if(number === 1){
        ball.style.left += "14%";
        askQuestion();
    }
    if(number === 2){
        ball.style.left += "23.5%";
        askQuestion();
    }
    if(number === 3){
        ball.style.left += "33%";
        askQuestion();
    }
    if(number === 4){
        ball.style.left += "42.5%";
        askQuestion();
    }
    if(number === 5){
        ball.style.left += "53%";
        askQuestion();
    }
    if(number === 6){
        ball.style.left += "62.5%";
        askQuestion();
    }
    if(number === 7){
        ball.style.left += "73%";
        askQuestion();
    }
    if(number === 8){
        ball.style.left += "81.5%";
        askQuestion();
    }
    if(number === 9){
        ball.style.left += "92%";
        askQuestion();
    }
};
