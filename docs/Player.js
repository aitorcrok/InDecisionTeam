import Ship from '/InDecisionTeam/ship.js';
export default class Player extends Ship{
    constructor(scene){
        super(scene, 400, 400, 300, 'player', 3)
        this.d = this.scene.input.keyboard.addKey('D');
        this.a = this.scene.input.keyboard.addKey('A');
        this.s = this.scene.input.keyboard.addKey('S');
        this.w = this.scene.input.keyboard.addKey('W');
        this.d.on('down', event => {this.setVelocityX(1)});
        this.a.on('down', event => {this.setVelocityX(-1)});
        this.s.on('down', event => {this.setVelocityY(1)});
        this.w.on('down', event => {this.setVelocityY(-1)});
        this.d.on('up', event => {if(this.body.velocity.x > 0)this.setVelocityX(0)});
        this.a.on('up', event => {if(this.body.velocity.x < 0)this.setVelocityX(0)});
        this.s.on('up', event => {if(this.body.velocity.y > 0)this.setVelocityY(0)});
        this.w.on('up', event => {if(this.body.velocity.y < 0)this.setVelocityY(0)});
        this.parry = false;
        this.cooldown = 0;
        this.parryAT = 1500;    //active time
        this.parryCD = 3000;    //cooldown
        this.spacebar = this.scene.input.keyboard.addKey('SPACE');

    }
    preUpdate(t, dt){
        this.cooldown = Math.max(0, this.cooldown - dt);
        if(this.spacebar.isDown && this.cooldown == 0){
            this.parry = true;
            this.cooldown = this.parryCD;                               //despues de X ms puede volver a hacerlo
        } else if(this.cooldown < this.parryAT) this.parry = false;     //después de X ms deja de devolver proyectiles
        if(this.y < 500){   //habria que mirar como hacer esto menos horrible
            this.y = 500;
        }
    }
    receiveDamage(damage){
        this.health -= damage;
        this.scene.scene.manager.getScene("hud").updateHealth(this.health);
        if(this.health <= 0){
            this.destroy();
            console.log("die");
        }
    }
}