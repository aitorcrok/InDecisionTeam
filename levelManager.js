import Enemy from '/InDecisionTeam/enemy.js';
import Asteroid from '/InDecisionTeam/asteroide.js';
const scorePerLevel = 500;
const levels = [
    //Level 1
    {name: "Let's start", 
     enemies: [{x: 400, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]},
    //Level 2
    {name: "Otra prueba",
     enemies:[{x: 400, y: 250, div: false, sprite: 'std_enemy', bullSpX: 200, bullSpY: 500},
            {x: 600, y: 250, div: true, sprite: 'div_enemy', bullSpX: 300, bullSpY: 500, div1: {x: 500, y: 300, bullSpX: 0, bullSpY: 300}, div2: {x: 700, y: 100, bullSpX: 0, bullSpY: 250}},
            {x: 800, y: 250, div: false, sprite: 'std_enemy', bullSpX: 400, bullSpY: 500}]},
    //Level 3
    {name: "ole ole lo caracole",
     enemies:[{x: 200, y: 150, div: true, sprite: 'div_enemy', bullSpX: 0, bullSpY: 250, div1: {x: 500, y: 300, bullSpX: 0, bullSpY: 300}, div2: {x: 700, y: 100, bullSpX: 0, bullSpY: 250}},
            {x: 400, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 250},
            {x: 600, y: 150, div: true, sprite: 'div_enemy', bullSpX: 150, bullSpY: 400, div1: {x: 500, y: 300, bullSpX: 0, bullSpY: 300}, div2: {x: 700, y: 100, bullSpX: 0, bullSpY: 250}},
            {x: 800, y: 150, div: false, sprite: 'std_enemy', bullSpX: 150, bullSpY: 400},
            {x: 700, y: 300, div: false, sprite: 'std_enemy', bullSpX: -150, bullSpY: 250},
            {x: 500, y: 300, div: false, sprite: 'std_enemy', bullSpX: 500, bullSpY: 250},
            {x: 300, y: 300, div: false, sprite: 'std_enemy', bullSpX: -500, bullSpY: 250}]},
    //Level 4
    {name: "Nivel uno de verdad",
     enemies:[{x: 250, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1150, y: 150, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 450, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 950, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]},
    //Level 5
    {name: "Ah que hay diagonales",
     enemies:[{x: 175, y: 150, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
            {x: 1225, y: 150, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
            {x: 175, y: 250, div: false, sprite: 'std_enemy', bullSpX: 250, bullSpY: 300},
            {x: 450, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 700, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 950, y: 250, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1225, y: 250, div: false, sprite: 'std_enemy', bullSpX: -250, bullSpY: 300},
            {x: 175, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1225, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}]},
    //Level 6
    {name: "Lil' shield",
     enemies:[{x: 400, y: 250, div: true, sprite: 'div_enemy', bullSpX: -350, bullSpY: 300, div1: {x: 350, y: 250, bullSpX: -250, bullSpY: 300}, div2: {x: 450, y: 250, bullSpX: 250, bullSpY: 300}},
            {x: 1000, y: 250, div: true, sprite: 'div_enemy', bullSpX: 350, bullSpY: 300, div1: {x: 950, y: 250, bullSpX: -250, bullSpY: 300}, div2: {x: 1050, y: 250, bullSpX: 250, bullSpY: 300}},
            {x: 400, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 1000, y: 300, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 500, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500},
            {x: 900, y: 350, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}],
     asteroids:[{x: 350, y: -200, speedX: 0, speedY: 200}, {x: 1050, y: -200, speedX: 0, speedY: 200}]
    }
]
export default class LevelManager{
    constructor(){
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
                                                    levels[level-1].asteroids[counter].speedX, levels[level-1].asteroids[counter].speedY, 'asteroid'))})
        } 
        this.changingLevel = false;
        if(level > 1)
            this.score += scorePerLevel;
        this.scene.manager.getScene("hud").updateScore(this.score);
    }
}