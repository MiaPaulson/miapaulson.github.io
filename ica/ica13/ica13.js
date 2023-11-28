// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    // every time there is a new ball, the variables are set to "this" for that ball
    // constructor passes the info into the class
    // vel is velocity
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    // calling this onto ball object to draw it onto the screen
    draw() {
        //starting the drawing
        ctx.beginPath();
        ctx.fillStyle = this.color;
        // the dimensions of the ball
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        // filling the ball once it's made
        ctx.fill();
    }

    update() {
        // flipping the velocity so that it doesn't go off page
        // checking if the ball hits the far right edge of the screen
        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        // now left of screen
        if((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        // bottom of screen
        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        // top of screen - top left of screen is (0,0)
        if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        //update the position of the ball no matter what
        this.x += this.velX;
        this.y += this.velY;
    }

    //collision detetection for when the balls hit each other want them to become the same color
    collisionDetect() {
        for(const ball of balls) {
            if(this !== ball) {
                // seeing if balls overlap
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx*dx + dy*dy);

                // if there is a collision, balls change to random color
                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

const balls = [];

// want 25 balls, will add the balls to the list
while(balls.length < 25) {
    const size = random(10, 50);
    // x and y position is random but makes sure fully on screen
    // just like normal Ball call, but with more spaces to see the random better
    // size we randomized in earlier while loop, because need to use it to determine x and y positions
    const ball = new Ball(
        random(0+size, width-size),
        random(0+size, height-size),
        random(-7,7),
        random(-7,7),
        randomRGB(),
        size);
    balls.push(ball);

    //console.log(balls);
}

function loop() {
    // color of canvas - translucent black
    ctx.fillStyle = "rgba(0,0,0,.25";
    // top left to bottom right - whole canvas essentially
    ctx.fillRect(0,0,width,height);

    // call the functions to draw and move all balls
    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    // calls itself, but makes the animation smooth
    requestAnimationFrame(loop);
}

// call function to start it
loop();