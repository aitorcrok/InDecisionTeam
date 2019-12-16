import Ship from '/InDecisionTeam/ship.js';
import Bullet from '/InDecisionTeam/bullet.js'
import Coin from '/InDecisionTeam/coin.js'
export default class Enemy extends Ship{
    constructor(scene, x, y,divide,sprite, bullSpX, bullSpY, divPos1){
        super(scene, x, y, 0, sprite, 1);
        this.divide = divide;
        this.setScale(0.5);
        this.time = 0;
        this.delayShots = Math.random() * (500 - 1000) + 1000;
        this.startShoot();
        this._bullSpX = bullSpX;
        this._bullSpY = bullSpY;
        this.divPos1 = divPos1;
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
        var bu = new Bullet(this.scene, this.x, this.y, this._bullSpX, this._bullSpY, 'bullet');        
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
    getBullSp(which){
        if(which === 'x') return this._bullSpX;
        else if(which === 'y') return this._bullSpY;
    }
}