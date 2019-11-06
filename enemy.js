import Ship from '/ship.js';
import Bullet from '/bullet.js'
export default class Enemy extends Ship{
    constructor(scene){
        super(scene, 500, 500, 0, 'enemy', 3);
        this.setScale(0.1);
        this.time = 0;
        this.startShoot();
        }
    startShoot(){
        console.log("start shooting");
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            callback: this.shoot,
            callbackScope: this,
            loop: true
        });
    }
    shoot(){
        console.log("shoooot");
        var bu = new Bullet(this.scene, this.x, this.y, 'bullet')
    }
    stopShoot(){
        this.timer.remove();
    }
}