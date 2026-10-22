// Archived Invicta frontend demo data. No real accounts, purchases or payments.
// Each call to state() creates fresh arrays/objects for Nuxt SSR and Vuex.

const createDashboard = () => ({
    sales: { daily: 1, weekly: 2, monthly: 5, yearly: 9, allTime: 10 },
    revenue: { daily: 1, weekly: 2, monthly: 5, yearly: 9, allTime: 10 },
    usersReferred: 4,
    earnedFromReferredUsers: 1,
    period: 'all time',
    chartData: {
        weekly: [10, 0, 5, 10, 15, 9, 8],
        monthly: [5, 2, 22, 10],
        yearly: [13, 4, 15, 8, 1, 3],
        allTime: [10, 0, 5, 5, 2, 22, 10]
    }
});

const createCampaign = (id, type, bannerType, bannerSrc, itemsAmount, currentDay, priority, cardsIds) => ({
    id,
    type,
    customName: id.includes('1') ? 'Campaign 1' : 'Campaign 2',
    bannerType,
    bannerSrc,
    itemsAmount,
    currentDay,
    priority,
    cardsIds: [...cardsIds],
    sales: { daily: 1, weekly: 2, monthly: 5, yearly: 9, allTime: 10 },
    revenue: { daily: 1, weekly: 2, monthly: 5, yearly: 9, allTime: 10 },
    chartData: {
        weekly: [10, 0, 5, 10, 15, 9, 8],
        monthly: [5, 2, 22, 10],
        yearly: [13, 4, 15, 8, 1, 3],
        allTime: [10, 0, 5, 5, 2, 22, 10]
    }
});

const createCampaigns = () => [
    createCampaign('activeCampaign1', 'active', 'Horizontal', 'default', 6, 3, 15,
        [null, null, 'NikeUk', 'PG', null, null, 'Dole', 'Dell']),
    createCampaign('activeCampaign2', 'active', 'Vertical', null, 4, 2, 20,
        [null, null, null, null, null, null, null, null]),
    createCampaign('archivedCampaign1', 'archived', 'Horizontal', 'default', 6, 3, 15,
        [null, null, 'NikeUk', 'PG', null, null, 'Dole', 'Dell']),
    createCampaign('archivedCampaign2', 'archived', 'Vertical', null, 4, 2, 20,
        [null, null, 'NikeUk', 'PG', null, null, 'Dole', 'Dell'])
];

// Preserve the four sample products displayed on users' profile pages.
const DEMO_PROFILE_PRODUCTS = [
    { id: 'NikeUk', type: 'giftcard', category: 'clothes', name: 'Nike UK',
      price: 254.99, oldPrice: 299.99, photo: '/products/nikeUK.jpg',
      photoBig: '/products/nikeUKBig.jpg', discount: '', amountInStock: 1,
      country: 'UK', description: 'Sample Nike UK gift card listing.',
      warranty: 'Demo listing only', eta: '7-12 days', sellerId: 'antoniojr' },
    { id: 'PG', type: 'giftcard', category: 'shopping', name: 'P&G',
      price: 240.99, oldPrice: 309.99, photo: '/products/pg.jpg',
      photoBig: '/products/pgBig.jpg', discount: '', amountInStock: 2,
      country: 'USA', description: 'Sample P&G gift card listing.',
      warranty: 'Demo listing only', eta: '8-14 days', sellerId: 'alexjr' },
    { id: 'Dole', type: 'giftcard', category: 'technology', name: 'Dole',
      price: 134.99, oldPrice: 159.99, photo: '/products/dole.jpg',
      photoBig: '/products/doleBig.jpg', discount: '', amountInStock: 20,
      country: 'USA', description: 'Sample Dole gift card listing.',
      warranty: 'Demo listing only', eta: '5-14 days', sellerId: 'alexjr' },
    { id: 'Dell', type: 'giftcard', category: 'technology', name: 'Dell',
      price: 199.99, oldPrice: null, photo: '/products/dell.jpg',
      photoBig: '/products/dellBig.jpg', discount: '', amountInStock: 5,
      country: 'USA', description: 'Sample Dell gift card listing.',
      warranty: 'Demo listing only', eta: '14-21 days', sellerId: 'alexjr' }
];

const DEMO_ORDERS = [
    { id: 'demo-order-001', productId: 'NikeUk',
      productTitle: 'Nike UK', productPhoto: '/products/nikeUK.jpg',
      price: 254.99, date: 'Oct 22, 2026', status: 'waiting' },
    { id: 'demo-order-002', productId: 'account-dell-antoniojr',
      productTitle: 'Account Dell', productPhoto: '/products/dell.jpg',
      price: 199.99, date: 'Oct 20, 2026', status: 'validated' },
    { id: 'demo-order-003', productId: 'account-pg-antoniojr',
      productTitle: 'Account P&G', productPhoto: '/products/pg.jpg',
      price: 240.99, date: 'Oct 18, 2026', status: 'confirmed' },
    { id: 'demo-order-004', productId: 'account-nike-uk-antoniojr',
      productTitle: 'Account Nike UK', productPhoto: '/products/nikeUK.jpg',
      price: 254.99, date: 'Oct 16, 2026', status: 'waiting' }
];

