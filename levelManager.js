import Enemy from '/InDecisionTeam/enemy.js';
const levels = [
    //Level 1
    [{x: 400, y: 200, div: false, sprite: 'std_enemy', bullSpX: 0, bullSpY: 500}],
    //Level 2
    [{x: 400, y: 200, div: false, sprite: 'std_enemy', bullSpX: 200, bullSpY: 500},
     {x: 600, y: 200, div: true, sprite: 'div_enemy', bullSpX: 300, bullSpY: 500},
     {x: 800, y: 200, div: false, sprite: 'std_enemy', bullSpX: 400, bullSpY: 500},]
]
export default class LevelManager{
    constructor(){
    }
    changeLevel(level){
        var counter = 0;
        levels[level - 1].forEach(enemy => 
            {this.enemyPool.add(new Enemy(this, levels[level-1][counter].x, levels[level-1][counter].y, levels[level-1][counter].div, levels[level-1][counter].sprite, levels[level-1][counter].bullSpX, levels[level-1][counter].bullSpY));
                counter++;});
        this.changingLevel = false;
    }
}