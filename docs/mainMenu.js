import Button from '/InDecisionTeam/button.js';
export default class MainMenu extends Phaser.Scene {
    constructor(){
        super({key: 'main menu'});
    }
    preload(){
        this.load.image('fondo', '/InDecisionTeam/sprites/fondo.jpg');
        this.load.image('button','/InDecisionTeam/sprites/grey_button00.png');
    }
    create(){
        this.add.image(0, 0, 'fondo').setOrigin(0, 0);   
        this.button1 = new Button(this, 700, 300, 'button', 'game', -1);
        this.button2 = new Button(this, 700, 500, 'button', 'level selector');
        this.add.text(590, 280, "Nueva partida", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(620, 470, "Selector de\n niveles", {fontSize: '28px', fontFamily: 'Megrim', color: 0xffffff, align: 'center'});
    }
}