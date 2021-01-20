var gameState = 0
var playerCount = 0
var database
var form30
var game4k
var player45



function setup ()
{
    createCanvas(400,400)
    database = firebase.database();
    game4k = new game();
    game4k.getState();
    game4k.start();
}



function draw()
{
  //  background("white")
    
}