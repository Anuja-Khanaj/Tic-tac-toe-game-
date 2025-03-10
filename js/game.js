const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    parent: 'game-container', // Attach Phaser to the div
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    console.log("Assets loaded");
}

function create() {
    console.log("Game started!");
}
