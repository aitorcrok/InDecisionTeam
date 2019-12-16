import Entity from '/InDecisionTeam/entity.js';
export default class Coin extends Entity{
    constructor(scene, newX, newY,newSpeed,sprite){
        super(scene, newX, newY, 0, newSpeed, sprite);
        this.scene.coinPool.add(this.scene.add.existing(this));
        this.value = 5;
        this.body.setCircle(this.body.halfWidth);
    }
}