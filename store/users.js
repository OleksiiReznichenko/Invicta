export const state = () => ({
    users: [
        {
            id: 'warrenjs',
            username: 'warrenjs',
            email: 'warrenjs@gmail.com',
            password: '654321',
            isAdmin: false,
            avatar: '/projects/Invicta/avatar.png',
            balance: 5,
            shoppingNumber: 11,
            registrationDate: 'Jul 09, 2021',
            selledAmount: 10,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: 'aleksys228',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: true,
                achievementComment: true,
                achievementLike: true,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
        {
            id: 'mikhailjr',
            username: 'mikhailjr',
            email: 'mikhail@gmail.com',
            password: '654321',
            isAdmin: false,
            balance: 12,
            avatar: '/projects/Invicta/avatar5.png',
            registrationDate: 'Jul 09, 2021',
            selledAmount: 10,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: false,
                achievementComment: false,
                achievementLike: false,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
        {
            id: 'antoniojr',
            username: 'antoniojr',
            email: 'antoniojr@gmail.com',
            password: '654321',
            isAdmin: true,
            balance: 12,
            avatar: '/projects/Invicta/defaultUserAvatar.jpg',
            registrationDate: 'Sep 12, 2021',
            selledAmount: 13,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: true,
                achievementComment: true,
                achievementLike: true,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Nike UK',
                    productPhoto: '/projects/Invicta/products/nikeUK.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '13r31112',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
                {
                    id: '1132312',
                    productId: 'AccId Dell',
                    productTitle: 'Account Dell',
                    productPhoto: '/projects/Invicta/products/dell.jpg',
                    buyerId: 'alexjr',
                    sellerId: 'antoniojr',
                    date: 'Today',
                    isValidated: false,
                    isConfirmed: false,
                    itemsAmount: 1,
                    status: 'waiting',
                    chat: {
                        messages: [],
                        notifications: [
                            {
                                id: 'notification1',
                                text: 'This dicussion started',
                                date: 'Today'
                            },
                        ]
                    }
                },
            ],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
        {
            id: 'alexjr',
            username: 'alexjr',
            email: 'alex@gmail.com',
            password: '654321',
            isAdmin: true,
            balance: 123,
            avatar: '/projects/Invicta/avatar3.png',
            registrationDate: 'May 1, 2021',
            selledAmount: 20,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: true,
                achievementComment: false,
                achievementLike: true,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
        {
            id: 'johnjr',
            username: 'johnjr',
            email: 'john@gmail.com',
            password: '654321',
            isAdmin: false,
            balance: 43,
            avatar: '/projects/Invicta/avatar4.png',
            registrationDate: 'Jan 21, 2021',
            selledAmount: 14,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: true,
                achievementComment: false,
                achievementLike: false,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
        {
            id: 'donaldmaen',
            username: 'donaldmaen',
            email: 'donald@gmail.com',
            password: '654321',
            isAdmin: false,
            balance: 33,
            avatar: '/projects/Invicta/avatar.png',
            registrationDate: 'Jul 19, 2021',
            selledAmount: 9,
            following: [],
            followers: [],
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: false,
                achievementComment: false,
                achievementLike: true,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: [
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
                    oldPrice: null,
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
            ]
        },
    ],
})

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SUBSCRIBE
    subscribe(state, {myId, userId}) {
        const me = state.users.find(el => {
            return el.id === myId;
        })

        const user = state.users.find(el => {
            return el.id === userId;
        })

        me.following.push(userId);

        user.followers.push(myId);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // UNSUBSCRIBE
    unSubscribe(state, {myId, userId}) {
        const me = state.users.find(el => {
            return el.id === myId;
        })

        const user = state.users.find(el => {
            return el.id === userId;
        })

        me.following.find((el, i, arr) => {
            if (el === userId) {
                arr.splice(i, 1);
            }
        })
        
        user.followers.find((el, i, arr) => {
            if (el === myId) {
                arr.splice(i, 1);
            }
        })
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE USER DASHBOARD PERIOD
    changePeriod(state, {value, id}) {
        const user = state.users.find(el => {
            return el.id === id;
        })
        user.dashboard.period = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE USER PASSWORD
    changeUserPassword(state, {email, newPassword}) {
        const user = state.users.find(el => {
            return el.email === email;
        })
        user.password = newPassword;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE USER BALANCE
    changeBalance(state, {value, id}) {
        const user = state.users.find(el => {
            return el.id === id;
        })
        user.balance = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE USER INFO
    changeUserInfo(state, {id, newEmail, newPassword, newUsername, newTelegramUsername, newDiscordId, newBio}) {
        const user = state.users.find(el => {
            return el.id === id;
        })


        if (newEmail !== user.email) {
            user.email = newEmail;
        }

        if (newPassword !== user.password) {
            user.password = newPassword;
        }

        if (newUsername !== user.username) {
            user.username = newUsername;
        }

        if (newTelegramUsername !== user.telegramUsername) {
            user.telegramUsername = newTelegramUsername;
        }

        if (newDiscordId !== user.discordId) {
            user.discordId = newDiscordId;
        }

        if (newBio !== user.bio) {
            user.bio = newBio;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD SHOPPING ITEM
    addShoppingItem(state, {item}) {
        const buyer = state.users.find(el => {
            if (el.id === item.buyerId) {
                return el;
            }
        });
        
        const seller = state.users.find(el => {
            if (el.id === item.sellerId) {
                return el;
            }
        });

        buyer.shoppingItems.push(item);
        seller.orders.push(item);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD NOTIFICATION
    addNotification(state, {item, notification}) {
        const buyer = state.users.find(el => {
            if (el.id === item.buyerId) {
                return el;
            }
        });
        
        const seller = state.users.find(el => {
            if (el.id === item.sellerId) {
                return el;
            }
        });

        buyer.shoppingItems.find(el => {
            if (el.id === item.id) {
                el.chat.notifications.push(notification);
            }
        })

        seller.shoppingItems.find(el => {
            if (el.id === item.id) {
                el.chat.notifications.push(notification);
            }
        })
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD SHOPPING ITEM MESSAGE
    addShoppingItemChatMessage(state, {item, message}) {
        const buyer = state.users.find(el => {
            if (el.id === item.buyerId) {
                return el;
            }
        });

        buyer.shoppingItems.find(el => {
            if (el.id === item.id) {
                el.chat.messages.push(message);
            }
        })
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD ORDER CHAT MESSAGE
    addOrderChatMessage(state, {item, message}) {
        const seller = state.users.find(el => {
            if (el.id === item.sellerId) {
                return el;
            }
        });

        seller.orders.find(el => {
            if (el.id === item.id) {
                el.chat.messages.push(message);
            }
        })
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE STATUS TO VALIDATED
    statusToValidated(state, {item}) {
        const buyer = state.users.find(el => {
            if (el.id === item.buyerId) {
                return el;
            }
        });

        buyer.shoppingItems.find(el => {
            if (el.id === item.id) {
                el.status = 'validated';
                el.isValidated = true;
            }
        })
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE STATUS TO CONFIRMED
    statusToConfirmed(state, {item}) {
        const seller = state.users.find(el => {
            if (el.id === item.sellerId) {
                return el;
            }
        });

        seller.orders.find(el => {
            if (el.id === item.id) {
                el.status = 'confirmed';
                el.isConfirmed = true;
            }
        })
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE AVATAR
    changeAvatar(state, {id, newAvatar}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.avatar = newAvatar;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE TOP BANNER
    changeTopBanner(state, {id, newBanner}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.topBanner = newBanner;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE SIDE BANNER
    changeSideBanner(state, {id, newBanner}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.sideBanner = newBanner;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE PROFILE BANNER
    changeProfileBanner(state, {id, newBanner}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.profileBanner = newBanner;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD USER
    addUser(state, {id, username, email, password}) {
        const dateObj = new Date();
        const year = dateObj.getFullYear();
        const monthNumber = dateObj.getMonth();
        const day = dateObj.getDate();

        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        const month = months[monthNumber];

        const date = `${month} ${day}, ${year}`;

        state.users.push({
            id: id,
            username: username,
            email: email,
            password: password,
            balance: 0,
            avatar: '/projects/Invicta/defaultUserAvatar.jpg',
            registrationDate: date,
            selledAmount: 0,
            following: [],
            followers: [],
            rank: 'beginner',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            profileBanner: '/projects/Invicta/backProfileImage.png',
            discordId: '',
            telegramUsername: '',
            referralLink: 'https://invicta.cards/register/6632f60f652',
            achievements: {
                achievementHeart: false,
                achievementComment: false,
                achievementLike: false,
            },
            dashboard: {
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                usersReferred: 4,
                earnedFromReferredUsers: 1,
                period: 'all time',
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            },
            shoppingItems: [],
            orders: [],
            topBanner: null,
            sideBanner: null,
            products: []
        })
    }
}