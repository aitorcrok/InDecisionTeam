export default class HUD extends Phaser.Scene {
    constructor(){
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
        this.healthIcon1 = this.add.image(1300, 40, 'health');      //rework
        this.healthIcon2 = this.add.image(1340, 40, 'health');
        this.healthIcon3 = this.add.image(1380, 40, 'health');
        this.score = this.add.text(20, 20, "Puntuación: 0", {fontSize: '64px', fontFamily: 'Megrim', color: 0xffffff});
        this.level = this.add.text(600, 20, "Nivel", {fontSize: '64px', fontFamily: 'Megrim', color: 0xffffff, align: 'center'});
        this.updateScore(0);
    }
    updateScore(score){
        this.score.setText("Puntuación: " + score);
    }
    updateHealth(health){
        switch(health){
            case 2:
                this.healthIcon3.destroy();
                break;
            case 1:
                this.healthIcon2.destroy();
                break;
            case 0:
                this.healthIcon1.destroy();
                break;
        }
    }
    updateLevel(level){
        this.level.setText(level);
    }
}