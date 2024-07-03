//window.alert("The Webpage has been loaded");

let img;
let xPos;
let yPos;
let xSpeed = 5;
let ySpeed = 5;
let imgWidth = 100;
let imgLength = 75;

function preload(){
    img = loadImage('./images/DvD_Logo.png');
}

// function setup(){
//    createCanvas(500, 300);
//    background(0);
//    circle(width/2, height/2, 280);
//    quad(100, 190, 100, 100, 400, 100, 400, 190);
//    circle(width/2, height/2, 205);
//    triangle(250, 25, 100, 220, 400, 220);
//    circle(width/2, height/2, 60);
//}

function setup(){
    createCanvas(800, 500);
    xPos = 0;
    yPos = 0;
}

function draw(){
    background(214, 201, 169);
    image(img, xPos, yPos, imgWidth, imgLength);
    xPos += xSpeed;
    yPos += ySpeed;
    if (xPos > 800-imgWidth|| xPos < 0){
        xSpeed = xSpeed * -1;
    }
    if (yPos > 500-imgLength || yPos < 0){
        ySpeed = ySpeed * -1;
    }
}

