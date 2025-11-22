//mvc stands for module,view and controller also in controller routers is attach
import express from 'express'
import {handleUsers} from './controller/userController.js';
const app = express();
 app.set('view engine','ejs')
app.set('views','./view')
app.get('/users',handleUsers)
app.listen((3200));