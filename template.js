//template is used to fetch data from nodejs(server) and display on the html file example(ejs,pug,handlebars)
import express from 'express'
//import morgan from 'morgan'
const app=express();
app.set('view engine','ejs') //to say express that we are using ejs
app.set('views','./view') // to show where is my folder  views is used as a setting for the where is our filea
app.get("/",(req,resp)=>{
    resp.render('home',{name:'Anam Parwez',Profession:'software Engineer'}) // data will be fetch from here and get merged with html this is template
});
app.listen(3400)