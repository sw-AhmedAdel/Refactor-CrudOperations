class CrudOperations {
  constructor(service) {
    this.service = service;
    this.httpGetAllDocuments = this.httpGetAllDocuments.bind(this);
  }
  httpCreateNewDocument = async (req, res) => {
    const item = req.body;
    const data = await this.service.create(item);
    return res.status(201).json(data);
  };
  /*By using the arrow function syntax (async httpCreateNewDocument = (req, res) => {}), 
  the context of this will be automatically bound to the CrudOperations instance,
   and you won't encounter the error when accessing this.service.*/

  async httpGetAllDocuments(req, res) {
    const data = await this.service.get();
    return res.status(201).json(data);
  }
}

module.exports = CrudOperations;

/*
     The error message indicates that the this.service property is undefined in your
     httpCreateNewDocument method. This issue arises because when you pass the 
     httpCreateNewDocument method as a callback to the router, the context of this is
     lost, resulting in this being undefined within the method.

    To resolve this, you can bind the context of this to the httpCreateNewDocument 
    method. You can achieve this by modifying the constructor of the CrudOperations class 
    By adding this.httpCreateNewDocument = this.httpCreateNewDocument.bind(this); in the constructor, 
   you ensure that the this context is maintained 
    when the httpCreateNewDocument method is invoked. This way, this.service will refer to the correct object.
  
   async httpCreateNewDocument(req, res) {
    const item = req.body;
    const message = await this.service.create(item);
    return res.status(201).json(message);
  }
      // this.httpCreateNewDocument = this.httpCreateNewDocument.bind(this);
  */

/*CrudOperations.prototype.httpCreateNewDocument =
CrudOperations.prototype.httpCreateNewDocument.bind(CrudOperations.prototype);*/
