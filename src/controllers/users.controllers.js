
import ProductModel from "../models/users.model.js";
import { products } from "../models/users.model.js";
export default class UserControllers{

    getProducts(req, res) {
        const productsData = ProductModel.get();
        const jobDetails = productsData.length > 0 ? productsData[0] : {}; // Assuming there is at least one job
        res.render("jobs", { products: productsData, jobDetails });
    }
    

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
        const jobId = parseInt(req.params.id);
    const product = ProductModel.getbyid(jobId);
    return res.render('details', { product });
    }
    getPostjobs(req,res){
        return res.render('post');
    }
    
}