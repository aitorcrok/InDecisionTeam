import Ship from '/ship.js';
export default class Player extends Ship{
    constructor(scene){
        super(scene, 400, 400, 300, 'testo', 100)
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
        this.p = this.scene.input.keyboard.addKey('P');
    }
    preUpdate(t, dt){
        this.cooldown = Math.max(0, this.cooldown - dt);
        if(this.p.isDown && this.cooldown == 0){
            this.parry = true;
            this.cooldown = 3000;
        } else if(this.cooldown < 1500) this.parry = false;
        // console.log(this.parry);
        // console.log(Math.max(0, this.cooldown - dt));
    }
    parry(){
        this.parry = true;
        this.parryCD = true;
        var timer = this.scene.time.delayedCall(500, this.cdParry, null, this);
    }
    cdParry(){
        this.parry = false;
        var timer = this.scene.time.delayedCall(300, this.resetParry, null, this);
    }
    resetParry(){
        this.parryCD = false;
    }
}