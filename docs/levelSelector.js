import Button from '/InDecisionTeam/button.js';
export default class LevelSelector extends Phaser.Scene {
    constructor(){
        super({key: 'level selector'});
    }
    preload(){
        this.load.image('button','/InDecisionTeam/sprites/grey_button00.png');
        this.load.image('fondo', '/InDecisionTeam/sprites/fondo.jpg');
    }
    create(){
        this.add.image(0, 0, 'fondo').setOrigin(0, 0);   
        this.button1 = new Button(this, 350, 100, 'button', 'game', -1);
        this.button2 = new Button(this, 700, 100, 'button', 'game', 1);
        this.button3 = new Button(this, 1050, 100, 'button', 'game', 2);
        this.button4 = new Button(this, 350, 300, 'button', 'game', 3);
        this.button5 = new Button(this, 700, 300, 'button', 'game', 4);
        this.button6 = new Button(this, 1050, 300, 'button', 'game', 5);
        this.button7 = new Button(this, 350, 500, 'button', 'game', 6);
        this.button8 = new Button(this, 700, 500, 'button', 'game', 7);
        this.button9 = new Button(this, 1050, 500, 'button', 'game', 8);
        this.button10 = new Button(this, 700, 700, 'button', 'game', 9);
        this.add.text(300, 85, "Nivel 1", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(650, 85, "Nivel 2", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(1000, 85, "Nivel 3", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(300, 285, "Nivel 4", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(650, 285, "Nivel 5", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(1000, 285, "Nivel 6", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(300, 485, "Nivel 7", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(650, 485, "Nivel 8", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(1000, 485, "Nivel 9", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
        this.add.text(650, 685, "Nivel 10", {fontSize: '32px', fontFamily: 'Megrim', color: 0xffffff});
    }
}