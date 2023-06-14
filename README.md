# Refactor Crud Operations 
# Problem

In the  project, i encountered the issue of repetitive code while implementing the user and order models. 
i had separate CRUD operations for each model, but the logic was essentially the same with only minor variations 
in variable names and model references. This led to code duplication and made maintenance and future updates more 
challenging. i needed a solution to eliminate this redundancy and improve code organization.

# Solution

To address the problem of code duplication and improve maintainability, i implemented the DRY (Don't Repeat Yourself) principle in 
the  project. i created a CrudOperations class that encapsulates the common CRUD operations and can be reused by different models.

The CrudOperations class, located in the src/services/class.crud.operations.js file, has the following key features:

    Constructor: The constructor accepts a service parameter, which represents the specific service implementation for a
    model (e.g., userService, orderService). This parameter ensures that the CRUD operations are applied to the correct model.

    httpCreateNewDocument: This method is responsible for creating a new document based on the HTTP POST request.
    It receives the request body, calls the create method of the corresponding service, and returns the created 
    document with an appropriate HTTP status.

    httpGetAllDocuments: This method retrieves all documents for the given model. It calls the get method of the
    corresponding service and returns the retrieved documents with an appropriate HTTP status.

    By utilizing the CrudOperations class, i was able to significantly reduce code duplication and improve the maintainability of the 
    project. 

