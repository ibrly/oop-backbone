import First from './class/First';

export default class Second extends First {
    constructor(
        speed: number,
        name: string,
        age: number
    ) {
        super(name,
              age)
        this.speed = speed;
        console.log(name,
                    age,
                    speed)
    }


    greetings() {
        console.log('ssssssasdasd')
        super.greetings();

    }

    speed: number = 0
}
