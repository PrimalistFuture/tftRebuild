import { Player } from "./player";

class Leaderboard {
    constructor() { }
    leaderboard = [];
}


// Test
let soju = new Player('soju');
soju.hp = 60;
let milk = new Player('milk');
milk.hp = 92;
let setsuko = new Player('setsuko');
setsuko.hp = 98;
let emily = new Player('emily');
emily.hp = 88;
let boxbox = new Player('boxbox');
boxbox.hp = 86;
let ray = new Player('ray');
ray.hp = 88;
let dishsoap = new Player('dishsoap');
dishsoap.hp = 100;
let imaqtpie = new Player('imaqtpie');
imaqtpie.hp = 90;

let lb = new Leaderboard();

lb.leaderboard.push(soju, milk, setsuko, emily, boxbox, ray, dishsoap, imaqtpie)

lb.leaderboard.sort((a, b) => {
    let p1HP = a.hp;
    let p2HP = b.hp;
    if (p1HP > p2HP) {
        return -1;
    }
    if (p1HP < p2HP) {
        return 1;
    }
    return 0;
})
