class unitPool {
    constructor(units) {
        this.units = units;
    }
    pool = [];
    unitCap = [29, 22, 18, 12, 10];
    createUnits() {
        for (let unit of this.units) {
            if (unit.cost === 1) {
                for (let i = 0; i < this.unitCap[unit.cost - 1]; i++) {
                    let copy = new testUnit(unit.name, unit.cost);
                    copy.id = i;
                    this.pool.push(copy);
                }
            }
            if (unit.cost === 2) {
                for (let i = 0; i < this.unitCap[unit.cost - 1]; i++) {
                    let copy = new testUnit(unit.name, unit.cost);
                    copy.id = i;
                    this.pool.push(copy);
                }
            }
            if (unit.cost === 3) {
                for (let i = 0; i < this.unitCap[unit.cost - 1]; i++) {
                    let copy = new testUnit(unit.name, unit.cost);
                    copy.id = i;
                    this.pool.push(copy);
                }
            }
            if (unit.cost === 4) {
                for (let i = 0; i < this.unitCap[unit.cost - 1]; i++) {
                    let copy = new testUnit(unit.name, unit.cost);
                    copy.id = i;
                    this.pool.push(copy);
                }
            }
            if (unit.cost === 5) {
                for (let i = 0; i < this.unitCap[unit.cost - 1]; i++) {
                    let copy = new testUnit(unit.name, unit.cost);
                    copy.id = i;
                    this.pool.push(copy);
                }
            }
        }
        return this.pool;
    }
    pickRandomUnit(cost) {
        validUnits = this.pool.filter((unit) => unit.cost === cost);
        unitIdx = Math.floor(Math.random() * validUnits.length);
        return validUnits[unitIdx];
    }
}

class testUnit {
    constructor(unitName, cost) {
        this.unitName = unitName;
        this.cost = cost;
    }
    id;
}

let renekton = new testUnit(unitName = 'renekton', cost = 1);
let swain = new testUnit(unitName = 'swain', cost = 2);
let quinn = new testUnit(unitName = 'quinn', cost = 3);
let aphelios = new testUnit(unitName = 'aphelios', cost = 4);
let ksante = new testUnit(unitName = 'ksante', cost = 5);

let units = [renekton, swain, quinn, aphelios, ksante]
let pool = new unitPool(units);
pool.createUnits()
