//import express from 'express'
//import path from 'path'
//import home from './pages/home.js';
//import login from './pages/login.js';
//import submit from './pages/submit.js';


 //const abspath=path.resolve('view/home.html')
//const app=express();
//app.get("/",(req,resp)=>{
 //   const abspath=path.resolve('view/home.html')
   // console.log(abspath);
   //resp.sendFile(abspath);
   
//})
//import morgan from 'morgan'
import express from 'express'
import {handleUsers} from './controller/userController.js';
const app = express();
 app.set('view engine','ejs')
app.set('views','./view')
app.get('/users',handleUsers)
app.listen((3200));