// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
// Other Elements (Player paddle and ball)
const playerPaddle = document.querySelector('.player-paddle');
const ball = document.querySelector('.ball');

// Ball's x and y position and velocity
let ballXPosition = 0;
let ballYPosition = 0;
let yVelocity = 5;
let xVelocity = 4;

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;


// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    if (computerPaddleYPosition === 0 || computerPaddleYPosition === 400){
        computerPaddleYVelocity *= -1;
    }

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Update the Ball's X and y axis.
    ballXPosition += xVelocity;
    ballYPosition += yVelocity;
    if (ballXPosition === 0 || ballXPosition === 680){
        xVelocity *= -1
    }
    if (ballYPosition === 0 || ballYPosition === 480){
        yVelocity *= -1
    }
    ball.style.top = `${ballYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    
}

// Call the update() function every 35ms
setInterval(update, 35);
