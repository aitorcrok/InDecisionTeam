import Entity from '/InDecisionTeam/entity.js';
export default class Bullet extends Entity{
    constructor(scene, newX, newY,newSpeed,sprite){
        super(scene, newX, newY, newSpeed, sprite);
        this.speed = newSpeed;
        this.scene.bulletPool.add(this.scene.add.existing(this));
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(1);
    }
}