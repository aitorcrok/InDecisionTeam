export default class EndMenu extends Phaser.Scene {
    constructor(){
        super({key: 'end menu'});
    }
    init(score){
        this.score = score;
    }
    create(){
        this.scoreText = this.add.text(200, 200, "Puntuación: " + this.score, {fontSize: '48px', fontFamily: 'Megrim'});
    }
    update(){
        // if(!this.changing && this.space.isDown){
        //     this.changing = true;
        //     this.change();
        // }
    }
    // change(){
    //     this.changing = false;
    //     this.scene.start("game");      
    // }
}