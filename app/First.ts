export default class First {
    constructor(
        name: string,
        age: number
    ) {
        this._name = name;
        this.age = age
    }

    //encapsulation
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _name: string = '';

    age: number = 0;

    greetings(): void {
        console.log('greetings',
                    this._name,
                    this.age)
    }
}
