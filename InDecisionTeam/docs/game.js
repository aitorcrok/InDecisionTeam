import Player from '/InDecisionTeam/Player.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/InDecisionTeam/sprites/favicon.png');
  }

  create() {
    var senor = new Player(this);
    // this.d = this.input.keyboard.addKey('D');
    // this.a = this.input.keyboard.addKey('A');
    // this.d.on('down', event => {senor.setVelocityX(1)});
    // this.a.on('down', event => {senor.setVelocityX(-1)});
  }

  update(time, delta) {
    // if(!this.a.isDown && !this.d.isDown){
    //   if(Phaser.Input.Keyboard.JustUp(this.a) || Phaser.Input.Keyboard.JustUp(this.a)){
    //     this.senor.setVelocityX(0);
    //   }
    //  }
  }
}