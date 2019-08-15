var c = document.getElementById("canvas");
var ctx = c.getContext("2d");




//create the unit
const box = 32;

//create the snake head
var snakeX = 9 * box;
var snakeY = 10 * box;

//create snake speed
var speedX = box;
var speedY = 0;

//create score variable
let score = 0;

//create snake tail
//var tailX;
//var tailY;


// snake length
var snakeLen = 0;
var tailX;
var tailY;
let tail = [];

//create the food
var foodX = Math.floor(Math.random() * 17 + 1) * box;
var foodY = Math.floor(Math.random() * 15 + 3) * box;





//control snake

let d;

document.addEventListener("keydown", direction);

function direction(evt) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if (key = 40 && d != "UP") {
        d = "DOWN";
    }
}


//draw to canvas

function draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.height, canvas.width);


    //snake
    ctx.fillStyle = 'black';
    ctx.fillRect(snakeX, snakeY, box, box);




    //food
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX, foodY, box, box);



    //direction
    if (d == "LEFT") speedX = -box;
    if (d == "LEFT") speedY = 0;
    //    if (d == "LEFT") tailX = snakeX + 2 * box;
    //    if (d == "LEFT") tailY = snakeY;
    if (d == "LEFT")
        for (let i = 0; i < score; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snakeX + box * (i + 1), snakeY, box, box);
        }

    if (d == "UP") speedX = 0;
    if (d == "UP") speedY = -box;
    if (d == "UP")
        for (let i = 0; i < score; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snakeX, snakeY + box * (i + 1), box, box);
        }

    //    if (d == "UP") tailX = snakeX;
    //    if (d == "UP") tailY = snakeY + 2 * box;

    if (d == "RIGHT") speedX = box;
    if (d == "RIGHT") speedY = 0;
    //snake tail right
    if (d == "RIGHT")
        for (let i = 0; i < score; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snakeX - box * (i + 1), snakeY, box, box);
        }
    //    if (d == "RIGHT") tailX = snakeX - 2 * box;
    //    if (d == "RIGHT") tailY = snakeY;

    if (d == "DOWN") speedX = 0;
    if (d == "DOWN") speedY = box;
    if (d == "DOWN")
        for (let i = 0; i < score; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(snakeX, snakeY - box * (i + 1), box, box);
        }
    //    if (d == "DOWN") tailX = snakeX;
    //    if (d == "DOWN") tailY = snakeY - 2 * box;
    //tail
    //    ctx.fillStyle = 'black';
    //    ctx.stroke = 'white';
    //    ctx.fillRect(tailX, tailY, box, box);

    //update position

    snakeX = snakeX + speedX;
    snakeY = snakeY + speedY;




    //if snake eats the food so if snake and food possess same space

    if (snakeX == foodX && snakeY == foodY) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(foodX, foodY, box, box);
        foodX = Math.floor(Math.random() * 17 + 1) * box;
        foodY = Math.floor(Math.random() * 15 + 3) * box;
        score++;
        var snakeLen = score;
    }

    //wrap
    if (snakeX > canvas.width - box) {
        snakeX = 0;
    }

    if (snakeX < 0) {
        snakeX = canvas.width - box;
    }

    if (snakeY > canvas.height - box) {
        snakeY = 0;
    }

    if (snakeY < 0) {
        snakeY = canvas.height - box;
    }

    // scoreboard
    ctx.fillStyle = 'white';
    ctx.fillText(score, 30, 50);
    ctx.fillStyle = 'white';
    ctx.fillText("Score", 30, 10);
}

//draw every 100ms 

let game = setInterval(draw, 100);
