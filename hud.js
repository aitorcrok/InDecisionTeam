const base = 1220;
export default class HUD extends Phaser.Scene {
    constructor(lives){
        super({key: 'hud'});
    }
    preload(){
        this.load.image('health','/InDecisionTeam/sprites/raqueta.png');
        this.load.image('header', '/InDecisionTeam/sprites/pixel.png');
    }
    create(){
        this.header = this.add.image(700, 40, 'header');
        this.header.setScale(1400, 80);
        this.header.setTint(0x005500);
        this.health = [this.add.image(1380, 60, 'health'), this.add.image(1340, 60, 'health'), this.add.image(1300, 60, 'health'), this.add.image(1260, 60, 'health'), this.add.image(1220, 60, 'health'),
                    this.add.image(1380, 30, 'health'), this.add.image(1340, 30, 'health'), this.add.image(1300, 30, 'health'), this.add.image(1260, 30, 'health'), this.add.image(1220, 30, 'health')]
        this.score = this.add.text(20, 20, "Puntuación: 0", {fontSize: '48px', fontFamily: 'Megrim'});
        this.level = this.add.text(450, 20, "", {fontSize: '48px', fontFamily: 'Megrim', align: 'center'});
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