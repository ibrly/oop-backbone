export default class First {
    constructor(
        name: string,
        age: number
    ) {
        this._name = name;
        this.age = age
    }

    protected _name: string = '';

    age: number = 0;

    greetings(): void {
        console.log('greetings',
                    this._name,
                    this.age)
    }
}
