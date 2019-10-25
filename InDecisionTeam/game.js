import Player from '/InDecisionTeam/Player.js'
import Enemy from '/InDecisionTeam/enemy.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/InDecisionTeam/sprites/favicon.png');
    this.load.image('enemy', '/InDecisionTeam/sprites/enemy.png');
    this.load.image('bullet', '/InDecisionTeam/sprites/bullet.png');//sprite bolita
  }

  create() {
    var senor = new Player(this);
    var enemy = new Enemy(this);
  }

  update(time, delta) {
  }
}