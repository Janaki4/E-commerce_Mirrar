module.exports = {
    // method of operation
    get: {
        tags: ['Product'], // operation's tag.
        description: 'get single product details', // operation's desc.
        operationId: 'product', // unique operation id.
        parameters: [{
            name: 'productid',
            in: 'path',
            schema: {
                type: 'string',
                required: true
            }
        }], // expected params.
        // expected responses
        requestBody: {},
        responses: {
            // response code
            200: {
                description: 'Product details fetched', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                "count": 1,
                                "rows": [
                                    {
                                        "productId": "be6b308c-b5d5-4dc5-acd2-77d0c4683651",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-11T18:18:44.463Z",
                                        "updatedAt": "2023-07-11T18:18:44.463Z",
                                        "productVariantDetails": [{
                                            "variantId": "1659ad0b-58a8-477f-9270-78be78434925",
                                            "variantName": "8 GB RAM, 128 GB ROM",
                                            "additionalCost": 15,
                                            "SKU": "12416561",
                                            "specification": "6 GB RAM, 128 GB ROM , snapdragon processor",
                                            "stocksAvailable": 100,
                                            "productColor": "red",
                                            "isDeleted": false,
                                            "createdAt": "2023-07-11T16:42:15.689Z",
                                            "updatedAt": "2023-07-11T16:42:15.689Z",
                                            "productDetailProductId": "bb41233d-24f2-4ff8-9c71-1d14de333b61"
                                        },
                                        {
                                            "variantId": "e5805445-bfb2-448a-9e77-cb7e1ed15ee8",
                                            "variantName": "6 GB RAM, 128 GB ROM",
                                            "additionalCost": 15,
                                            "SKU": "12416561",
                                            "specification": "6 GB RAM, 128 GB ROM , snapdragon processor",
                                            "stocksAvailable": 100,
                                            "productColor": "red",
                                            "isDeleted": false,
                                            "createdAt": "2023-07-11T18:23:50.692Z",
                                            "updatedAt": "2023-07-11T18:23:50.692Z",
                                            "productDetailProductId": "bb41233d-24f2-4ff8-9c71-1d14de333b61"
                                        },]
                                    },
                                ]
                            },
                        },
                    },
                },
            },

            400: {
                description: 'Requested file was not found ', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                message: "error"
                            }
                        }
                    },
                },
            },
        },
    },
};
