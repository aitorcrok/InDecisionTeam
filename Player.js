export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene){
        let x = Math.random() * 400;
        let y = Math.random() * 400;
        super(scene, x, y, 'testo');
        this.scene.add.existing(this);
        // this.scene.physics.add.existing(this);
        // this.body.ignoreGravity = true;
        this.speed = 5;
        this.speedX = 0;
    }
    // function getSpeed() {
    //     return speed;
    // }
    preUpdate(){
        this.y = this.y + this.speed;
        this.x = this.x + this.speedX;
        if(this.y > 800){this.y = 0; this.x = Math.random() * 1400;this.speed = Math.random()*10;} 
        if(this.x > 1400)this.x = 0;
    }
}