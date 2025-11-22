import express from 'express'
const app=express();

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.use(express.urlencoded({extended :false}))
app.use(express.static('public'))
app.get('/login',(req,resp)=>{
    resp.send(`
        <form>
        <input type="text" placeholder="Enter your Name" name="Name"/>
        <input type="password" placeholder="enter your password" name="Password"/>
        <button>Login</button>
        </form>
        `)
        
})
app.post("/submit",(req,resp)=>{
    resp.send("Yor form is submitted")
})
app.listen(3700)