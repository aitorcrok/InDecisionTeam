import Ship from '/ship.js';
import Bullet from '/bullet.js'
export default class Enemy extends Ship{
    constructor(scene){
        super(scene, 500, 0, 0, 'enemy', 3);
        this.setScale(0.2);
        this.time = 0;
        this.delayShots = Math.random() * (5000 - 1000) + 1000;
        console.log(this.delayShots);
        this.startShoot();
        }
    startShoot(){
        console.log("start shooting");
        this.timer = this.scene.time.addEvent({
            delay: this.delayShots,
            callback: this.shoot,
            callbackScope: this,
            loop: true
        });
    }
    shoot(){
        console.log("shoooot");
        var bu = new Bullet(this.scene, this.x, this.y, 500, 'bullet');
    }
    stopShoot(){
        this.timer.remove();
    }
}