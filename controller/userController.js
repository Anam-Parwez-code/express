 import {userList} from "../model/userMode.js";
 export function handleUsers(req,resp){
    const userData=userList();

    console.log(userData);
    resp.render('mvs',{users:userData}) //control the databse and view
}