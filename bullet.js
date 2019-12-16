import Entity from '/InDecisionTeam/entity.js';
export default class Bullet extends Entity{
    constructor(scene, newX, newY, speedX, speedY,sprite){
        super(scene, newX, newY, speedX, speedY, sprite);
        this.speed = speedY;
        this.scene.bulletPool.add(this.scene.add.existing(this));
        this.body.setCollideWorldBounds(true);
        this.body.setBounce(1);
        this.body.setCircle(this.body.halfWidth - 5, 5, 5);
    }
}