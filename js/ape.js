// Enemies our player must avoid
var Enemy = function() {
    var obj = object.create (Enemy.prototype); // Variables applied to each of our instances go here,
        obj.loc = loc; // we've provided one for you to get started
        return obj;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    console.logs  
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed);
    this.y = 83*this.row;

    if(this.x > 6 * 83){
        return;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
 
Enemy.prototype.return = function() {
    this.col = -1;
    this.row = getRandomInt(1,3);
    this.x = 101 * this.col;
    this.y = 83 *this.row;
    tis.speed = getRandomInt(2,6);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    var obj = object.create (Player.prototype); // Variables applied to each of our instances go here,
        obj.loc = loc; // we've provided one for you to get started
        return obj;

this.sprite = "images/char-boy.png";

Player.prototype.update = function(dt) {
    if(this.y < 0) {
        this.loc++;
        this.x = 101;
        this.y = 83;
    }
};

// a handleInput() method.
var Player = function() {
    this.char-boy = ["images/char-boy.png"];
    this.sprite++;
    this.x = 150;
    this.y = 250;
};

var Enemy = new enemy({x: 30, y: 60})
console.log(Enemy.loc

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});