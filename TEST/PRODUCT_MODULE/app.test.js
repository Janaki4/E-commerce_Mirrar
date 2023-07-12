const supertest = require('supertest')
const creatServer = require('../../HELPERS/server')
const app = creatServer()


describe('Product routes', () => {
    describe('Product CRUD routes', () => {
        describe('create product', () => {
            it('product created successfully', async () => {
                const productPayload = {
                    productName: "I phone 12",
                    description: "mobile phone",
                    basePrice: 45000,
                    brandName: "ONE PLUS"
                }
                const response = await supertest(app).post('/product/add').send(productPayload)
                expect(response.statusCode).toBe(201)
            })

            it('error because of missing payload property', async () => {
                // missing product name property , JOI Validation layer throwing error
                const productPayload = {
                    // productName: "I phone 12",
                    description: "mobile phone",
                    basePrice: 45000,
                    brandName: "ONE PLUS"
                }
                const response = await supertest(app).post('/product/add').send(productPayload)
                expect(response.statusCode).toBe(400)
                expect(response._body.error).toBe('ValidationError')
            })
        })


        describe('get single product', () => {
            it('id does not exists', async () => {
                let productId
                const response = await supertest(app).get(`/product/${productId}/single`)
                if (!productId) expect(response.statusCode).toBe(400)
            })

            it('id does exists', async () => {
                let productId = 'bb41233d-24f2-4ff8-9c71-1d14de333b61'
                const response = await supertest(app).get(`/product/${productId}/single`)
                expect(response.statusCode).toBe(200)
            })

        })

        describe('get all product', () => {
            it('fetched succesfully', async () => {
                const response = await supertest(app).get(`/product/products/all`)
                expect(response.statusCode).toBe(200)
            })
        })

        describe('update single product details', () => {
            it('missing product id ', async () => {
                let productId
                const response = await supertest(app).patch(`/product/${productId}/update`)
                if (!productId)
                    expect(response.statusCode).toBe(400)
            })

            it('missing payload property', async () => {
                let productId = 'bb41233d-24f2-4ff8-9c71-1d14de333b61'
                const productPayload = {}
                const response = await supertest(app).patch(`/product/${productId}/update`).send({})
                expect(response.statusCode).toBe(400)
            })

            it('updated successfully property', async () => {
                let productId = 'bb41233d-24f2-4ff8-9c71-1d14de333b61'
                const productPayload = {
                    productName: "Black berry",
                    description: "mobile phone",
                    basePrice: 55000
                }
                const response = await supertest(app).patch(`/product/${productId}/update`).send(productPayload)
                expect(response.statusCode).toBe(200)
                // expect(response._body.payload[0]).toBe(1)
            })
        })

        describe('delete single product details', () => {
            it('missing product id ', async () => {
                let productId
                const response = await supertest(app).delete(`/product/${productId}/delete`)
                if (!productId)
                    expect(response.statusCode).toBe(400)
            })

            it(' product deleted successfully', async () => {
                let productId = 'bb41233d-24f2-4ff8-9c71-1d14de333b61'

                const response = await supertest(app).delete(`/product/${productId}/delete`)
                expect(response.statusCode).toBe(200)
                // expect(response._body.payload[0]).toBe(1)
            })
        })
    })

    describe('Product variant routes', () => {
        describe('create product variant ', () => {

            it('product variant created successfully', async () => {
                const productVariantPayload = {
                    variantName: "6 GB RAM, 128 GB ROM",
                    additionalCost: 15,
                    SKU: "12416561",
                    specification: "6 GB RAM, 128 GB ROM , snapdragon processor",
                    stocksAvailable: 100,
                    productColor: "red",
                    productDetailProductId: "bb41233d-24f2-4ff8-9c71-1d14de333b61"
                }
                const response = await supertest(app).post('/product/variant/add').send(productVariantPayload)
                expect(response.statusCode).toBe(201)
            })

            it('error because of missing payload property', async () => {
                // missing productDetailProductId property
                const productVariantPayload = {
                    variantName: "6 GB RAM, 128 GB ROM",
                    additionalCost: 15,
                    SKU: "12416561",
                    specification: "6 GB RAM, 128 GB ROM , snapdragon processor",
                    stocksAvailable: 100,
                    productColor: "red",
                    // productDetailProductId: "bb41233d-24f2-4ff8-9c71-1d14de333b61"
                }

                const response = await supertest(app).post('/product/variant/add').send(productVariantPayload)
                expect(response.statusCode).toBe(400)
                expect(response._body.error).toBe('ValidationError')
            })
        })

        describe('get  product variant ', () => {

            it('product variant fetched ', async () => {
                const productVariantId = '7a5edeb2-a451-42ac-adbf-b219543664fe'
                const response = await supertest(app).get(`/product/variant/${productVariantId}/single`)
                expect(response.statusCode).toBe(200)
            })

            it('id does not exists', async () => {
                // missing productDetailProductId property
                let productVariantId
                const response = await supertest(app).get(`/product/variant/${productVariantId}/single`)
                expect(response.statusCode).toBe(400)
            })
        })
    })
    // and so on ..,
})
