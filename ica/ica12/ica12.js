// selecting an id, have # in front of it
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const ansBtn = document.querySelector('#js-tweet').addEventListener('click', getAns);

let answer = "";


const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// make async so that we can use "await" later one
async function getQuote() {
    // console.log('Test');

    // try means if there is an error, will tell us what the error is if it doesn't work
    try {
        const response = await fetch(endpoint);

        // ! means not, so... "if response not ok"
        if(!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // // since the api is a dictionary, the "index" of the question is labeled "question". that's all we want, so we pull this up!
        // console.log(json['question']);
        displayQuote(json['question']);
        displayAnswer("");
        answer = json['answer'];

    }
    // catch err(or) runs if something goes wrong
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
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
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

// running function once to make it have a quote immediately when refreshing
getQuote();