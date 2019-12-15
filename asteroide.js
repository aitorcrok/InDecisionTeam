import Entity from '/InDecisionTeam/entity.js';
export default class Asteroid extends Entity{
    constructor(scene, newX, newY,newSpeed,sprite){
        super(scene, newX, newY, newSpeed, sprite);
        this.scene.asteroidPool.add(this.scene.add.existing(this));
        this.speed = newSpeed;        
        this.setScale(0.1);
    }
    preUpdate(){
        if(this.y > 800){
            this.destroy();
        }
    }
    
}