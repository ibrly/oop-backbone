import Interface from './Interface';

export default class Third implements Interface {
    //is way to give a guideline to other developers in interface to show up the class functionality
    //cannot use member field
    //cannot use access modifier
    //all interface methods must be implemented in derived class
    decrease(number: number) {
    }

    greaterThan(number: number) {
    }
    increase(number: number) {
    }

    lessThan(number: number) {
    }


}
