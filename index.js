import express from 'express';
import UserControllers from './src/controllers/users.controllers.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import UserContoller from './src/controllers/admin.controllers.js';
import { products } from './src/models/users.model.js';

const usermodel = new UserControllers();
const usercontoller = new UserContoller();
const server = express();

server.set('view engine', 'ejs');
server.set("views", path.join(path.resolve(), 'src', 'views'));
server.use(express.static(path.join(path.resolve(), 'src', 'images')));

server.use(ejsLayouts);
server.use(express.urlencoded({ extended: true }));

// Routes for the user model
server.get("/", usermodel.getHome);
server.get("/jobs", usermodel.getProducts);
server.get('/details/:id', (req, res) => {
  const jobId = parseInt(req.params.id);
  const product = products.find(product => product.id === jobId);
  console.log({products, jobId, product});

  res.render('details', product);
});
server.get("/postjobs", usermodel.getPostjobs);
server.post("/jobs", usermodel.addProducts);
server.post("/register", usercontoller.postRegister);
server.post("/login", usercontoller.postLogin);
server.get("/register", usercontoller.getRegister);
server.get("/login", usercontoller.getLogin);




// Routes for the user controller


server.listen(3000, () => {
  console.log('Server is running on port 3000');
});