var ball;
var database;
var playerCount;
var gameState= 0
var form;
var player;
var game;


function setup(){

    // Connecting to database
    database = firebase.database();
    createCanvas(500,500);
    
}

function draw(){
    background("white");
    
    
    drawSprites();
}


