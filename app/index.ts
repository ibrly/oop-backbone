import express, {
    Express,
    Request,
    Response
} from 'express';
import dotenv from 'dotenv';
import {FiveImpl} from './inheritance/FiveImpl';

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

app.listen(port,
           () => {
               console.log(`⚡️[server]: Ss is running at https://localhost:${port}`);
           });


let x = new FiveImpl(3,
                     6)
x.aaaa()
