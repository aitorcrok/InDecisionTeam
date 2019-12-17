const base = 1220;
export default class HUD extends Phaser.Scene {
    constructor(lives){
        super({key: 'hud'});
    }
    preload(){
        this.load.image('health','/InDecisionTeam/sprites/favicon.png');
        this.load.image('header', '/InDecisionTeam/sprites/pixel.png');
    }
    create(){
        this.header = this.add.image(700, 40, 'header');
        this.header.setScale(1400, 80);
        this.header.setTint(0x005500);
        this.health = [this.add.image(1380, 40, 'health'), this.add.image(1340, 40, 'health'), this.add.image(1300, 40, 'health'), this.add.image(1260, 40, 'health'), this.add.image(1220, 40, 'health')]
        this.score = this.add.text(20, 20, "Puntuación: 0", {fontSize: '48px', fontFamily: 'Megrim', color: 0xffffff});
        this.level = this.add.text(450, 20, "", {fontSize: '48px', fontFamily: 'Megrim', color: 0xffffff, align: 'center'});
        this.updateScore(0);
    }
    updateScore(score){
        this.score.setText("Puntuación: " + score);
    }
    updateHealth(health){
        this.health[health].setVisible(false);
    }
    updateLevel(level){
        this.level.setText(level);
    }
}