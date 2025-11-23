import express from 'express'
import nodemailer from 'nodemailer' 
const app=express();
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'anamparwez984@gamil.com',
        pass:''
    }
});
//app.use(express.urlencoded({extended:false})) //to print int= the console
app.use(express.json())
app.set('view engine','ejs')
app.set('views','./view')
app.get("/mail",(req,resp)=>{
    resp.render("mail")
})
app.post("/email-send",(req,resp)=>{
    console.log(req.body);
    const mailoption={
        from:'anamparwez984@gamil.com',
        to:'anamparwez984@gamil.com',
        subject:req.body.subject,
        text:req.body.email
    }
    transporter.sendMail(mailoption,(error,info)=>{
        if(error){
            resp.send("Email failed")
        }
        else{
            resp.send("mail send")
        }
    })
    resp.send("Email is send")
})
app.listen(3200)