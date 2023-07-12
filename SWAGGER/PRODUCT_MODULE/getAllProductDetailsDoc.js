module.exports = {
    // method of operation
    get: {
        tags: ['Product'], // operation's tag.
        description: 'get all product details', // operation's desc.
        operationId: 'product', // unique operation id.
        parameters: [], // expected params.
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
                                "count": 46,
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
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "6e67a3fa-a806-49f2-9111-1d6231c6b3bb",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:52:58.408Z",
                                        "updatedAt": "2023-07-12T08:52:58.408Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "d55772ff-5203-4df5-a21b-0e90dba50ae9",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:47:47.036Z",
                                        "updatedAt": "2023-07-12T08:47:47.036Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "c0d1b569-d4d2-45c5-b07c-2562bf225794",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:55:02.094Z",
                                        "updatedAt": "2023-07-12T08:55:02.094Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "d43e6c3c-57bb-4804-b605-726b8c0590cb",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:48:43.808Z",
                                        "updatedAt": "2023-07-12T08:48:43.808Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "1da051ec-1af3-46fa-a31c-683d07266d50",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:53:14.535Z",
                                        "updatedAt": "2023-07-12T08:53:14.535Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "a9f5bc9f-33b5-4001-a6bc-40d447873059",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:51:29.079Z",
                                        "updatedAt": "2023-07-12T08:51:29.079Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "e196622c-c467-4012-8f5d-e5fbbc877aa6",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:46:14.170Z",
                                        "updatedAt": "2023-07-12T08:46:14.170Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "f40e439c-bc25-4baf-872c-5a4de979d2a5",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-12T08:46:47.035Z",
                                        "updatedAt": "2023-07-12T08:46:47.035Z",
                                        "productVariantDetails": []
                                    },
                                    {
                                        "productId": "b60119bb-1fbb-4a5b-b660-199ad8fa2a53",
                                        "productName": "I phone 12",
                                        "description": "mobile phone",
                                        "basePrice": 45000,
                                        "brandName": "ONE PLUS",
                                        "isDeleted": false,
                                        "createdAt": "2023-07-11T16:38:56.665Z",
                                        "updatedAt": "2023-07-11T16:38:56.665Z",
                                        "productVariantDetails": []
                                    }
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
