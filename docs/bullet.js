export default class Bullet extends Phaser.GameObjects.Sprite{
    constructor(scene, newX, newY,newSpeed,sprite){
        let x = newX;
        let y = newY;
        super(scene, x, y, sprite);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.speed = newSpeed;
        this.setScale(0.05);
    }

}