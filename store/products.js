export const state = () => ({
    products: {
        giftcards: [
            {
                id: 'NikeUk',
                type: 'giftcard',
                category: 'clothes',
                name: 'Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'PG',
                type: 'giftcard',
                category: 'shopping',
                name: 'P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dole',
                type: 'giftcard',
                category: 'technology',
                name: 'Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dell',
                type: 'giftcard',
                category: 'technology',
                name: 'Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'M',
                type: 'giftcard',
                category: 'shopping',
                name: 'M',
                price: 129.99,
                oldPrice: 149.99,
                photo: '/projects/Invicta/products/m.jpg',
                photoBig: '/projects/Invicta/products/mBig.jpg',
                discount: '',
                amountInStock: 10,
                country: 'USA',
                description: `
                    M giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dole',
                type: 'giftcard',
                category: 'technology',
                name: 'Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'MacDonalds',
                type: 'giftcard',
                category: 'food',
                name: 'MacDonalds',
                price: 49.99,
                oldPrice: 59.99,
                photo: '/projects/Invicta/products/mac.jpg',
                photoBig: '/projects/Invicta/products/macBig.jpg',
                discount: '',
                amountInStock: 100,
                country: 'USA',
                description: `
                    MacDonalds giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-10 days`,
                sellerId: 'alexjr',
            },

            
            {
                id: 'Dell',
                type: 'giftcard',
                category: 'technology',
                name: 'Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'M',
                type: 'giftcard',
                category: 'shopping',
                name: 'M',
                price: 129.99,
                oldPrice: 149.99,
                photo: '/projects/Invicta/products/m.jpg',
                photoBig: '/projects/Invicta/products/mBig.jpg',
                discount: '',
                amountInStock: 10,
                country: 'USA',
                description: `
                    M giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dole',
                type: 'giftcard',
                category: 'technology',
                name: 'Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dole',
                type: 'giftcard',
                category: 'technology',
                name: 'Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'MacDonalds',
                type: 'giftcard',
                category: 'food',
                name: 'MacDonalds',
                price: 49.99,
                oldPrice: 59.99,
                photo: '/projects/Invicta/products/mac.jpg',
                photoBig: '/projects/Invicta/products/macBig.jpg',
                discount: '',
                amountInStock: 100,
                country: 'USA',
                description: `
                    MacDonalds giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-10 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Dell',
                type: 'giftcard',
                category: 'technology',
                name: 'Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'M',
                type: 'giftcard',
                category: 'shopping',
                name: 'M',
                price: 129.99,
                oldPrice: 149.99,
                photo: '/projects/Invicta/products/m.jpg',
                photoBig: '/projects/Invicta/products/mBig.jpg',
                discount: '',
                amountInStock: 10,
                country: 'USA',
                description: `
                    M giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'MacDonalds',
                type: 'giftcard',
                category: 'food',
                name: 'MacDonalds',
                price: 49.99,
                oldPrice: 59.99,
                photo: '/projects/Invicta/products/mac.jpg',
                photoBig: '/projects/Invicta/products/macBig.jpg',
                discount: '',
                amountInStock: 100,
                country: 'USA',
                description: `
                    MacDonalds giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-10 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'Ozon',
                type: 'giftcard',
                category: 'shopping',
                name: 'Ozon',
                price: 59.99,
                oldPrice: 79.99,
                photo: '/projects/Invicta/products/ozon.jpg',
                photoBig: '/projects/Invicta/products/ozonBig.jpg',
                discount: '',
                amountInStock: 50,
                country: 'Russia',
                description: `
                    Ozon giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-14 days`,
                sellerId: 'alexjr',
            },
        ],

        accounts: [
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'alexjr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'alexjr',
            },












































            
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            // {
            //     id: 'AccId Dole',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dole',
            //     price: 134.99,
            //     oldPrice: 159.99,
            //     photo: '/projects/Invicta/products/dole.jpg',
            //     photoBig: '/projects/Invicta/products/doleBig.jpg',
            //     discount: '',
            //     amountInStock: 20,
            //     country: 'USA',
            //     description: `
            //         Dole giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `5-14 days`
            // },
            // {
            //     id: 'AccId Dell',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dell',
            //     price: 199.99,
            //     oldPrice: undefined,
            //     photo: '/projects/Invicta/products/dell.jpg',
            //     photoBig: '/projects/Invicta/products/dellBig.jpg',
            //     discount: '',
            //     amountInStock: 5,
            //     country: 'USA',
            //     description: `
            //         Dell giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `14-21 days`
            // },
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            // {
            //     id: 'AccId Dole',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dole',
            //     price: 134.99,
            //     oldPrice: 159.99,
            //     photo: '/projects/Invicta/products/dole.jpg',
            //     photoBig: '/projects/Invicta/products/doleBig.jpg',
            //     discount: '',
            //     amountInStock: 20,
            //     country: 'USA',
            //     description: `
            //         Dole giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `5-14 days`
            // },
            // {
            //     id: 'AccId Dell',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dell',
            //     price: 199.99,
            //     oldPrice: undefined,
            //     photo: '/projects/Invicta/products/dell.jpg',
            //     photoBig: '/projects/Invicta/products/dellBig.jpg',
            //     discount: '',
            //     amountInStock: 5,
            //     country: 'USA',
            //     description: `
            //         Dell giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `14-21 days`
            // },
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            // {
            //     id: 'AccId Dole',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dole',
            //     price: 134.99,
            //     oldPrice: 159.99,
            //     photo: '/projects/Invicta/products/dole.jpg',
            //     photoBig: '/projects/Invicta/products/doleBig.jpg',
            //     discount: '',
            //     amountInStock: 20,
            //     country: 'USA',
            //     description: `
            //         Dole giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `5-14 days`
            // },
            // {
            //     id: 'AccId Dell',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dell',
            //     price: 199.99,
            //     oldPrice: undefined,
            //     photo: '/projects/Invicta/products/dell.jpg',
            //     photoBig: '/projects/Invicta/products/dellBig.jpg',
            //     discount: '',
            //     amountInStock: 5,
            //     country: 'USA',
            //     description: `
            //         Dell giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `14-21 days`
            // },
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            // {
            //     id: 'AccId Dole',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dole',
            //     price: 134.99,
            //     oldPrice: 159.99,
            //     photo: '/projects/Invicta/products/dole.jpg',
            //     photoBig: '/projects/Invicta/products/doleBig.jpg',
            //     discount: '',
            //     amountInStock: 20,
            //     country: 'USA',
            //     description: `
            //         Dole giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `5-14 days`
            // },
            // {
            //     id: 'AccId Dell',
            //     type: 'account',
            //     category: 'technology',
            //     name: 'Account Dell',
            //     price: 199.99,
            //     oldPrice: undefined,
            //     photo: '/projects/Invicta/products/dell.jpg',
            //     photoBig: '/projects/Invicta/products/dellBig.jpg',
            //     discount: '',
            //     amountInStock: 5,
            //     country: 'USA',
            //     description: `
            //         Dell giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `14-21 days`
            // },
            // {
            //     id: 'AccId NikeUk',
            //     type: 'account',
            //     category: 'clothes',
            //     name: 'Account Nike UK',
            //     price: 254.99,
            //     oldPrice: 299.99,
            //     photo: '/projects/Invicta/products/nikeUK.jpg',
            //     photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
            //     discount: '',
            //     amountInStock: 1,
            //     country: 'UK',
            //     description: `
            //         Nike giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `7-12 days`
            // },
            // {
            //     id: 'AccId PG',
            //     type: 'account',
            //     category: 'shopping',
            //     name: 'Account P&G',
            //     price: 240.99,
            //     oldPrice: 309.99,
            //     photo: '/projects/Invicta/products/pg.jpg',
            //     photoBig: '/projects/Invicta/products/pgBig.jpg',
            //     discount: '',
            //     amountInStock: 2,
            //     country: 'USA',
            //     description: `
            //         P&G giftcards (with pin) Can only be used online or in store.
            //         Safe - storable - friendly. Get up to 20% bonuses for your purchase
            //     `,
            //     warranty: `Can only be used online or in stores`,
            //     eta: `8-14 days`
            // },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId NikeUk',
                type: 'account',
                category: 'clothes',
                name: 'Account Nike UK',
                price: 254.99,
                oldPrice: 299.99,
                photo: '/projects/Invicta/products/nikeUK.jpg',
                photoBig: '/projects/Invicta/products/nikeUKBig.jpg',
                discount: '',
                amountInStock: 1,
                country: 'UK',
                description: `
                    Nike giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `7-12 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId PG',
                type: 'account',
                category: 'shopping',
                name: 'Account P&G',
                price: 240.99,
                oldPrice: 309.99,
                photo: '/projects/Invicta/products/pg.jpg',
                photoBig: '/projects/Invicta/products/pgBig.jpg',
                discount: '',
                amountInStock: 2,
                country: 'USA',
                description: `
                    P&G giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `8-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dole',
                type: 'account',
                category: 'technology',
                name: 'Account Dole',
                price: 134.99,
                oldPrice: 159.99,
                photo: '/projects/Invicta/products/dole.jpg',
                photoBig: '/projects/Invicta/products/doleBig.jpg',
                discount: '',
                amountInStock: 20,
                country: 'USA',
                description: `
                    Dole giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `5-14 days`,
                sellerId: 'antoniojr',
            },
            {
                id: 'AccId Dell',
                type: 'account',
                category: 'technology',
                name: 'Account Dell',
                price: 199.99,
                oldPrice: undefined,
                photo: '/projects/Invicta/products/dell.jpg',
                photoBig: '/projects/Invicta/products/dellBig.jpg',
                discount: '',
                amountInStock: 5,
                country: 'USA',
                description: `
                    Dell giftcards (with pin) Can only be used online or in store.
                    Safe - storable - friendly. Get up to 20% bonuses for your purchase
                `,
                warranty: `Can only be used online or in stores`,
                eta: `14-21 days`,
                sellerId: 'antoniojr',
            },  
        ]
    }
})