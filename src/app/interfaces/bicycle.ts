export class Bicycle {
    gear: number;
    name: string;
    type: string;

    constructor() {
        this.gear = 1;
        this.name = "Default Name";
        this.type = "Mountain"
    }

    shiftGearUp(): void {
        this.gear = this.gear + 1;
    }
}
