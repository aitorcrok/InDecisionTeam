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
        this.parryCD = false;
        this.estado = false;
        this.p = this.scene.input.keyboard.addKey('P');
        this.p.on('down', event => {if(!this.parryCD)this.parry()});
        //this.p.on('up', event => {this.estado = false});
    }
    preUpdate(){
        // if((!this.estado && !Phaser.Input.Keyboard.UpDuration(this.p, 1500)) || Phaser.Input.Keyboard.DownDuration(this.p, 1500)){
        //     this.estado = true;
        // } else {this.estado = false;}
        console.log(this.estado);
    }
    parry(){
        this.estado = true;
        this.parryCD = true;
        var timer = this.scene.time.delayedCall(1500, this.cdParry, null, this);
    }
    cdParry(){
        this.estado = false;
        var timer = this.scene.time.delayedCall(3000, this.resetParry, null, this);
    }
    resetParry(){
        this.parryCD = false;
    }
}