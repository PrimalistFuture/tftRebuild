import { board } from "./board";

export class Unit {
    constructor(name, origin, trait, ability, hp, damage, aps, max_mana, start_mana, cost) {
        this.name = name;
        this.origin = origin;
        this.trait = trait;
        this.ability = ability;
        this.hp = hp;
        this.damage = damage;
        this.aps = aps;
        this.max_mana = max_mana;
        this.start_mana = start_mana;
        this.cost = cost;
    }
    mana = 0;

    calcDistance(board) {
        let x = 0;
        let y = 0;

    }

    findNearestEnemyUnit() {

    }

    aquireTarget() {

    }

    doAttack() {
        this.calcMana();
    }

    calcMana() {
        this.mana += 10;
        if (this.mana > this.max_mana) {
            this.castAbility();
        }
    }

    castAbility() {
        // stuff....

        this.mana = 0;
    }
}

let swain = new Unit('Swain', 'Noxus', 'Sorcerer', 'Ravenous Flock', 100, 10, 1, 30, 10, 2);