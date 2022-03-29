import Abstraction from '../../abstraction/Abstraction';

export default class Override extends Abstraction {
    //you can override methods or members in derived by rewrite them in it, but you cannot change their signature
    // (name or arguments)
    gotten(): void {
    }

    ssss(): void {
    }


    hell: string = '';

}
