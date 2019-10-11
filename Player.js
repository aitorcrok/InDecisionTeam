export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene){
        let x = Math.random() * 400;
        let y = Math.random() * 400;
        super(scene, x, y, 'testo');
        this.scene.add.existing(this);
    }
    preUpdate(){
        this.y += 5;
        if(this.y > 800) this.y = 0;
    }
}