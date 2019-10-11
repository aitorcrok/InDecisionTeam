import Player from '/Player.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/sprites/favicon.png');
  }

  create() {
    //d = this.input.keyboard.addKey('D');
    //this.add.image(100, 100, 'testo');
    //pureeya = this.add.sprite(100, 400, 'testo');
    var senor = new Player(this);
  }

  update(time, delta) {
    //if(d.isDown){senor.y =+ 10};
  }
}