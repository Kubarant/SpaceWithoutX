class ComputerTile {

    constructor(computerTileIndexVec, doorIndexes, command, tileWidth = 48, tileHeight = 48) {
        this.computerTI = computerTileIndexVec;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.doorIndexes = doorIndexes;
        this.command = command;
        this.disabled = false;
    }

    isCollidingWith(sprite, tileEng) {
        let xTilePos = this.computerTI.x * this.tileWidth;
        let yTilePos = this.computerTI.y * this.tileHeight
        let XCollision = sprite.realPosition.x + (sprite.width / 2) >= xTilePos && sprite.realPosition.x + (sprite.width / 2) <= xTilePos + this.tileWidth;
        let YCollision = sprite.realPosition.y + (sprite.height / 2) >= yTilePos && sprite.realPosition.y + (sprite.height / 2) <= yTilePos + this.tileHeight;
        return XCollision && YCollision;
    }
    onWin() {
        game.tileEngine.layers[1].data[this.doorIndexes[0].x + (this.doorIndexes[0].y * 100)] = 0;
        game.tileEngine.layers[1].data[this.doorIndexes[1].x + (this.doorIndexes[1].y * 100)] = 0;
        game.tileEngine.layers[1].data[this.doorIndexes[2].x + (this.doorIndexes[2].y * 100)] = 0;
        game.tileEngine.prerender();
        switchToGame();
        marineMates.forEach(marine => marine.jump(-100));
    }

}

class ComputerTileManager {
    constructor(tileEngine) {
        this.tileEngine = tileEngine;
        let tile = new ComputerTile(kontra.vector(15, 17), [kontra.vector(20, 20), kontra.vector(20, 21), kontra.vector(20, 22)], "math");
        let tile2 = new ComputerTile(kontra.vector(41, 15), [kontra.vector(46, 20), kontra.vector(46, 21), kontra.vector(46, 22)], "hangman");
        let tile3 = new ComputerTile(kontra.vector(55, 19), [kontra.vector(66, 20), kontra.vector(66, 21), kontra.vector(66, 22)], "fallout");
        let tile4 = new ComputerTile(kontra.vector(84, 3), [kontra.vector(95, 20), kontra.vector(95, 21), kontra.vector(95, 22)], "like");

        this.tiles = [tile, tile2, tile3, tile4];
    }
    connectIfPosiible(marine) {
        this.tiles.filter(tile => tile.isCollidingWith(marine, this.tileEngine)).map(tile => terminal.execute(tile.command, tile)).forEach(t => switchToTerminal());
    }


}