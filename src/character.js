class Character extends Sprite {

    constructor(x, y, animations, AI = true, padding = 0, runSpeedFactor = 1.0, jumpSpeed = -100) {
        super();
        this.collisionDetector = new CollisionDetector();
        this.padding = padding;
        this.realPosition = kontra.vector(x, y);
        this.animations = animations;
        this.runSpeedFactor = runSpeedFactor;
        this.jumpSpeed = jumpSpeed;
        super.init({ x: x, y: y, animations: animations });
        this.stateMachine = new MovingStateMachine(this);
        this.slipImpact = 1;
        this.MAX_RUN_SPEED = 2.4;
        this.AI = AI;
        this.died = false;
        this.jumpSpeedFactor = 1;
    }

    render() {
        super.render();
    }

    updateAnimation(animation, dt, ttl) {
        ttl--;
        if (animation) {
            animation.update(dt);
        }
    }
    updatePosition(dt, padding) {
        this.velocity.add(this.acceleration, dt);
        if (this.collisionDetector.canGoXD(this, this.velocity)) {
            let xChangeVector = kontra.vector(this.velocity.x, 0);
            this.realPosition.add(xChangeVector);
        } else {
            this.velocity.x = 0;
            if (this.AI && !this.died) {
                this.stop();
            }
        }
        if (this.collisionDetector.canGoXY(this, this.velocity)) {

            let yChangeVector = kontra.vector(0, this.velocity.y);
            this.realPosition.add(yChangeVector);
        } else {
            if (this.stateMachine.currentState == commands['jump']) {
                this.stateMachine.changeState("stay", 0);
            }
            this.velocity.y = 0;
            if (this.AI) {
                this.velocity.y = -0.1;

            }
        }
        this.acceleration = kontra.vector(0, 0);
    }

    run(speed) {
        if (!this.died)
            this.stateMachine.changeState("run", speed);
    }
    jump(altitiude) {
        this.stateMachine.changeState("jump", altitiude);
    }
    duck() {
        this.stateMachine.changeState("duck", 0);
    }
    stop() {
        this.stateMachine.changeState("stay", 0);
    }

    limitRunSpeed(velocity) {
        let speed = Math.min(Math.abs(velocity.x), this.MAX_RUN_SPEED * this.runSpeedFactor);
        velocity.x = speed * Math.sign(velocity.x);
    }


    update(dt, cameraShift, padding = 0) {
        this.acceleration.add(kontra.vector(0, 8)); //gravity
        this.acceleration.add(groundFriction(this.velocity, 1.4 * this.slipImpact));
        this.limitRunSpeed(this.velocity);
        this.updatePosition(dt, padding);
        this.updateAnimation(this._ca, dt, this.ttl);

        this.position = kontra.vector(this.realPosition.x - cameraShift.x, this.realPosition.y - cameraShift.y);
    }

}