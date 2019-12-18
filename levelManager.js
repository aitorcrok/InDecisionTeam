import Enemy from '/InDecisionTeam/enemy.js';
import Asteroid from '/InDecisionTeam/asteroide.js';
const scorePerLevel = 1000;
const levels = [
    //Level 1
    {name: "Nivel uno de verdad",
     enemies:[{x: 250, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1150, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 450, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 950, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]
        },
    //Level 2
    {name: "E",
     enemies:[{x: 500, y: 100, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 100, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 900, y: 100, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 200, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 500, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 500, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 900, y: 500, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},],
     asteroids:[{x: 350, y: -100, speedX: 0, speedY: 200},{x: 1050, y: -100, speedX: 0, speedY: 200},{x: 350, y: -800, speedX: 0, speedY: 200},{x: 1050, y: -800, speedX: 0, speedY: 200},
            {x: 350, y: -1500, speedX: 0, speedY: 200},{x: 1050, y: -1500, speedX: 0, speedY: 200},{x: 350, y: -2200, speedX: 0, speedY: 200},{x: 1050, y: -2200, speedX: 0, speedY: 200},]
    },
    //Level 3
    {name: "Ah que hay diagonales",
     enemies:[{x: 175, y: 150, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
            {x: 1225, y: 150, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
            {x: 175, y: 250, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
            {x: 450, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 950, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1225, y: 250, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
            {x: 175, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1225, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]
        },
    //Level 4
    {name: "Lil' shield",
     enemies:[{x: 400, y: 250, div: true, sprite: 'div_enemy', bullSpX: -350, bullSpY: 300, div1: {x: 350, y: 250, bullSpX: -250, bullSpY: 300}, div2: {x: 450, y: 250, bullSpX: 250, bullSpY: 300}},
            {x: 1000, y: 250, div: true, sprite: 'div_enemy', bullSpX: 350, bullSpY: 300, div1: {x: 950, y: 250, bullSpX: -250, bullSpY: 300}, div2: {x: 1050, y: 250, bullSpX: 250, bullSpY: 300}},
            {x: 400, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1000, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 900, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}],
     asteroids:[{x: 350, y: -200, speedX: 0, speedY: 200}, {x: 1050, y: -200, speedX: 0, speedY: 200}]
    },
    //Level 5
    {name: "UwU",
     enemies: [{x: 250, y: 100, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
                {x: 450, y: 100, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 950, y: 100, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
                {x: 1150, y: 100, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 250, y: 200, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
                {x: 450, y: 200, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 950, y: 200, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
                {x: 1150, y: 200, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 350, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
                {x: 1050, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
                {x: 500, y: 350, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
                {x: 700, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
                {x: 900, y: 350, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 600, y: 450, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
                {x: 800, y: 450, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300}]
            },
    //Level 6
    {name: "ole ole lo caracole",
    enemies:[{x: 200, y: 150, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 250, div1: {x: 500, y: 300, bullSpX: 0, bullSpY: 300}, div2: {x: 700, y: 100, bullSpX: 0, bullSpY: 250}},
           {x: 400, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 250},
           {x: 600, y: 150, div: true, sprite: 'div_enemy', bullSpX: 150, bullSpY: 400, div1: {x: 500, y: 300, bullSpX: 0, bullSpY: 300}, div2: {x: 700, y: 100, bullSpX: 0, bullSpY: 250}},
           {x: 800, y: 150, div: false, sprite: 'std_enemy', bullSpX: 150, bullSpY: 400},
           {x: 700, y: 300, div: false, sprite: 'std_enemy', bullSpX: -150, bullSpY: 250},
           {x: 500, y: 300, div: false, sprite: 'std_enemy', bullSpX: 500, bullSpY: 250},
           {x: 300, y: 300, div: false, sprite: 'std_enemy', bullSpX: -500, bullSpY: 250}]
        },
    //Level 7
    {name: "Abre la boca que viene la sopa",
     enemies:[{x: 700, y: 150, div: true, sprite: 'div_enemy', bullSpX: -400, bullSpY: 250, div1: {x: 600, y: 150, bullSpX: -250, bullSpY: 300}, div2: {x: 800, y: 150, bullSpX: 250, bullSpY: 300}},
            {x: 250, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 400, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 550, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 850, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1000, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1150, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 250, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 400, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 550, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 850, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1000, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1150, y: 450, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}],
     asteroids:[{x: -250, y: -500, speedX: 150, speedY: 200}, {x: -550, y: -800, speedX: 150, speedY: 200},{x: -750, y: -1200, speedX: 150, speedY: 200},{x: -1050, y: -1500, speedX: 150, speedY: 200},
                {x: 1600, y: -500, speedX: -150, speedY: 200},{x: 2000, y: -800, speedX: -150, speedY: 200},{x: 2300, y: -1000, speedX: -150, speedY: 200},{x: 2600, y: -1500, speedX: -150, speedY: 200},]
    },
    //Level 8
    {name: "What's this?",
     enemies:[{x: 350, y: 150, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 250, y: 150, bullSpX: -250, bullSpY: 300}, div2: {x: 350, y: 100, bullSpX: 0, bullSpY: 500}},
            {x: 1050, y: 150, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 1150, y: 150, bullSpX: 250, bullSpY: 300}, div2: {x: 1050, y: 100, bullSpX: 0, bullSpY: 500}},
            {x: 200, y: 250, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 100, y: 250, bullSpX: -250, bullSpY: 300}, div2: {x: 250, y: 300, bullSpX: 0, bullSpY: 500}},
            {x: 500, y: 250, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 500, y: 150, bullSpX: 0, bullSpY: 500}, div2: {x: 600, y: 250, bullSpX: -250, bullSpY: 300}},
            {x: 900, y: 250, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 800, y: 250, bullSpX: 250, bullSpY: 300}, div2: {x: 900, y: 350, bullSpX: 0, bullSpY: 500}},
            {x: 1200, y: 250, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 1200, y: 150, bullSpX: 0, bullSpY: 500}, div2: {x: 1300, y: 250, bullSpX: 250, bullSpY: 300}},
            {x: 350, y: 350, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 450, y: 350, bullSpX: -250, bullSpY: 300}, div2: {x: 350, y: 450, bullSpX: 0, bullSpY: 500}},
            {x: 1050, y: 350, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 1150, y: 350, bullSpX: 250, bullSpY: 300}, div2: {x: 1050, y: 450, bullSpX: 0, bullSpY: 500}},
            {x: 500, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 900, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 600, y: 500, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 800, y: 500, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]
        },
    //Level 9
    {name: "Take me home",
     enemies:[{x: 700, y: 150, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 700, y: 100, bullSpX: 0, bullSpY: 500}, div2: {x: 800, y: 100, bullSpX: 0, bullSpY: 500}},
            {x: 600, y: 200, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 600, y: 150, bullSpX: 0, bullSpY: 500}, div2: {x: 500, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 800, y: 200, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 800, y: 150, bullSpX: 0, bullSpY: 500}, div2: {x: 900, y: 150, bullSpX: 0, bullSpY: 500}},
            {x: 300, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 250, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 400, y: 200, bullSpX: 0, bullSpY: 500}, div2: {x: 400, y: 250, bullSpX: 0, bullSpY: 500}},
            {x: 900, y: 250, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 900, y: 200, bullSpX: 0, bullSpY: 500}, div2: {x: 1000, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 250, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 350, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1000, y: 300, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 1000, y: 250, bullSpX: 0, bullSpY: 500}, div2: {x: 1100, y: 250, bullSpX: 0, bullSpY: 500}},
            {x: 900, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1100, y: 350, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 1100, y: 300, bullSpX: 0, bullSpY: 500}, div2: {x: 1200, y: 300, bullSpX: 0, bullSpY: 500}},
            {x: 200, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 400, y: 400, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 850, y: 400, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
            {x: 950, y: 400, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
            {x: 1200, y: 400, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 1200, y: 350, bullSpX: 0, bullSpY: 500}, div2: {x: 1300, y: 400, bullSpX: 0, bullSpY: 500}}],
     asteroids:[{x: -250, y: -800, speedX: 50, speedY: 200},{x: 1600, y: -900, speedX: -50, speedY: 200},{x: 730, y: -1000, speedX: 0, speedY: 250},{x: 750, y: -1100, speedX: -10, speedY: 200}]
    },
    //Level 10
    {name: "Al centro y...",
     enemies:[{x: 600, y: 100, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 600, y: 100, bullSpX: 0, bullSpY: 500}, div2: {x: 600, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 700, y: 100, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 700, y: 100, bullSpX: 0, bullSpY: 500}, div2: {x: 700, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 800, y: 100, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 800, y: 100, bullSpX: 0, bullSpY: 500}, div2: {x: 800, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 500, y: 200, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 500, y: 200, bullSpX: -250, bullSpY: 300}, div2: {x: 500, y: 100, bullSpX: 0, bullSpY: 500}},
            {x: 900, y: 200, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 900, y: 200, bullSpX: 250, bullSpY: 300}, div2: {x: 800, y: 200, bullSpX: 0, bullSpY: 500}},
            {x: 500, y: 300, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 500, y: 300, bullSpX: -250, bullSpY: 300}, div2: {x: 600, y: 300, bullSpX: 0, bullSpY: 500}},
            {x: 700, y: 300, div: false, sprite: 'std_enemy', bullSpX: -1000, bullSpY: 100},
            {x: 900, y: 300, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 900, y: 300, bullSpX: 250, bullSpY: 300}, div2: {x: 800, y: 300, bullSpX: 0, bullSpY: 500}},
            {x: 500, y: 400, div: true, sprite: 'div_enemy', bullSpX: -250, bullSpY: 300, div1: {x: 500, y: 400, bullSpX: -250, bullSpY: 300}, div2: {x: 500, y: 500, bullSpX: 0, bullSpY: 500}},
            {x: 900, y: 400, div: true, sprite: 'div_enemy', bullSpX: 250, bullSpY: 300, div1: {x: 900, y: 400, bullSpX: 250, bullSpY: 300}, div2: {x: 900, y: 500, bullSpX: 0, bullSpY: 500}},
            {x: 600, y: 500, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 600, y: 500, bullSpX: 0, bullSpY: 500}, div2: {x: 600, y: 400, bullSpX: 0, bullSpY: 500}},
            {x: 700, y: 500, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 700, y: 500, bullSpX: 0, bullSpY: 500}, div2: {x: 700, y: 400, bullSpX: 0, bullSpY: 500}},
            {x: 800, y: 500, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 500, div1: {x: 800, y: 500, bullSpX: 0, bullSpY: 500}, div2: {x: 800, y: 400, bullSpX: 0, bullSpY: 500}}]
    }
]
export default class LevelManager{
    constructor(){
        this.numLevels = 10;
    }
    changeLevel(level){
        var counter = 0;
        this.scene.manager.getScene("hud").updateLevel(levels[level - 1].name);
        levels[level - 1].enemies.forEach(enemy => 
            {this.enemyPool.add(new Enemy(this, levels[level-1].enemies[counter].x, levels[level-1].enemies[counter].y, levels[level-1].enemies[counter].div, levels[level-1].enemies[counter].sprite,
                                         levels[level-1].enemies[counter].bullSpX, levels[level-1].enemies[counter].bullSpY, levels[level-1].enemies[counter].div1, levels[level-1].enemies[counter].div2));
                counter++;});
        if(levels[level - 1].asteroids != undefined){
            counter = 0;
            levels[level - 1].asteroids.forEach(asteroid =>
                {this.asteroidPool.add(new Asteroid(this, levels[level-1].asteroids[counter].x, levels[level-1].asteroids[counter].y,
                                                    levels[level-1].asteroids[counter].speedX, levels[level-1].asteroids[counter].speedY, 'asteroid'));
                 counter++;})
        } 
        this.changingLevel = false;
        if(level > 1)
            this.score += scorePerLevel;
        this.scene.manager.getScene("hud").updateScore(this.score);
    }
}