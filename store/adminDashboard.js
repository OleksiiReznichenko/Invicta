export const state = () => ({
    sales: {
        daily: 10,
        weekly: 232,
        monthly: 545,
        yearly: 1200,
        allTime: 3450
    },
    revenue: {
        daily: 100,
        weekly: 2045,
        monthly: 5000,
        yearly: 15011,
        allTime: 34340
    },
    depositsAmount: {
        daily: 100,
        weekly: 2045,
        monthly: 5000,
        yearly: 15011,
        allTime: 34340
    },
    withdrawsAmount: {
        daily: 134,
        weekly: 1202,
        monthly: 4553,
        yearly: 10193,
        allTime: 29001
    },
    transactionsAmount: {
        daily: 234,
        weekly: 3247,
        monthly: 9553,
        yearly: 25204,
        allTime: 63341
    },
    usersAmount: {
        daily: 50,
        weekly: 230,
        monthly: 1130,
        yearly: 4401,
        allTime: 12340
    },
    referralsAmount: {
        daily: 88,
        weekly: 432,
        monthly: 2130,
        yearly: 5903,
        allTime: 17832
    },
    period: 'all time',
    chartData: {
        weekly: [30, 5, 25, 40, 33, 13, 20],
        monthly: [80, 20, 166, 200],
        yearly: [240, 100, 315, 88, 333, 154],
        allTime: [740, 1300, 3315, 488, 533, 954],
    },
    categories: [
        'Technology', 
        'Beauty', 
        'Food', 
        'Clothes', 
        'Gaming', 
        'Streaming', 
        'Entertainment', 
        'Travel', 
        'Shopping', 
        'Wellness'
    ],
    interventionRequests: [
        {
            orderId: 'IVREINFFKFD10',
            transactionId: 'RTXCKMCDFFFD221',
            status: 'closed'
        },
        {
            orderId: 'eFDFIVREINFFKFD10',
            transactionId: 'RTXCKMCDFFFD221',
            status: 'closed'
        },
        {
            orderId: '13r23fFIVREINFFKFD10',
            transactionId: 'RTXCKMCDFFFD221',
            status: 'closed'
        },
    ],
    transactions: [
        {
            sellerUsername: 'antoniojr',
            sellerId: 'antoniojr',
            id: 'PR0MJKL2M91H',
            productTitle: 'Nike UK',
            amount: 25,
            timestamp: 'Apr 04, 2022'
        },
        {
            sellerUsername: 'antoniojr',
            sellerId: 'antoniojr',
            id: 'EWF09PR0MJKL2M91H',
            productTitle: 'Nike UK',
            amount: 15,
            timestamp: 'Apr 04, 2022'
        },
        {
            sellerUsername: 'antoniojr',
            sellerId: 'antoniojr',
            id: 'feEFGEPR0MJKL2M91H',
            productTitle: 'Nike UK',
            amount: 33,
            timestamp: 'Apr 04, 2022'
        },
    ],
    reports: [
        {
            id: 'FE21PR0MJKL2M91H',
            category: 'misinformation'
        },
        {
            id: 'PR0MJKL2M91H',
            category: 'misinformation'
        },
        {
            id: 'GLKNPR0MJKL2M91H',
            category: 'misinformation'
        },
    ],
    deposits: [
        {
            user: 'antoniojr',
            id: 'feEFGEPR0MJKL2M91H',
            amount: 30,
            time: 'Apr 04, 2022 16:06:08',
            status: 'completed'
        },
        {
            user: 'antoniojr',
            id: 'GGEWR0MJKL2MGWH',
            amount: 100,
            time: 'Apr 04, 2022 16:06:08',
            status: 'completed'
        },
        {
            user: 'antoniojr',
            id: 'fGTKKJNJ0MJKdFL2M91H',
            amount: 42,
            time: 'Apr 04, 2022 16:06:08',
            status: 'completed'
        },
    ],
    withdrawals: [
        {
            user: 'antoniojr',
            id: 'feEFGEPR0MJKL2M91H',
            status: 'completed'
        },
        {
            user: 'antoniojr',
            id: 'GGEWR0MJKL2MGWH',
            status: 'completed'
        },
        {
            user: 'antoniojr',
            id: 'fGTKKJNJ0MJKdFL2M91H',
            status: 'completed'
        },
    ],
    applications: [
        {
            id: 'APZR6CP41RSZ',
            username: 'antoniojr',
            status: 'accepted'
        },
        {
            id: 'GGEWR0MJKL2MGWH',
            username: 'antoniojr',
            status: 'accepted'
        },
        {
            id: 'feEFGEPR0MJKL2M91H',
            username: 'antoniojr',
            status: 'accepted'
        },
    ]
})

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE ADMIN DASHBOARD PERIOD
    changePeriod(state, {value}) {
        state.period = value;
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD NEW CATEGORY
    addNewCategory(state, {value}) {
        state.categories.push(value);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DELETE CATEGORY
    deleteCategory(state, {value}) {
        let index = state.categories.findIndex(el => {
            if (el === value) {
                return true;
            }
        })
        state.categories.splice(index, 1)
    },
}