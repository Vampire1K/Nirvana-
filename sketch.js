var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;

var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, track2;

var Car1Image, car2Image,  car3Image, car4Image;

function preload(){
  track = loadImage("../images/track.jpg")
  track2 = loadImage("../images/track2.png");
  car1 = loadImage("../images/car1.png");
  car2 = loadImage("../images/car2.png");
  car3 = loadImage("../images/car3.png");
  car4 = loadImage("../images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
     game.update(1)

  }

  if(gameState === 1){
    clear();
    game.play();

  }

}
