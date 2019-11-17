export default class Ship extends Phaser.GameObjects.Sprite{
    constructor(scene, newX, newY, newSpeed, sprite, newHealth){
        let x = newX;
        let y = newY;
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.speed = newSpeed;
        this.health = newHealth;
        this.body.setCollideWorldBounds(true);
        this.body.setMaxSpeed(this.speed);
        this.body.immovable = true;
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