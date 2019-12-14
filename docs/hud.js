export default class HUD extends Phaser.Scene {
    constructor(){
        super({key: 'hud'});
    }
    preload(){
        this.load.image('health','/InDecisionTeam/sprites/favicon.png')
    }
    create(){
        this.healthIcon1 = this.add.image(1300, 40, 'health');
        this.healthIcon2 = this.add.image(1340, 40, 'health');
        this.healthIcon3 = this.add.image(1380, 40, 'health');
        this.score = this.add.text(20, 20, "Puntuación: 0", {fontSize: '48px'});
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
}