module.exports = {
    // method of operation
    post: {
        tags: ['Product'], // operation's tag.
        description: 'Add product', // operation's desc.
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
                            "productName": "I phone 12",
                            "description": "mobile phone",
                            "basePrice": 45000,
                            "brandName": "ONE PLUS"
                        },
                    },
                },
            },
        },
        responses: {
            // response code
            201: {
                description: 'Product created', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: {
                                "productId": "86218554-ad2b-4e3e-bfec-d32953efb5c8",
                                "isDeleted": false,
                                "productName": "I phone 12",
                                "description": "mobile phone",
                                "basePrice": 45000,
                                "brandName": "ONE PLUS",
                                "updatedAt": "2023-07-12T10:50:45.434Z",
                                "createdAt": "2023-07-12T10:50:45.434Z"
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
