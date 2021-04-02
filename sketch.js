var ball;
var database;

function setup(){

    // Connecting to database
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    // refer to the position node inside ball node
    var ballPosition = database.ref('ball/position');

    // .on() - listener
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(){

}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
