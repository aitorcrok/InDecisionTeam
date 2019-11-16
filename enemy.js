import Ship from '/ship.js';
import Bullet from '/bullet.js'
import Coin from '/coin.js'
export default class Enemy extends Ship{
    constructor(scene, x, y,divide){
        super(scene, x, y, 0, 'enemy', 1);
        this.divide = divide;
        this.setScale(0.2);
        this.time = 0;
        this.delayShots = Math.random() * (500 - 1000) + 1000;
        console.log(this.delayShots);
        this.startShoot();
        }
    startShoot(){
        this.timer = this.scene.time.addEvent({
            delay: this.delayShots,
            callback: this.shoot,
            callbackScope: this,
            loop: true
        });
    }
    shoot(){
        var bu = new Bullet(this.scene, this.x, this.y, 500, 'bullet');        
    }
    stopShoot(){
        this.timer.remove();
    }
    receiveDamage(){        
        this.health--;
        if(this.health == 0){            
            this.stopShoot();
            this.spawnCoins();            
            this.destroy();
        }
    }
    
    spawnCoins(){
        var coin = new Coin(this.scene, this.x, this.y, 400, 'coin');
        console.log("coin");
    }
}