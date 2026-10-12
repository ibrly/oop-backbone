import Animal from './Animal';

// Dog reuses Animal's constructor and fields, and overrides speak() while still calling the parent version.
export default class Dog extends Animal {
    constructor(name: string) {
        super(name, 4);
    }

    speak(): string {
        return `${super.speak()}: woof`;
    }
}
