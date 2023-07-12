module.exports = {
    // method of operation
    post: {
        tags: ['Product Variant'], // operation's tag.
        description: 'Add product variant', // operation's desc.
        operationId: 'product variant ', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'product variant payload',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "variantName": "6 GB RAM, 128 GB ROM",
                            "additionalCost": 15,
                            "SKU": "12416561",
                            "specification": "6 GB RAM, 128 GB ROM , snapdragon processor",
                            "stocksAvailable": 100,
                            "productColor": "red",
                            "productDetailProductId": "bb41233d-24f2-4ff8-9c71-1d14de333b61"
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            201: {
                description: 'Product varinat created', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                "variantId": "0fa83fd5-2d98-4b54-a209-9b9d1099503c",
                                "isDeleted": false,
                                "variantName": "6 GB RAM, 128 GB ROM",
                                "additionalCost": 15,
                                "SKU": "12416561",
                                "specification": "6 GB RAM, 128 GB ROM , snapdragon processor",
                                "stocksAvailable": 100,
                                "productColor": "red",
                                "productDetailProductId": "bb41233d-24f2-4ff8-9c71-1d14de333b61",
                                "updatedAt": "2023-07-12T12:02:58.021Z",
                                "createdAt": "2023-07-12T12:02:58.021Z"
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
