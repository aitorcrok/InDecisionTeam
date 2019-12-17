import Button from '/InDecisionTeam/button.js'
export default class EndMenu extends Phaser.Scene {
    constructor(){
        super({key: 'end menu'});
    }
    init(score){
        this.score = score;
    }
    preload(){
        this.load.image('fondo', '/InDecisionTeam/sprites/fondo.jpg');
        this.load.image('button','/InDecisionTeam/sprites/grey_button00.png');
    }
    create(){
        this.add.image(0, 0, 'fondo').setOrigin(0, 0);   
        this.button1 = new Button(this, 700, 550, 'button', 'main menu');
        this.add.text(590, 530, "Menú principal", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.scoreText = this.add.text(515, 300, "Puntuación final \n" + this.score, {fontSize: '48px', fontFamily: 'Megrim', align: 'center'});
    }
}