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
    }
    preUpdate(){
        // if(this.y > 800){this.y = 0; this.x = Math.random() * 1400;this.speed = Math.random()*10;} 
        // if(this.x > 1400)this.x = 0;
    }
    setVelocityX(x){
        this.body.setVelocity(this.speed * x, this.body.velocity.y);
    }
    setVelocityY(y){
        this.body.setVelocity(this.body.velocity.x, this.speed * y);
    }
}