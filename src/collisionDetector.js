class ActionTile {

    constructor(tileId, triggerAction) {
        this.tileId = tileId;
        this.enabled = true;
        this.triggerAction = triggerAction;
    }
    trigger(sprite) {
        if (this.enabled)
            this.triggerAction(sprite);
    }
    disable() {
        this.enabled = false;
    }
}

let jumpTile = new ActionTile(24, function(sprite) {
    jumpSound.play();
    sprite.stateMachine.setState("jump");
    sprite.height = 50;
    sprite.velocity.y = -8.5;
});
let freezeTile = new ActionTile(49, function(sprite) {
    sprite.runSpeedFactor = 0.1;
    sprite.jumpSpeedFactor = 0.25;
});
let teleport = new ActionTile(59, function(sprite) {
    if (sprite == marine)
        gameWin();
    else {
        sprite.ttl = 0;
    }
});

let slipTile = new ActionTile(10, function(sprite) {
    sprite.runSpeedFactor = 1.6;
    sprite.slipImpact = 0.01;
    sprite.MAX_RUN_SPEED = 5;
});
let ACTION_TILES = [jumpTile, freezeTile, slipTile, teleport];



class CollisionDetector {

    canGoRight(sprite, changeVector) {
        let current = kontra.vector(sprite.x + sprite.width - 5 + sprite.padding, sprite.y);

        let pointMiddle = kontra.vector(current.x, current.y + (sprite.height / 2));
        let pointUp = kontra.vector(current.x, current.y);
        let pointDown = kontra.vector(current.x, current.y + sprite.height - 5);

        let collisionTiles = this.collidesWith([pointMiddle, pointUp, pointDown], changeVector);
        this.findAndTriggerActionTiles(sprite, collisionTiles)

        return !includesAny(collisionTiles, BLOCKING_TILES);
    }

    canGoLeft(sprite, changeVector) {
        let current = kontra.vector(sprite.x + 5 + sprite.padding, sprite.y);

        let pointMiddle = kontra.vector(current.x, current.y + (sprite.height / 2));
        let pointUp = kontra.vector(current.x, current.y);
        let pointDown = kontra.vector(current.x, current.y + sprite.height - 5);

        let collisionTiles = this.collidesWith([pointMiddle, pointUp, pointDown], changeVector);
        this.findAndTriggerActionTiles(sprite, collisionTiles)
        return !includesAny(collisionTiles, BLOCKING_TILES);
    }

    canGoUp(sprite, changeVector) {
        let current = kontra.vector(sprite.x, sprite.y - 1);

        let pointMiddle = kontra.vector(current.x + (sprite.width / 2), current.y);
        let collisionTiles = this.collidesWith([pointMiddle], changeVector);
        this.findAndTriggerActionTiles(sprite, collisionTiles)
        return !includesAny(collisionTiles, BLOCKING_TILES);
    }

    canGoDown(sprite, changeVector) {
        let current = kontra.vector(sprite.x - 1, sprite.y + sprite.height);
        let pointMiddle = kontra.vector(current.x + (sprite.width / 2), current.y);
        let pointLeft = kontra.vector(current.x + (sprite.width / 6), current.y);
        let pointRight = kontra.vector(current.x + (5 * sprite.width / 6), current.y);

        let collisionTiles = this.collidesWith([pointMiddle, pointLeft, pointRight], changeVector);
        this.findAndTriggerActionTiles(sprite, collisionTiles)
        return !includesAny(collisionTiles, BLOCKING_TILES);
    }

    canGoXD(sprite, changeVector) {
        let right = changeVector.x > 0;
        return right ? this.canGoRight(sprite, changeVector) :
            this.canGoLeft(sprite, changeVector);
    }

    canGoXY(sprite, changeVector) {
        let down = changeVector.y > 0;
        if (down)
            return this.canGoDown(sprite, changeVector);
        else
            return this.canGoUp(sprite, changeVector);
    }
    collidesWith(spriteHitboxPoints, changeVector) {
        let collisionTiles = [];
        for (let hitboxPoint of spriteHitboxPoints) {
            hitboxPoint.add(changeVector);
            let collisionTile = game.tileEngine.collides(hitboxPoint.x, hitboxPoint.y);
            collisionTiles = collisionTiles.concat(collisionTile);
        }
        return collisionTiles;
    }
    findAndTriggerActionTiles(sprite, collisionTiles) {
        let actionTilesIds = ACTION_TILES.map(tile => tile.tileId);
        sprite.slipImpact = 1;
        sprite.runSpeedFactor = 1;
        sprite.jumpSpeedFactor = 1;
        sprite.MAX_RUN_SPEED = 2.2;
        for (let i = 0; i < collisionTiles.length; i++) {
            let actionTileIndex = actionTilesIds.indexOf(collisionTiles[i]);
            if (actionTileIndex != -1) {
                ACTION_TILES[actionTileIndex].trigger(sprite);
            }
        }
    }
}