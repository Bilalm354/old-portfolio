var c = document.getElementById("canvas");
var ctx = c.getContext("2d");




//create the unit
const box = 32;

//create the snake
let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
};

//create the food
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}

//create score variable
let score = 0;


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

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "blue" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    //food

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //    /new head
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.pop();

    snake.unshift(newHead);


    //direction
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    //if snake eats the food
    console.log(d)
    console.log(snake)

}

//draw every 100ms 

let game = setInterval(draw, 100);
