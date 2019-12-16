export default class Entity extends Phaser.GameObjects.Sprite{
    constructor(scene, newX, newY, speedX, speedY, sprite){
        let x = newX;
        let y = newY;
        super(scene, x, y, sprite);
        this.scene.physics.add.existing(this);
        this.body.setVelocity(speedX, speedY);
        this.body.immovable = true;       
    }
    preUpdate(){
        if(this.y > 800 || this.y < 0){
            this.destroy();
        }
    }   
}