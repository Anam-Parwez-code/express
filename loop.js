import express from 'express'
const app=express();
app.set('view engine','ejs')
app.set('views','./view')
 app.get("/users",(req,resp)=>{
  const users=['Anam','Saman','Anas']
  const isLogin=true;
  resp.render("users",{Users:users,isLogin});


    
});
app.listen(3200)