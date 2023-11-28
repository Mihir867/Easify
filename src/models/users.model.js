export default class ProductModel {
    constructor(_id, _tech, _companyname, _location, _salary, _app, _date) {
      this.id = _id;
      this.tech = _tech;
      this.companyname = _companyname;
      this.location = _location;
      this.salary = _salary;
      this.app = _app;
      this.date = _date;
    }
  
    static get() {
      console.log(products);
      return products;
    }
  
    static add(productObj) {
      let newprod = new ProductModel(
        products.length + 1,
        productObj.tech,
        productObj.companyname,
        productObj.location,
        productObj.salary,
        productObj.app,
        productObj.date
      );
      products.push(newprod);
    }
  
    static getbyid(id) {
      return products.find((p) => p.id === id);
    }
  }
  
 var products = [
    new ProductModel(
      1,
      'Angular Developer',
      'Coding ninjas',
      'Banaglore',
      19.99,
      '1',
      '2023-01-01'
    ),
    new ProductModel(
      2,
      'Software Tester',
      'UBER',
      'Pune',
      29.99,
      '2',
      '2023-02-01'
    ),
    new ProductModel(
      3,
      'QA tester',
      'Facebook',
      'Gurugram',
      39.99,
      '3',
      '2023-03-01'
    ),
  ];

  export {products}
  