// Enemies our player must avoid
var Enemy = function() {
    var obj = object.create (Enemy.prototype); 
        obj.loc = loc; 
        return obj;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    console.logs  
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

var Player = function() {
    var obj = object.create (Player.prototype); 
        obj.loc = loc; 
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

var allEnemies = [new Enemy(), new Enemy(), new Enemy()];

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
