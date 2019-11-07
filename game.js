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
    this.physics.world.setBoundsCollision(true, true, false, false);
    this.bulletPool = this.add.group();
    this.senor = new Player(this);
    this.enemy = new Enemy(this);
    this.physics.add.collider(this.bulletPool,this.senor,this.hitBullet,null,this);
    
  }

 

  hitBullet(bullet, senor){

    if(senor.estado == true){
      var desvio = 0;
      if(bullet.x < senor.x){

        desvio = senor.x -bullet.x;
        bullet.body.setVelocity(-10*desvio, -bullet.speed);
      }
      else if(bullet.x > senor.x){
        desvio = bullet.x - senor.x;
        bullet.body.setVelocity(10*desvio, -bullet.speed);
      }
      else{
        bullet.body.setVelocity(2+ Math.random()*8, -bullet.speed);
      }
    }

  }

  update(time, delta) {
  }
}