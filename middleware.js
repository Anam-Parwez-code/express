import express from 'express'
const app=express();
function checkAge(req,resp,next){ 
    if(!req.query.age || req.query.age<18){
        resp.send("you cannot access this website");//middleware keep check on the request send by the uders
    }
    else{
    next();
    }
}
app.use(checkAge)
app.get("/",(req,resp)=>{
    resp.send("Home page");
})
app.get("/users",(req,resp)=>{
    resp.send("users Page")
})
app.get("/products",(req,resp)=>{
    resp.send("products page")
})
//app.listen(3400)