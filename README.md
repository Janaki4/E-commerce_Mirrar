#E-Commerce application

Tech-stack
    Node.js
    express.js framework for server
    Postgresql for database
    Sequelise ORM
    Jest , supertest for testing

To start the application
command=>
npm run dev (to start in dev)
npm run start (to start in production)
npm test (to run testing)


Project Structure
index.js is the main file
API folder's having all the API's
where service folder's having main business logic

DB Models are in Models folder
DB folder having all the configurations of the database

Left the .env file in the project itself for easily configure

Swagger documentation is also added
Added Postman collection
Testing is done with jest and supertest



Assumptions:
    Products can have multiple variants 
    for example => In e-commerce , A mobile(product) will have 8gb , 16gb (variants)
    So , I cardinality would be one : many
    so , product's ID will be in productVariant table as a foreign key of product
    A product can have many variants 

