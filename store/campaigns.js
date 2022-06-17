export const state = () => ({
    campaigns: [
        {
            id: 'activeCampaign1',
            type: 'active',
            customName: 'Campaign 1',
            bannerType: 'Horizontal',
            bannerSrc: 'default',
            itemsAmount: 6,
            cardsIds: [
                'NikeUk',
                'PG',
                null,
                null,
                'Dole',
                'Dell',
            ],
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
            chartData: {
                weekly: [10, 0, 5, 10, 15, 9, 8],
                monthly: [5, 2, 22, 10],
                yearly: [13, 4, 15, 8, 1, 3],
                allTime: [10, 0, 5, 5, 2, 22, 10],
            }
        },
        {
            id: 'activeCampaign2',
            type: 'active',
            customName: 'Campaign 2',
            bannerType: 'Vertical',
            bannerSrc: null,
            itemsAmount: 4,
            cardsIds: [
                null,
                null,
                null,
                null,
                null,
                null,
            ],
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
            chartData: {
                weekly: [10, 0, 5, 10, 15, 9, 8],
                monthly: [5, 2, 22, 10],
                yearly: [13, 4, 15, 8, 1, 3],
                allTime: [10, 0, 5, 5, 2, 22, 10],
            }
        },
        {
            id: 'archivedCampaign1',
            type: 'archived',
            customName: 'Campaign 1',
            bannerType: 'Horizontal',
            bannerSrc: 'default',
            itemsAmount: 6,
            cardsIds: [
                'NikeUk',
                'PG',
                null,
                null,
                'Dole',
                'Dell',
            ],
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
            chartData: {
                weekly: [10, 0, 5, 10, 15, 9, 8],
                monthly: [5, 2, 22, 10],
                yearly: [13, 4, 15, 8, 1, 3],
                allTime: [10, 0, 5, 5, 2, 22, 10],
            }
        },
        {
            id: 'archivedCampaign2',
            type: 'archived',
            customName: 'Campaign 2',
            bannerType: 'Vertical',
            bannerSrc: null,
            itemsAmount: 4,
            cardsIds: [
                'NikeUk',
                'PG',
                null,
                null,
                'Dole',
                'Dell',
            ],
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
            chartData: {
                weekly: [10, 0, 5, 10, 15, 9, 8],
                monthly: [5, 2, 22, 10],
                yearly: [13, 4, 15, 8, 1, 3],
                allTime: [10, 0, 5, 5, 2, 22, 10],
            }
        },
    ]
})

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE CAMPAIGN NAME
    changeCustomName(state, {id, newName}) {
        const item = state.campaigns?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.customName = newName;
        }
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE ITEMS AMOUNT
    changeItemsAmount(state, {id, value}) {
        const item = state.campaigns?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.itemsAmount = value;
        }
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE BANNER TYPE
    changeBannerType(state, {id, value}) {
        const item = state.campaigns?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.bannerType = value;
        }
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE BANNER SRC
    changeBannerSrc(state, {id, newBanner}) {
        const item = state.campaigns?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.bannerSrc = newBanner;
        }
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD PRODUCT CARD
    addProductCard(state, {id, index, cardId}) {
        const item = state.campaigns?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.cardsIds[index] = cardId;
        }
    },
}