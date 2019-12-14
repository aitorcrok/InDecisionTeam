export default class MainMenu extends Phaser.Scene {
    constructor(){
        super({key: 'main menu'});
    }
    create(){
        this.space = this.input.keyboard.addKey('SPACE');
        this.changin = false;
    }
    update(){
        if(!this.changing && this.space.isDown){
            this.changing = true;
            this.change();
        }
    }
    change(){
        this.changing = false;
        this.scene.start("game");      
    }
}