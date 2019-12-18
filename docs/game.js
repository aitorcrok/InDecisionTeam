import Player from '/InDecisionTeam/Player.js'
import Enemy from '/InDecisionTeam/enemy.js'
import LevelManager from '/InDecisionTeam/levelManager.js'
const pointsPerLife = 1000;
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }
  init(level){
    this.level = level;
    if(this.level < 0) this.level = 0;
  }
  preload() { 
    this.load.image('fondo', '/InDecisionTeam/sprites/fondo.jpg');
    this.load.image('fade', '/InDecisionTeam/sprites/fade.png');
    this.load.image('player', '/InDecisionTeam/sprites/player.png');
    this.load.image('std_enemy', '/InDecisionTeam/sprites/std_enemy.png');
    this.load.image('div_enemy', '/InDecisionTeam/sprites/div_enemy.png');
    this.load.image('bullet', '/InDecisionTeam/sprites/new_bullet.png');
    this.load.image('coin', '/InDecisionTeam/sprites/coin.png');
    this.load.image('asteroid', '/InDecisionTeam/sprites/asteroid.png');
    this.load.spritesheet('playerNew', '/InDecisionTeam/sprites/PlayerSpritesheet.png', {frameWidth: 84, frameWidth: 84});   
  }

  create() {  
    this.add.image(0, 0, 'fondo').setOrigin(0, 0);   
    this.add.image(0, 450, 'fade').setOrigin(0, 0);   
    this.score = 0;
    this.scene.run("hud");
    this.changeLevel = 1500;    //Tiempo que tarda en pasar de nivel
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
    this.physics.add.collider(this.asteroidPool, this.player, this.hitAsteroid, null, this);
    this.u = this.input.keyboard.addKey('U');
    this.u.on('down', event => {this.pauseMenu()});
    this.levelManager = new LevelManager();
  }
  update(time, deltaTime){
    if(!this.changingScene && this.u.isDown){   //Control del menu de pausa
      this.changingScene = true;
      this.pauseMenu();
    }
    if(this.enemyPool.getLength() == 0 && this.changingLevel != true){
      if(this.level <= this.levelManager.numLevels - 1){
        this.level++;
        this.time.delayedCall(this.changeLevel, this.levelManager.changeLevel, [this.level], this);
        this.changingLevel = true;
      }
      else if(this.level > this.levelManager.numLevels - 1){
        this.score += (this.player.getHealth() * pointsPerLife);
        this.endMenu();
      }
    }
  }
  //cambia de escena
  endMenu(){
    this.scene.run("end menu", this.score);
    this.scene.sleep("hud");
    this.scene.sleep("game");
  }
  pauseMenu(){
    this.u.isDown = false;
    this.changingScene = false;
    this.scene.run("menu");
    this.scene.pause("hud");
    this.scene.pause("game");
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
  killedEnemy(points){
    this.score += points;
    this.scene.manager.getScene("hud").updateScore(this.score);
  }
  hitAsteroid(asteroide,ship){

    this.asteroidPool.remove(asteroide);
    asteroide.destroy();
    ship.receiveDamage(1);    
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
    this.enemyPool.add(new Enemy(this, enemy.div1.x, enemy.div1.y ,false,'std_enemy', enemy.div1.bullSpX, enemy.div1.bullSpY));
    this.enemyPool.add(new Enemy(this, enemy.div2.x, enemy.div2.y,false,'std_enemy', enemy.div2.bullSpX, enemy.div2.bullSpY));
  }
}