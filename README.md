***E-Commerce application***

***Tech-stack***
    **Node.js
    express.js framework for server ,
    Postgresql for database ,
    Sequelise ORM ,
    Jest , supertest for testing**

**To start the application**
command=>
**npm run dev** (to start in dev),
**npm run start** (to start in production),
**npm test** (to run testing),


**Project Structure**
index.js is the main file,
API folder's having all the API's,
where service folder's having main business logic,

DB Models are in Models folder
DB folder having all the configurations of the database
wrapper file having all the queries
association file represents the relation between the models
Added DB schema design diagram in the project

Left the .env file in the project itself for easily configure

Swagger documentation is also added,
Added Postman collection (name-> Mirrar_e-commerce.postman_collection ) in the project,
Testing is done with jest and supertest,


**Assumptions:**
    Products can have multiple variants 
    for example => In e-commerce , A mobile(product) will have 8gb , 16gb (variants)
    So , I cardinality would be one : many
    so , product's ID will be in productVariant table as a foreign key of product
    A product can have many variants
    And introduced **isDeleted** column in DB to achieve soft delete

 
 Another way to optimise the space in database , if any data's are repeating in variant details of products , 
 we can split it into another table and  use that primary key as foreign key in productVariant table to reduce space 
 for ex => _colour_ column data's is repeating , 
 we can split it into another table as **colourDetails** and use its primary key as foreign key in productVariant table
 Added schema design for space optimsed by splited the colour details table just for demo 
 name of the file _schemaDesign_optimised_ in the project
    
    
