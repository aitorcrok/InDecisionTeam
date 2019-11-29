export default class coconut extends Phaser.Scene {
    constructor(){
        super({key: 'coconut'});
    }
    create(){
        this.health = new Phaser.GameObjects.Sprite(this, 20, 20, 'testo');
    }
}