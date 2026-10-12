import Abstraction from '../../abstraction/Abstraction';

export default class Override extends Abstraction {
    //you can override methods or members in derived by rewrite them in it, but you cannot change their signature
    // (name or arguments)
    constructor(private radius: number) {
        super();
    }

    label: string = 'circle';

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    describe(): string {
        return `${this.label} with radius ${this.radius}${this.unit} has an area of ${this.area().toFixed(2)}${this.unit}²`;
    }
}
