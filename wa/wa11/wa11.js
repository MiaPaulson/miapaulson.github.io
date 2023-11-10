const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'pic1.jpg': "pic1",
    'pic2.jpg': "pic2",
    'pic3.jpg': "pic3",
    'pic4.jpg': "pic4",
    'pic5.jpg': "pic5"
};

/* Looping through images */


for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    //replaceImage function did not work, so writing a wacky way to do it instead
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
};


/* Wiring up the Darken/Lighten button */
function buttonCheck() {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }

};

btn.addEventListener("click", buttonCheck);