// Composition: a Car HAS an Engine instead of BEING one. The part is passed in, so it can be swapped
// (petrol, electric, a fake in tests) without a new subclass for every combination.
export interface Engine {
    start(): string;
}

export class PetrolEngine implements Engine {
    start(): string {
        return 'vroom';
    }
}

export class ElectricEngine implements Engine {
    start(): string {
        return 'hum';
    }
}

export default class Car {
    constructor(
        public model: string,
        private engine: Engine
    ) {
    }

    // delegate to the part instead of inheriting its behaviour
    drive(): string {
        return `${this.model} starts with a ${this.engine.start()}`;
    }

    replaceEngine(engine: Engine): void {
        this.engine = engine;
    }
}
