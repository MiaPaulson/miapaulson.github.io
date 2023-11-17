// copy and pasted from ica12, changing the json variables and adding random function

// selecting an id, have # in front of it
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const ansBtn = document.querySelector('#js-author').addEventListener('click', getAns);

const tweetBtn = document.querySelector('#js-tweet').addEventListener('click', displayTweet);

let answer = "";


const endpoint = 'https://type.fit/api/quotes';

// make async so that we can use "await" later one
async function getQuote() {
    console.log('Test');

    // try means if there is an error, will tell us what the error is if it doesn't work
    try {
        const response = await fetch(endpoint);

        // ! means not, so... "if response not ok"
        if(!response.ok) {
            throw Error(response.statusText);
        }

        //randomizing the index!! using random function from lecture 11
        // numbers are 0 - 15
        index = random(15);
        console.log(index);

        const json = await response.json();
        // // since the api is a dictionary, the "index" of the question is labeled "question". that's all we want, so we pull this up!
        console.log(json[index].text);
        
        displayQuote(json[index].text);
        displayAnswer("");

        answer = json[index].author;

    }
    // catch err(or) runs if something goes wrong
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// from lecture 11, getting random index to get new print every time
function random(number) {
    return Math.floor(Math.random() * number);
}

function getAns() {
    // console.log("ans button clicked");
    displayAnswer(answer);
}

// parameter is the question text
function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAnswer(answer) {
    console.log(answer);
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

function displayTweet() {
    console.log("tweeted!");
    const tweeted = document.querySelector('#js-quote-text');
    const empty = document.querySelector('#js-answer-text');
    empty.textContent = "";
    tweeted.textContent = "Tweeted!";
    
}

// running function once to make it have a quote immediately when refreshing
getQuote();