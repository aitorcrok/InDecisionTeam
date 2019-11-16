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
    this.returnedBulletPool = this.add.group();
    this.enemyPool = this.add.group();
    this.senor = new Player(this);
    this.enemyPool.add(new Enemy(this, 200, 100,true));
    this.enemyPool.add(new Enemy(this, 400, 100, false));
    this.enemyPool.add(new Enemy(this, 600, 100, true));
    this.enemyPool.add(new Enemy(this, 800, 100, false));
    this.physics.add.collider(this.bulletPool,this.senor,this.hitBullet,null,this); 
    this.physics.add.collider(this.returnedBulletPool, this.enemyPool, this.hitBullet, null, this); 
  }

 

  hitBullet(bullet, ship){

    if(ship.parry == true){
      var desvio = 0;
      if(bullet.x < ship.x){
        desvio = ship.x -bullet.x;
        bullet.body.setVelocity(-10*desvio, -bullet.speed);
      }
      else if(bullet.x > ship.x){
        desvio = bullet.x - ship.x;
        bullet.body.setVelocity(10*desvio, -bullet.speed);
      }
      else{
        bullet.body.setVelocity(2+ Math.random()*8, -bullet.speed);
      }
      this.bulletPool.remove(bullet);
      this.returnedBulletPool.add(bullet);
    }
    else{
      bullet.destroy();
      if(ship.divide){
        this.divide(ship);
      }
      ship.receiveDamage();      
    }

  }

  divide(enemy)
  {
    this.enemyPool.add(new Enemy(this, enemy.x + 50, enemy.y,false));
    this.enemyPool.add(new Enemy(this, enemy.x - 50, enemy.y,false));
  }

  

  update(time, delta) {
  }
}