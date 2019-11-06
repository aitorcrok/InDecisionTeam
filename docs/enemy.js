import Ship from '/ship.js';
import Bullet from '/bullet.js'
export default class Enemy extends Ship{
    constructor(scene){
        super(scene, 500, 500, 0, 'enemy', 3);
        this.setScale(0.1);
        this.time = 0;
    }
    preUpdate(time, delta){
        if(this.time == 0){
            this.time = time;
        }
        if(time > this.time + 100){
            var bu = new Bullet(this.scene, this.x, this.y, 'bullet')
        }
    }
}