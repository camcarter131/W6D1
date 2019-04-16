function MovingObject(options) {
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
    );

    ctx.fill();
}

MovingObject.prototype.move = function () {
    const dx = this.vel[0], dy = this.vel[1];
    this.pos[0] += dx;
    this.pos[1] += dy;
}

module.exports = MovingObject;