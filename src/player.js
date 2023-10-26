export class Player {
    constructor(name) {
        this.name = name;
    }
    hp = 100;
    gold = 0;
    interestCap = 5;
    experience = 0;
    level = 1;
    levelBreakpoints = [2, 2, 6, 10, 20, 36, 56, 80, 100]
    unitCap = 1;

    determineLevelUp() {
        if (this.experience >= this.levelBreakpoints[this.level - 1]) {
            this.level++;
            this.experience = 0;
            this.increaseUnitCap();
        }
        return this.level;
    }

    increaseUnitCap() {
        return ++this.unitCap;
    }

    // calculates players interest and adds result to their gold total
    calcInterest() {
        let interest = this.gold / 10;
        if (interest > this.interestCap) {
            interest = this.interestCap;
        }
        this.gold = interest + this.gold;
        return this.gold;
    }
}



// Tests
let soju = new Player('soju');
soju.gold = 20;
soju.calcInterest(); // 22

soju.gold = 70;
soju.calcInterest() // 75

soju.gold = 60;
soju.interestCap = 6
soju.calcInterest(); // 66

soju.experience = 2; //2
soju.level // 1
soju.determineLevelUp() // 2

soju.experience = 100;
soju.level = 9;
soju.determineLevelUp // 10;