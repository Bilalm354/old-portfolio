// learning from https://www.youtube.com/watch?v=8uIt9a2XBrw&feature=share


var ctx, ctrl, rect, loop;

ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.height = 180;
ctx.canvas.width = 320;

rect = {
    height: 32,
    jumping: false,
    width: 32,
    x: 144, // center 
    x_vel: 0,
    y: 0,
    y_vel: 0,
};

var dir;


let d;

document.addEventListener("keydown", direction);
document.addEventListener("keyup", no);

function direction(evt) {
    let key = event.keyCode;
    if (key == 37) {
        d = "LEFT";
    } else if (key == 38) {
        d = "UP";
    } else if (key == 39) {
        d = "RIGHT";
    } else if (key = 40) {
        d = "DOWN";
    }
}

function no(evt) {
    let key = event.keyCode;
    if (key == 37) {
        d = "no";
    } else if (key == 38) {
        d = "no";
    } else if (key == 39) {
        d = "no";
    } else if (key = 40) {
        d = "no";
    }
}





//
//ctrl = {
//
//    left: false,
//    right: false,
//    up: false,
//
//    keyListener: function (event) {
//
//        var dir;
//
//        switch (event.keyCode) {
//
//            case 37: // left
//                dir = "left";
//                break;
//
//            case 38: // up
//                dir = "up";
//                break;
//
//            case 39: //right
//                dir = "right";
//                break;
//
//        }
////        console.log(dir);
//
//    }
//
//};



loop = function () {


    if (d == "UP" && rect.jumping == false) {

        rect.y_vel -= 20;
        rect.jumping = true;
    }

    if (d == "LEFT") {

        rect.x_vel -= 0.5; // the box accelerates at 0.5 pixels/ frame

    }


    if (d == "RIGHT") {

        rect.x_vel += 0.5;

    }


    rect.y_vel += 1.5; // gravity 
    rect.x += rect.x_vel;
    rect.y += rect.y_vel;
    rect.x_vel *= 0.9; // friction
    rect.y_vel *= 0.9; // friction 

    // collision detection y axis - if rectangle is falling below floor line

    // 32 for block size and 16 for line 
    if (rect.y > 180 - 16 - 32) {
        rect.jumping = false;
        rect.y = 180 - 16 - 32;
        rect.y_vel = 0;

    }


    // make wrap around sides.
    if (rect.x < -32) {
        rect.x = 320;

    } else if (rect.x > 320) {

        rect.x = -32;

    }

    // draw canvas
    ctx.fillStyle = "#202020";
    ctx.fillRect(0, 0, 320, 180);
    ctx.fill();

    // draw rectangle
    ctx.fillStyle = 'blue';

    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fill();


    // draw line
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 164, 320, 180);


    window.requestAnimationFrame(loop);

};


//call update when browser is ready to draw again

//window.addEventListener("keydown", keyListener);
//window.addEventListener("keyup", ctrl.keyListener);

//window.addEventListener("keydown", function (event) {
//    console.log(event.which);
//})

window.requestAnimationFrame(loop);
