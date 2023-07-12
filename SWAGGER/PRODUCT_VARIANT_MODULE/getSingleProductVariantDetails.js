module.exports = {
    // method of operation
    get: {
        tags: ['Product Variant'], // operation's tag.
        description: 'get single product variant details', // operation's desc.
        operationId: 'product variant ', // unique operation id.
        parameters: [{
            name: 'variantid',
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
                description: 'Product variant details get served', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                "count": 1,
                                "rows": [
                                    {
                                        "variantId": "7a5edeb2-a451-42ac-adbf-b219543664fe",
                                        "variantName": "6 GB RAM, 128 GB ROM",
                                        "additionalCost": 15,
                                        "SKU": "12416561",
                                        "specification": "6 GB RAM, 128 GB ROM , snapdragon processor",
                                        "stocksAvailable": 100,
                                        "productColor": "blue",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-11T16:38:28.680Z",
                                        "updatedAt": "2023-07-11T18:24:26.879Z",
                                        "productDetailProductId": "bb41233d-24f2-4ff8-9c71-1d14de333b61",
                                        "productDetail": null
                                    }
                                ]
                            }
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