const createDemoOrder = (item) => ({
    ...item,
    buyerId: 'alexjr',
    sellerId: 'antoniojr',
    isValidated: item.status === 'validated' || item.status === 'confirmed',
    isConfirmed: item.status === 'confirmed',
    itemsAmount: 1,
    chat: {
        messages: [],
        notifications: [{
            id: `notification-${item.id}`,
            text: 'Discussion started',
            date: item.date
        }]
    }
});

const cloneOrder = (item) => ({
    ...item,
    chat: {
        messages: (item.chat?.messages || []).map(message => ({ ...message })),
        notifications: (item.chat?.notifications || []).map(notification => ({ ...notification }))
    }
});

const USER_PROFILES = [
    { id: 'warrenjs', username: 'warrenjs', email: 'warrenjs@gmail.com',
      password: '654321', isAdmin: false, avatar: '/avatar.png', balance: 5,
      shoppingNumber: 11, registrationDate: 'Jul 09, 2021', selledAmount: 10,
      telegramUsername: 'aleksys228', achievements: [true, true, true] },
    { id: 'mikhailjr', username: 'mikhailjr', email: 'mikhail@gmail.com',
      password: '654321', isAdmin: false, avatar: '/avatar5.png', balance: 12,
      registrationDate: 'Jul 09, 2021', selledAmount: 10,
      achievements: [false, false, false] },
    { id: 'antoniojr', username: 'antoniojr', email: 'antoniojr@gmail.com',
      password: '654321', isAdmin: true, avatar: '/defaultUserAvatar.jpg', balance: 12,
      registrationDate: 'Sep 12, 2021', selledAmount: 13,
      achievements: [true, true, true] },
    { id: 'alexjr', username: 'alexjr', email: 'alex@gmail.com',
      password: '654321', isAdmin: true, avatar: '/avatar3.png', balance: 123,
      registrationDate: 'May 1, 2021', selledAmount: 20,
      achievements: [true, false, true] },
    { id: 'johnjr', username: 'johnjr', email: 'john@gmail.com',
      password: '654321', isAdmin: false, avatar: '/avatar4.png', balance: 43,
      registrationDate: 'Jan 21, 2021', selledAmount: 14,
      achievements: [true, false, false] },
    { id: 'donaldmaen', username: 'donaldmaen', email: 'donald@gmail.com',
      password: '654321', isAdmin: false, avatar: '/avatar.png', balance: 33,
      registrationDate: 'Jul 19, 2021', selledAmount: 9,
      achievements: [false, false, true] }
];

