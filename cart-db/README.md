# Cart DB

## Steps to setup

Install MongoDB.

Change path of the mongodb using this command `mongod --dbpath "cartdb'`

Or 

In CMD, use command 'mongo'

Create DB -> 'use cartapp'
Create collection -> 'db.createCollection('Product')'
Insert some products -> 
'db.Product.insert({"name": "Product1", "image": "assets/images/product1.jpg", "price": 150, "isInCart": false})'
'db.Product.insert({"name": "Product2", "image": "assets/images/product2.jpg", "price": 250, "isInCart": false})'

Run mongod

Mongo server is running in 'http://localhost:27017'



