import Player from '/InDecisionTeam/Player.js'
import Enemy from '/InDecisionTeam/enemy.js'
import Coin from '/InDecisionTeam/coin.js';
import Asteroide from '/asteroide.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/sprites/favicon.png');
    this.load.image('enemy', '/sprites/enemy.png');
    this.load.image('bullet', '/sprites/bullet.png');//sprite bolita    
    this.load.image('coin', '/sprites/coin.png');
    this.load.image('asteroid', '/sprites/asteroid.png');
  }

  create() {
    this.score = 0;
    this.physics.world.setBoundsCollision(true, true, false, false);    
    this.bulletPool = this.add.group();
    this.coinPool = this.add.group();
    this.asteroidPool = this.add.group();
    this.returnedBulletPool = this.add.group();
    this.enemyPool = this.add.group();
    this.coinO = new Coin(this, 400, 200, 0, 'coin');
    this.senor = new Player(this);
    this.enemyPool.add(new Enemy(this, 200, 100,true));
    this.enemyPool.add(new Enemy(this, 400, 100, false));
    this.enemyPool.add(new Enemy(this, 600, 100, true));
    this.enemyPool.add(new Enemy(this, 800, 100, false));
    this.asteroidPool.add(new Asteroide(this,100,100,100,'asteroid'));
    this.asteroidPool.add(new Asteroide(this,200,100,50,'asteroid'));
    this.physics.add.collider(this.bulletPool,this.senor,this.hitBullet,null,this); 
    this.physics.add.collider(this.returnedBulletPool, this.enemyPool, this.hitBullet, null, this); 
    this.physics.add.collider(this.coinPool, this.senor, this.collectCoins, null, this);
    this.physics.add.collider(this.asteroidPool, this.senor, this.hitAsteroid, null, this);
  }

 

  hitBullet(bullet, ship){

    if(ship.parry){
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
      ship.receiveDamage(1);      
    }

  }
  hitAsteroid(asteroide,ship){

    this.asteroidPool.remove(asteroide);
    asteroide.destroy();
    ship.receiveDamage(50);    
  }

  collectCoins(coinK)
  {
    this.score += coinK.value;  
    this.coinPool.remove(coinK);
    coinK.destroy();
    console.log(this.score);          
  }

  divide(enemy)
  {
    this.enemyPool.add(new Enemy(this, enemy.x + 50, enemy.y,false));
    this.enemyPool.add(new Enemy(this, enemy.x - 50, enemy.y,false));
  }

  

  update(time, delta) {
  }
}