import Player from '/Player.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/sprites/favicon.png');
  }

  create() {
    var senor = new Player(this);
    this.d = this.input.keyboard.addKey('D');
    this.a = this.input.keyboard.addKey('A');
    this.d.on('down', event => {senor.speedX = 5});
    this.a.on('down', event => {senor.speedX = -5});
  }

  update(time, delta) {
  //   if(!this.a.isDown && !this.d.isDown){
  //     if(Phaser.Input.Keyboard.JustUp(this.a) || Phaser.Input.Keyboard.JustUp(this.a)){
  //       senor.speedX = 0;
  //     }
  //    }

  // }
}