export const state = () => {
    const orders = DEMO_ORDERS.map(createDemoOrder);

    return {
        users: USER_PROFILES.map(profile => {
            const { achievements, telegramUsername, ...userInfo } = profile;

            return {
                ...userInfo,
                following: [],
                followers: [],
                rank: 'super seller',
                bio: 'Sample account for the Invicta frontend demo.',
                profileBanner: '/backProfileImage.png',
                discordId: '',
                telegramUsername: telegramUsername || '',
                referralLink: 'https://invicta.cards/register/6632f60f652',
                achievements: {
                    achievementHeart: achievements[0],
                    achievementComment: achievements[1],
                    achievementLike: achievements[2]
                },
                dashboard: createDashboard(),
                shoppingItems: profile.id === 'alexjr' ? orders.map(cloneOrder) : [],
                orders: profile.id === 'antoniojr' ? orders.map(cloneOrder) : [],
                topBanner: null,
                sideBanner: null,
                campaigns: createCampaigns(),
                products: DEMO_PROFILE_PRODUCTS.map(product => ({ ...product }))
            };
        })
    };
};

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD NEW CAMPAIGN
    addNewCampaign(state, {userId, newCampaign}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        user.campaigns.unshift(newCampaign);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE CAMPAIGN NAME
    changeCustomName(state, {userId, campaignId, newName}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        const item = user.campaigns.find(el => {
            return el.id === campaignId;
        })

        if (item) {
            item.customName = newName;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE ITEMS AMOUNT
    changeItemsAmount(state, {userId, campaignId, value}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        const item = user.campaigns.find(el => {
            return el.id === campaignId;
        })

        if (item) {
            item.itemsAmount = value;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE BANNER TYPE
    changeBannerType(state, {userId, campaignId, value}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        const item = user.campaigns.find(el => {
            return el.id === campaignId;
        })

        if (item) {
            item.bannerType = value;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE BANNER SRC
    changeBannerSrc(state, {userId, campaignId, newBanner}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        const item = user.campaigns.find(el => {
            return el.id === campaignId;
        })

        if (item) {
            item.bannerSrc = newBanner;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD PRODUCT CARD
    addProductCard(state, {userId, campaignId, index, cardId}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        const item = user.campaigns.find(el => {
            return el.id === campaignId;
        })

        if (item) {
            item.cardsIds[index] = cardId;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CREATE NEW PRODUCT
    createNewProduct(state, {userId, newProduct}) {
        const user = state.users.find(el => {
            return el.id === userId;
        })

        user.products.push(newProduct);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SUBSCRIBE
    subscribe(state, {myId, userId}) {
        const me = state.users.find(el => {
            return el.id === myId;
        })

        const user = state.users.find(el => {
            return el.id === userId;
        })

        if (!me || !user || myId === userId) return;
        if (!me.following.includes(userId)) me.following.push(userId);
        if (!user.followers.includes(myId)) user.followers.push(myId);
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
    // CHANGE PROFILE BANNER
    rankDown(state, {id}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.isAdmin = false;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE PROFILE BANNER
    rankUp(state, {id}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        user.isAdmin = true;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // UPDATE USER BALANCE
    updateUserBalance(state, {id, action, amount}) {
        const user = state.users.find(el => {
            if (el.id === id) {
                return el;
            }
        })

        if (action === 'Add') {
            user.balance += amount;
        } else if (action === 'Remove') {
            user.balance -= amount;
        }
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
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);
        if (!buyer || !seller) return;

        const buyerItem = cloneOrder(item);
        const sellerOrder = cloneOrder(item);
        if (!buyer.shoppingItems.some(entry => entry.id === item.id)) {
            buyer.shoppingItems.push(buyerItem);
        }
        if (!seller.orders.some(entry => entry.id === item.id)) {
            seller.orders.push(sellerOrder);
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD NOTIFICATION
    addNotification(state, {item, notification}) {
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);

        // Buyer transactions live in shoppingItems; seller transactions in orders.
        const buyerItem = buyer?.shoppingItems.find(entry => entry.id === item.id);
        const sellerOrder = seller?.orders.find(entry => entry.id === item.id);

        if (buyerItem) buyerItem.chat.notifications.push({ ...notification });
        if (sellerOrder) sellerOrder.chat.notifications.push({ ...notification });
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD SHOPPING ITEM MESSAGE
    addShoppingItemChatMessage(state, {item, message}) {
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);
        const buyerItem = buyer?.shoppingItems.find(entry => entry.id === item.id);
        const sellerOrder = seller?.orders.find(entry => entry.id === item.id);
        if (buyerItem) buyerItem.chat.messages.push({ ...message });
        if (sellerOrder) sellerOrder.chat.messages.push({ ...message });
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD ORDER CHAT MESSAGE
    addOrderChatMessage(state, {item, message}) {
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);
        const buyerItem = buyer?.shoppingItems.find(entry => entry.id === item.id);
        const sellerOrder = seller?.orders.find(entry => entry.id === item.id);
        if (sellerOrder) sellerOrder.chat.messages.push({ ...message });
        if (buyerItem) buyerItem.chat.messages.push({ ...message });
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE STATUS TO VALIDATED
    statusToValidated(state, {item}) {
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);
        const buyerItem = buyer?.shoppingItems.find(entry => entry.id === item.id);
        const sellerOrder = seller?.orders.find(entry => entry.id === item.id);
        for (const entry of [buyerItem, sellerOrder]) {
            if (entry && !entry.isConfirmed) {
                entry.status = 'validated';
                entry.isValidated = true;
            }
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE STATUS TO CONFIRMED
    statusToConfirmed(state, {item}) {
        const buyer = state.users.find(user => user.id === item.buyerId);
        const seller = state.users.find(user => user.id === item.sellerId);
        const buyerItem = buyer?.shoppingItems.find(entry => entry.id === item.id);
        const sellerOrder = seller?.orders.find(entry => entry.id === item.id);
        for (const entry of [buyerItem, sellerOrder]) {
            if (entry) {
                entry.status = 'confirmed';
                entry.isValidated = true;
                entry.isConfirmed = true;
            }
        }
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
            isAdmin: false,
            balance: 0,
            avatar: '/defaultUserAvatar.jpg',
            registrationDate: date,
            selledAmount: 0,
            following: [],
            followers: [],
            rank: 'beginner',
            bio: 'Sample account for the Invicta frontend demo',
            profileBanner: '/backProfileImage.png',
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
            campaigns: [],

            products: []
        })
    }
}
