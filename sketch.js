var form1,form2, user,game;
var gameState=0;
var database;
var userCount;
var userIndex


function setup() {
    canvas = createCanvas(1000, 1000);
    database=firebase.database();

    user=new User();
    user.getUserCount();
   
    game=new Game();
    game.getState();
    game.start();
 
}
function draw() {
    background(245);
}