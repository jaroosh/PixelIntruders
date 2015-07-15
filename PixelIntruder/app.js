// Main game.
var Game;
(function (Game) {
    var ArmadaGame = (function () {
        function ArmadaGame() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        ArmadaGame.prototype.create = function () {
        };

        ArmadaGame.prototype.preload = function () {
        };
        return ArmadaGame;
    })();
    Game.ArmadaGame = ArmadaGame;

    window.onload = function () {
        var game = new ArmadaGame();
    };
})(Game || (Game = {}));
//# sourceMappingURL=app.js.map
