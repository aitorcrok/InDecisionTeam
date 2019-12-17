import Entity from '/InDecisionTeam/entity.js';
export default class Asteroid extends Entity{
    constructor(scene, newX, newY,speedX, speedY,sprite){
        super(scene, newX, newY, speedX, speedY, sprite);
        this.scene.asteroidPool.add(this.scene.add.existing(this));
        this.setScale(0.1);
    }
    preUpdate(){
        if(this.y > 800){
            this.destroy();
        }
    }
    
}