export default class hud extends Phaser.Scene {
    constructor(){
        super({key: 'hud'});
    }
    create(){
        this.health = new Phaser.GameObjects.Sprite(this, 20, 20, 'testo');
        this.add.text(20, 20, "Eskereee");
        this.u = this.input.keyboard.addKey('U');
        this.changing = false;
    }
    update(){
        if(!this.changing && this.u.isDown){
            this.changing = true;
            this.change();
        }
    }
    change(){
        this.u.isDown = false;
        this.changing = false;
        this.scene.run("main");
        this.scene.sleep("hud");        
    }
}