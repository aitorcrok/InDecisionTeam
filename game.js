import Player from '/Player.js'
import Enemy from '/enemy.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/sprites/favicon.png');
    this.load.image('enemy', '/sprites/enemy.png');
    this.load.image('bullet', '/sprites/bullet.png');//sprite bolita
  }

  create() {
    var senor = new Player(this);
    var enemy = new Enemy(this);
  }

  update(time, delta) {
  }
}