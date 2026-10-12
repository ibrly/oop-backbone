import Interface from './Interface';

export default class Counter implements Interface {
    //is way to give a guideline to other developers in interface to show up the class functionality
    //cannot use member field
    //cannot use access modifier
    //all interface methods must be implemented in derived class
    constructor(public value: number = 0) {
    }

    increase(by: number) {
        this.value += by;
    }

    decrease(by: number) {
        this.value -= by;
    }

    lessThan(value: number) {
        return this.value < value;
    }

    greaterThan(value: number) {
        return this.value > value;
    }
}
