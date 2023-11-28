import UserModel from "../models/admin.models.js";
export default class UserContoller{
    getRegister(req, res){
        res.render("perfect");

    }

    getLogin(req, res){
        res.render('home');
    }

    postRegister(req, res){
        const {name, email, password} = req.body;
        UserModel.add(name, email, password);
        res.render('perfect');
    }

    postLogin(req, res){
        const {email, password} =  req.body;
        const user = UserModel.isValid(email, password);
        if(!user){
            return res.send("Invalid user");
        }
        return res.render("post");
    }
} 