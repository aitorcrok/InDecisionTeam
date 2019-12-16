export default class Menu extends Phaser.Scene {
    constructor(){
        super({key: 'menu'});
    }
    create(){
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
        this.scene.run("game");
        this.scene.run("hud")
        this.scene.sleep("menu");        
    }
    metod(){
        console.log("it works");
    }
}