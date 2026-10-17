import express, {
    Express,
    Request,
    Response
} from 'express';
import dotenv from 'dotenv';
import First from './class/First';
import Encapsulation from './encapsulation/Encapsulation';
import Counter from './interface/Counter';
import Override from './polymorphism/override/Override';
import Formatter from './polymorphism/overload/Overload';
import Dog from './relationships/inheritance/Dog';
import Car, {ElectricEngine, PetrolEngine} from './relationships/composition/Car';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/',
    (
        req: Request,
        res: Response
    ) => {
        res.send('Express + TypeScript Server');
    });

// Runs one small example per concept so the output can be compared with the source files.
app.get('/concepts',
    (
        req: Request,
        res: Response
    ) => {
        const person = new First('Ibrahim', 30);
        const encapsulated = new Encapsulation();
        encapsulated.member = 'set through the setter';
        const counter = new Counter();
        counter.increase(5);
        counter.decrease(2);
        const formatter = new Formatter();
        const car = new Car('Corolla', new PetrolEngine());
        const beforeSwap = car.drive();
        car.replaceEngine(new ElectricEngine());

        res.json({
            class        : {age: person.age}, // _name is protected, so only subclasses can read it
            encapsulation: encapsulated.member,
            interface    : {value: counter.value, greaterThan2: counter.greaterThan(2)},
            abstraction  : new Override(2).describe(),
            overload     : [formatter.format(Math.PI), formatter.format(new Date(Date.UTC(2024, 0, 15))), formatter.format([1, 2.5], ' | ')],
            inheritance  : new Dog('Rex').speak(),
            composition  : [beforeSwap, car.drive()]
        });
    });

app.listen(port,
    () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
