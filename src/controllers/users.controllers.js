
import ProductModel from "../models/users.model.js";
import { products } from "../models/users.model.js";
export default class UserControllers{

    getProducts(req, res){
        let products = ProductModel.get();
        console.log(products);
        res.render("jobs", {products});
    };

    addProducts(req, res){
        ProductModel.add(req.body);
        let products = ProductModel.get();
        res.render("jobs", {products});

    }

    

    getHome(req, res){
        return res.render('home');
    }

    getjobs(req,res){
        return res.render('jobs');
    }

    getDetails(req,res){
        return res.render('details');
    }
    getPostjobs(req,res){
        return res.render('post');
    }
    
}