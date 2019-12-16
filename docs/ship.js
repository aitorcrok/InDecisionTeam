import Entity from '/InDecisionTeam/entity.js';
export default class Ship extends Entity{
    constructor(scene, newX, newY, newSpeed, sprite, newHealth){
        super(scene, newX, newY, 0, 0, sprite);
        this.scene.add.existing(this);
        this.health = newHealth;
        this.speed = newSpeed;
        this.body.setCollideWorldBounds(true);
        this.body.setMaxSpeed(this.speed);
    }
    preUpdate(){
    }
    setVelocityX(x){
        this.body.setVelocity(this.speed * x, this.body.velocity.y);
    }
    setVelocityY(y){
        this.body.setVelocity(this.body.velocity.x, this.speed * y);
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health <= 0){
            this.destroy();
            console.log("die");
        }
    }
    
}