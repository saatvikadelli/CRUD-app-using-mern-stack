import express from 'express';

import dotenv from 'dotenv';
import connection from './database/db.js'; 

import Routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

dotenv.config();//intialise
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use('/', Routes) //default endpoint , routes will route to this file

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


connection(username, password);


app.listen(PORT, ()=> console.log("server is running successfully"));