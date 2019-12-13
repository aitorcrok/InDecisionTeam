import Player from '/InDecisionTeam/Player.js'
import Enemy from '/InDecisionTeam/enemy.js'
import Coin from '/InDecisionTeam/coin.js';
import HUD from '/InDecisionTeam/hud.js';
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('testo', '/InDecisionTeam/sprites/favicon.png');
    this.load.image('enemy', '/InDecisionTeam/sprites/enemy.png');
    this.load.image('bullet', '/InDecisionTeam/sprites/bullet.png');//sprite bolita    
    this.load.image('coin', '/InDecisionTeam/sprites/coin.png');
  }

  create() {
    this.score = 0;
    this.level = 0;
    this.hud = this.add.text(20, 20, "Puntuación: " + this.score, {fontSize: '48px'}); 
    this.changeLevel = 1000;    //Tiempo que tarda en pasar de nivel
    this.changingLevel = false; //variable para controlar el paso de nivel
    this.physics.world.setBoundsCollision(true, true, false, false);
    this.bulletPool = this.add.group();
    this.coinPool = this.add.group();
    this.returnedBulletPool = this.add.group();
    this.enemyPool = this.add.group();
    this.senor = new Player(this);
    this.physics.add.collider(this.bulletPool,this.senor,this.hitBullet,null,this); 
    this.physics.add.collider(this.returnedBulletPool, this.enemyPool, this.hitBullet, null, this); 
    this.physics.add.collider(this.coinPool, this.senor, this.collectCoins, null, this);
    this.u = this.input.keyboard.addKey('U');
    this.u.on('down', event => {this.change()});
  }
  update(time, deltaTime){
    if(!this.changingScene && this.u.isDown){
      this.changingScene = true;
      this.change();
  }
    if(this.enemyPool.getLength() == 0 && this.changingLevel != true){
      this.level++;
      this.time.delayedCall(this.changeLevel, this.createLevel, [this.level], this);
      this.changingLevel = true;
    }
  }
  change(){
    this.u.isDown = false;
    this.changingScene = false;
    this.scene.run("hud");
    this.scene.sleep("main");
  }
  createLevel(level){
    switch(level){
      case 1:
          this.enemyPool.add(new Enemy(this, 400, 100, false));
        break;
      case 2:
          this.enemyPool.add(new Enemy(this, 200, 100, true));
          this.enemyPool.add(new Enemy(this, 400, 100, false));
          this.enemyPool.add(new Enemy(this, 600, 100, true));
          this.enemyPool.add(new Enemy(this, 800, 100, false));
          break;
      case 3:
          this.enemyPool.add(new Enemy(this, 200, 100, true));
          this.enemyPool.add(new Enemy(this, 400, 100, false));
          this.enemyPool.add(new Enemy(this, 600, 100, true));
          this.enemyPool.add(new Enemy(this, 800, 100, false));
          this.enemyPool.add(new Enemy(this, 700, 250, false));
          this.enemyPool.add(new Enemy(this, 500, 250, false));
          this.enemyPool.add(new Enemy(this, 300, 250, false));
          break;
    }
    this.changingLevel = false;
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
      ship.receiveDamage();      
    }

  }
  collectCoins(coinK)
  {
    this.score += coinK.value; 
    this.hud.setText("Puntuación: " + this.score);
    this.coinPool.remove(coinK);
    coinK.destroy();
    console.log(this.score);          
  }

  divide(enemy)
  {
    this.enemyPool.add(new Enemy(this, enemy.x + 50, enemy.y,false));
    this.enemyPool.add(new Enemy(this, enemy.x - 50, enemy.y,false));
  }
}