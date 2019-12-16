import Player from '/InDecisionTeam/Player.js'
import Enemy from '/InDecisionTeam/enemy.js'
import Coin from '/InDecisionTeam/coin.js';
import Asteroide from '/InDecisionTeam/asteroide.js'
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  preload() {  
    this.load.image('player', '/InDecisionTeam/sprites/player.png');
    this.load.image('std_enemy', '/InDecisionTeam/sprites/std_enemy.png');
    this.load.image('div_enemy', '/InDecisionTeam/sprites/div_enemy.png');
    this.load.image('bullet', '/InDecisionTeam/sprites/new_bullet.png');
    this.load.image('coin', '/InDecisionTeam/sprites/coin.png');
    this.load.image('asteroid', '/InDecisionTeam/sprites/asteroid.png');
    this.load.spritesheet('playerNew', '/InDecisionTeam/sprites/PlayerSpritesheet.png', {frameWidth: 84, frameWidth: 84});
  }

  create() {
    this.score = 0;
    this.level = 0;
    this.scene.run("hud");
    this.changeLevel = 1000;    //Tiempo que tarda en pasar de nivel
    this.changingLevel = false; //variable para controlar el paso de nivel
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.bulletPool = this.add.group();
    this.coinPool = this.add.group();
    this.asteroidPool = this.add.group();
    this.returnedBulletPool = this.add.group();
    this.enemyPool = this.add.group();
    this.player = new Player(this);
    this.playerCollider = this.physics.add.collider(this.bulletPool,this.player,this.hitBullet,null,this);
    this.physics.add.collider(this.returnedBulletPool, this.enemyPool, this.hitBullet, null, this); 
    this.physics.add.collider(this.coinPool, this.player, this.collectCoins, null, this);
    this.u = this.input.keyboard.addKey('U');
    this.t = this.input.keyboard.addKey('T');
    this.u.on('down', event => {this.change()});
    this.t.on('down', event => {this.scene.manager.getScene("hud").metod()});
  }
  update(time, deltaTime){
    if(!this.changingScene && this.u.isDown){   //Control del menu de pausa
      this.changingScene = true;
      this.change();
  }
    if(this.enemyPool.getLength() == 0 && this.changingLevel != true){
      this.level++;
      this.time.delayedCall(this.changeLevel, this.createLevel, [this.level], this);
      this.changingLevel = true;
    }
  }
  //cambia de escena
  change(){
    this.u.isDown = false;
    this.changingScene = false;
    this.scene.run("menu");
    this.scene.sleep("hud");
    this.scene.sleep("game");
  }
  createLevel(level){   //Carga el nivel (mirar una forma mejor?)
    switch(level){
      case 1:
          this.enemyPool.add(new Enemy(this, 400, 100, false, 'std_enemy', 0, 500));
        break;
      case 2:
          this.enemyPool.add(new Enemy(this, 200, 100, true, 'div_enemy', 100, 500));
          this.enemyPool.add(new Enemy(this, 400, 100, false, 'std_enemy', 200, 500));
          this.enemyPool.add(new Enemy(this, 600, 100, true, 'div_enemy', 300, 500));
          this.enemyPool.add(new Enemy(this, 800, 100, false, 'std_enemy', 400, 500));
          break;
      case 3:
          this.enemyPool.add(new Enemy(this, 200, 100, true, 'div_enemy', 0, 250));
          this.enemyPool.add(new Enemy(this, 400, 100, false, 'std_enemy', 0, 250));
          this.enemyPool.add(new Enemy(this, 600, 100, true, 'div_enemy', 150, 400));
          this.enemyPool.add(new Enemy(this, 800, 100, false, 'std_enemy', 150, 400));
          this.enemyPool.add(new Enemy(this, 700, 250, false, 'std_enemy', -150, 250));
          this.enemyPool.add(new Enemy(this, 500, 250, false, 'std_enemy', 500, 250));
          this.enemyPool.add(new Enemy(this, 300, 250, false, 'std_enemy', -500, 250));
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
      else if(!ship.immune){
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
    this.scene.manager.getScene("hud").updateScore(this.score);
    this.coinPool.remove(coinK);
    coinK.destroy();      
  }

  divide(enemy)
  {
    this.enemyPool.add(new Enemy(this, enemy.x + 50, enemy.y,false,'std_enemy', enemy.getBullSp('x'), enemy.getBullSp('y')));
    this.enemyPool.add(new Enemy(this, enemy.x - 50, enemy.y,false,'std_enemy', -enemy.getBullSp('x'), enemy.getBullSp('y')));
  }
}