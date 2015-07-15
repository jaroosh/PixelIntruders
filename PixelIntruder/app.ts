// Main game.
module Game {
    export class ArmadaGame {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }

        create() {
        }

        preload() {         
        }
    }

    window.onload = () => {
        var game = new ArmadaGame();
    };
}