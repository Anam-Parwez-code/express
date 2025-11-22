import express from 'express'
import morgan from 'morgan'
const app=express();

app.get("/",(req,resp)=>{
    resp.send("Home Page")
});
app.get("/users",(req,resp)=>{
    resp.send("user page")
});
app.get('/error',(req,resp,next)=>{
    const error=new Error('')
    error.status=404;
    next(error)
});
app.use((error,req,resp,next)=>{
  resp.status(error.status || 500).send("Try after some time") 
  //resp.send(error.status || 500).send("Try after some time")//not use chaning send 
})
app.listen(3200)