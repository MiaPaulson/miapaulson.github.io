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
    digit_arr.push(number);
    console.log(digit_arr);
    for(let i = 0; i < digit_arr.length; i++){
    newDigit.textContent = digit_arr[i];
    }

    if(length(digit_arr) < 10) {
        keepGoing();
    }
    else {
        const message = document.querySelector("h1");
        message.textContent = "Congratulations! Your number is " + digit_arr;
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
    ball.classList.add('animate');
    block_yes.style.display = "none";
    block_no.style.display = "none";

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


async function ballDrop() {
    console.log("ballDrop")
    ball.style.top += "400px";
    // make the animation stop
    ball.classList.remove('animate');
    number = 0;
    // number = random(0,9);
    if(number === 0){
        ball.style.left += "2.5%";
        askQuestion(number);
    }
    if(number === 1){
        ball.style.left += "14%";
        askQuestion(number);
    }
    if(number === 2){
        ball.style.left += "23.5%";
        askQuestion(number);

    }
    if(number === 3){
        ball.style.left += "33%";
        askQuestion(number);

    }
    if(number === 4){
        ball.style.left += "42.5%";
        askQuestion(number);

    }
    if(number === 5){
        ball.style.left += "53%";
        askQuestion(number);

    }
    if(number === 6){
        ball.style.left += "62.5%";
        askQuestion(number);

    }
    if(number === 7){
        ball.style.left += "73%";
        askQuestion(number);

    }
    if(number === 8){
        ball.style.left += "81.5%";
        askQuestion(number);

    }
    if(number === 9){
        ball.style.left += "92%";
        askQuestion(number);

    }
};
