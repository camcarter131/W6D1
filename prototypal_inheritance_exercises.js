// ----------------------- inherits ----------------------- //

Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject() { 
    this.speed = 10;
}

function Ship() { 
    this.type = "sail";
    MovingObject.apply(this);
}

Ship.inherits(MovingObject);

function Asteroid() { 
    this.type = "space rock";
    MovingObject.apply(this);
}

Asteroid.inherits(MovingObject);


const ship = new Ship();
const asteroid = new Asteroid();

console.log(ship.speed);
// console.log(asteroid.__proto__.__proto__);
// console.log(Asteroid.__proto__);
console.log(asteroid.speed);