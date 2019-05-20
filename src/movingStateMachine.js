const commands = {
    run: {
        start: function(marine, speed) {
            let direction = Math.sign(speed) >= 0 ? "Right" : "Left";
            marine.acceleration.x += speed * marine.runSpeedFactor;
            marine.playAnimation("run" + direction);

        },

        changeState: function(newState, marine, speed) {
            switch (newState) {
                case "jump":
                    marine.velocity.x /= 1.4;
                    commands[newState].start(marine, speed);
                    return commands[newState];
                case "stay":
                case "duck":
                    commands[newState].start(marine, speed);
                    return commands[newState];
                case "run":
                    this.start(marine, speed);
                    return this;
            }
        }

    },
    jump: {
        start: function(marine, speed) {
            let direction = Math.sign(marine.velocity.x) >= 0 ? "Right" : "Left";
            marine.acceleration.y += speed * marine.jumpSpeedFactor;
            marine.playAnimation("jump" + direction);
        },
        changeState: function(newState, marine, speed = 0) {
            switch (newState) {
                case "stay":
                    if (!this.inAir(marine)) {
                        commands[newState].start(marine, speed);
                        return commands[newState];
                    } else
                        return this;
                case "run":
                    marine.acceleration.x += speed * 0.8;
                    return this;
                case "jump":
                    marine.acceleration.y += 9;
                default:
                    return this;
            }
        },
        inAir: function(marine) {
            return Math.floor(marine.velocity.y) != 0;
        }
    },
    duck: {
        start: function(marine) {
            let direction = Math.sign(marine.velocity.x) >= 0 ? "Right" : "Left";
            marine.playAnimation("duck" + direction);
            marine.height = 42;
        },
        changeState: function(newState, marine, speed = 0) {
            switch (newState) {
                case "stay":
                case "jump":
                    if (this.unduck(marine)) {
                        commands[newState].start(marine, speed);
                        return commands[newState];
                    }
                case "run":
                    marine.acceleration.x += speed * 0.15;
                    return this;
                default:
                    return this;
            }
        },
        // unduck returns true if it was possible to unduck
        unduck: function(marine) {
            if (marine.collisionDetector.canGoXY(marine, kontra.vector(0, -8), 1)) {
                marine.height = 50;
                marine.realPosition.y -= 8;
                return true
            }
            return false;
        }
    },
    stay: {
        start: function(marine, speed) {
            let direction = Math.sign(marine.velocity.x) >= 0 ? "Right" : "Left";
            marine.playAnimation("stay" + direction);
            marine.acceleration = kontra.vector(0, 0);
            let slipImpact = (1 - marine.slipImpact) * 20;
            marine.velocity = kontra.vector(marine.velocity.x * (0.15 + slipImpact), marine.velocity.y * 0.15);
        },
        changeState: function(newState, marine, speed = 0) {
            commands[newState].start(marine, speed);
            return commands[newState];

        }
    }
}
class MovingStateMachine {
    constructor(marine) {
        this.marine = marine;
        this.currentState = commands['stay'];
    }

    changeState(newState, speed = 0) {
        this.currentState = this.currentState.changeState(newState, this.marine, speed);
    }
    setState(newState) {
        this.currentState = commands[newState];
        this.currentState.start(this.marine, 0);
    }
}