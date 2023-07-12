module.exports = {
    // method of operation
    patch: {
        tags: ['Product'], // operation's tag.
        description: 'Update product', // operation's desc.
        operationId: 'product', // unique operation id.
        parameters: [], // expected params.
        // expected responses
        requestBody: {
            description: 'product payload',
            // expected request body
            required: true,
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        example: {
                            "productName": "Black berry",
                            "description": "mobile phone",
                            "basePrice": 45000
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            201: {
                description: 'Product updated', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: [
                                1,
                                [
                                    {
                                        "productId": "bb41233d-24f2-4ff8-9c71-1d14de333b61",
                                        "productName": "Black berry",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "I phone",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-11T16:38:16.348Z",
                                        "updatedAt": "2023-07-12T11:58:16.665Z"
                                    }
                                ]
                            ],
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
