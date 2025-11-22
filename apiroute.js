import express from'express'
import userData from './user.json' with {type:'json'}
const appp=express();
appp.get('/',(req,resp)=>{
    console.log(userData);
    resp.send("user List API")

}
)
app.get('/user/:id',(req,resp)=>{
    const id=req.params.id
    console.log(id);
    resp.send(id)
})
app.listen(3200)