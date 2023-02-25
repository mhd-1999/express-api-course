import express,{Express,RequestHandler} from 'express';
import {Error} from './types/error'
import morgan from 'morgan'
import cors from 'cors'
const app: Express=express();
//allow resource sharing
app.use(cors as RequestHandler)
//making log
app.use(morgan('tiny') as RequestHandler);
app.use(express.json() as RequestHandler);
app.use(express.urlencoded({extends:true}) as RequestHandler);
export default app;