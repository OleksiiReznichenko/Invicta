export const state = () => ({
    myOrders: [
        {
            id: 'MacDonalds',
            name: 'MacDonalds',
            image: '/products/mac.jpg',
            date: '14 march, 10:25',
            time: '10:25',
            price: 49.99,
            itemsAmount: 10,
            isValidated: false,
            isConfirmed: false,
            status: 'waiting',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
        {
            id: 'Dell',
            name: 'Dell',
            image: '/products/dell.jpg',
            date: '14 march, 12:00',
            time: '12:00',
            price: 199.99,
            itemsAmount: 5,
            isValidated: true,
            isConfirmed: false,
            status: 'validated',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
        {
            id: 'Dole',
            name: 'Dole',
            image: '/products/dole.jpg',
            date: '24 march, 16:33',
            time: '16:33',
            price: 134.99,
            itemsAmount: 2,
            isValidated: true,
            isConfirmed: false,
            status: 'validated',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
        {
            id: 'NikeUk',
            name: 'Nike Uk',
            image: '/products/nikeUk.jpg',
            date: '11 march, 5:20',
            time: '5:20',
            price: 254.99,
            itemsAmount: 14,
            isValidated: false,
            isConfirmed: false,
            status: 'waiting',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
        {
            id: 'PG',
            name: 'P&G',
            image: '/products/pg.jpg',
            date: '4 march, 10:55',
            time: '10:55',
            price: 240.99,
            itemsAmount: 10,
            isValidated: false,
            isConfirmed: false,
            status: 'waiting',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
        {
            id: 'M',
            name: 'M',
            image: '/products/m.jpg',
            date: '5 may, 11:25',
            time: '11:25',
            price: 129.99,
            itemsAmount: 12,
            isValidated: false,
            isConfirmed: false,
            status: 'waiting',
            buyer: {
                id: 'valeriibord',
                firstName: 'Valerii',
                lastName: 'Bord',
                avatar: '/avatar3.png',
            },
            chat: {
                messages: [
                    {
                        id: 'messageMe1',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:20'
                    },
                    {
                        id: 'messageBuyer1',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:25'
                    },
                    {
                        id: 'messageBuyer2',
                        person: 'buyer',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:30'
                    },
                    {
                        id: 'messageMe2',
                        person: 'me',
                        text: `
                        I'm waiting for my account information and a bunch 
                        of other stuff. You have three days to fulfill my requirements
                        `,
                        date: '12 April, 12:35'
                    },
                ],
                notifications: [
                    {
                        id: 'notification1',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification2',
                        text: `
                        Buyer has confirmed order fulfillment
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification3',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification4',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                    {
                        id: 'notification5',
                        text: `
                        The Buyer confirmed the order
                        `,
                        date: '12 April, 12:22'
                    },
                ]
            }
        },
    ]
})

export const mutations = {
    isConfirmedToTrue(state, {id}) {
        const order = state.myOrders.find(el => {
            return el.id === id;
        })
        order.isConfirmed = true;
    },
    statusToConfirmed(state, {id}) {
        const order = state.myOrders.find(el => {
            return el.id === id;
        })
        order.status = 'confirmed';
    },
    addChatMessage(state, {id, message}) {
        const order = state.myOrders.find(el => {
            return el.id === id;
        });

        order.chat.messages.push(message);
    }
}