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
import express from'express'
import userData from './user.json' with {type:'json'}
const app=express();
app.get('/',(req,resp)=>{
    console.log(userData);
    resp.send("user List API")

}
)
app.get('/user/:id',(req,resp)=>{
    const id=req.params.id
    console.log(id);
    let filteredData = userData.filter((user)=>user.id==id)
    resp.send(filteredData)
})
app.listen(3200)