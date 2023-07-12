module.exports = {
    // method of operation
    get: {
        tags: ['Search product , description , variant'], // operation's tag.
        description: 'search product , description , variant', // operation's desc.
        operationId: 'Search', // unique operation id.
        parameters: [{
            name: 'searchterm',
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
                description: 'search result fetched', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        example: {
                            payload: [
                                {
                                    "productId": "08f387b6-11db-4a97-9270-923e896367ce",
                                    "productName": "I phone 12",
                                    "description": "mobile phone",
                                    "basePrice": 45000,
                                    "brandName": "ONE PLUS",
                                    "isDeleted": null,
                                    "createdAt": null,
                                    "updatedAt": null,
                                    "variantId": null,
                                    "variantName": null,
                                    "additionalCost": null,
                                    "SKU": null,
                                    "specification": null,
                                    "stocksAvailable": null,
                                    "productColor": null,
                                    "productDetailProductId": null
                                },]
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
