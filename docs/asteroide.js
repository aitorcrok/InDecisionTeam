export default class Asteroid extends Phaser.GameObjects.Sprite{
    constructor(scene, newX, newY,newSpeed,sprite){
        let x = newX;
        let y = newY;
        super(scene, x, y, sprite);
        this.scene.asteroidPool.add(this.scene.add.existing(this));
        this.scene.physics.add.existing(this);
        this.speed = newSpeed;        
        this.setScale(0.1);
        this.body.setVelocity(0, this.speed);
        this.body.immovable = true;
    }
    preUpdate(){
        if(this.y > 800 || this.y < 0){
            this.destroy();
        }
    }
    
}