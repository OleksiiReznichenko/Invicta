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
            status: 'opened'
        },
        {
            orderId: '13r23fFIVREINFFKFD10',
            transactionId: 'RTXCKMCDFFFD221',
            status: 'closed'
        },
    ],
    transactions: [
        {
            id: 'PR0MJKL2M91H',
            sellerId: 'antoniojr',
            productTitle: 'Nike UK',
            amount: 25,
            timestamp: 'Apr 04, 2022'
        },
        {
            id: 'EWF09PR0MJKL2M91H',
            sellerId: 'antoniojr',
            productTitle: 'Nike UK',
            amount: 15,
            timestamp: 'Apr 04, 2022'
        },
        {
            id: 'feEFGEPR0MJKL2M91H',
            sellerId: 'antoniojr',
            productTitle: 'Nike UK',
            amount: 33,
            timestamp: 'Apr 04, 2022'
        },
    ],
    reports: [
        {
            id: 'FE21PR0MJKL2M91H',
            category: 'Misinformation',
            description: 'Bad quality',
            cards: 'Nike UK',
            reporterId: 'antoniojr',
            sellerId: 'johnjr',
            status: 'closed',
        },
        {
            id: 'PR0MJKL2M91H',
            category: 'Misinformation',
            description: 'Bad quality',
            cards: null,
            reporterId: 'antoniojr',
            sellerId: 'johnjr',
            status: 'closed',
        },
        {
            id: 'GLKNPR0MJKL2M91H',
            category: 'Misinformation',
            description: '',
            cards: null,
            reporterId: 'antoniojr',
            sellerId: 'johnjr',
            status: 'opened',
        },
    ],
    deposits: [
        {
            id: 'feEFGEPR0MJKL2M91H',
            userId: 'antoniojr',
            amount: 30,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'denied'
        },
        {
            id: 'GGEWR0MJKL2MGWH',
            userId: 'antoniojr',
            amount: 100,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'pending'
        },
        {
            id: 'fGTKKJNJ0MJKdFL2M91H',
            userId: 'antoniojr',
            amount: 42,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'completed'
        },
    ],
    withdrawals: [
        {
            id: 'feEFGEPR0MJKL2M91H',
            userId: 'antoniojr',
            amount: 42,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'denied'
        },
        {
            id: 'GGEWR0MJKL2MGWH',
            userId: 'antoniojr',
            amount: 82,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'pending'
        },
        {
            id: 'fGTKKJNJ0MJKdFL2M91H',
            userId: 'antoniojr',
            amount: 102,
            btcAddress: 'bc1wefwefdsfs2312312',
            time: 'Apr 04, 2022 16:06:08',
            status: 'completed'
        },
    ],
    applications: [
        {
            id: 'APZR6CP41RSZ',
            userId: 'antoniojr',
            why: 'Melting Pot Giftcards',
            pastExperience: 'I have made some sales on nulled.to, @KingJon can vouch for me!',
            lookingToSell: 'I would start selling Melting Pot Giftcards at a low rate, i would also consider selling Grimaldi Pizza Giftcards.',
            status: 'accepted'
        },
        {
            id: 'GGEWR0MJKL2MGWH',
            userId: 'antoniojr',
            why: 'Melting Pot Giftcards',
            pastExperience: 'I have made some sales on nulled.to, @KingJon can vouch for me!',
            lookingToSell: 'I would start selling Melting Pot Giftcards at a low rate, i would also consider selling Grimaldi Pizza Giftcards.',
            status: 'pending'
        },
        {
            id: 'feEFGEPR0MJKL2M91H',
            userId: 'antoniojr',
            why: 'Melting Pot Giftcards',
            pastExperience: 'I have made some sales on nulled.to, @KingJon can vouch for me!',
            lookingToSell: 'I would start selling Melting Pot Giftcards at a low rate, i would also consider selling Grimaldi Pizza Giftcards.',
            status: 'denied'
        },
    ]
})

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD REPORT
    addReport(state, {newReport}) {
        state.reports.push(newReport);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD WITHDRAWAL
    addWithdrawal(state, {newWithdrawal}) {
        state.withdrawals.push(newWithdrawal);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD DEPOSIT
    addDeposit(state, {newDeposit}) {
        state.deposits.push(newDeposit);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD INTERVENTION REQUEST
    addInterventionRequest(state, {newInterventionRequest}) {
        state.interventionRequests.push(newInterventionRequest);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD TRANSACTION
    addTransaction(state, {newTransaction}) {
        state.transactions.push(newTransaction);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD APPLICATION
    addApplication(state, {newApplication}) {
        state.applications.push(newApplication);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE ADMIN DASHBOARD PERIOD
    changePeriod(state, {value}) {
        state.period = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE REPORT STATUS
    changeReportStatus(state, {id, newStatus}) {
        const report = state.reports.find(el => {
            return el.id === id;
        })
        report.status = newStatus;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE APPLICATION STATUS
    changeApplicationStatus(state, {id, newStatus}) {
        const application = state.applications.find(el => {
            return el.id === id;
        })
        application.status = newStatus;
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD NEW CATEGORY
    addNewCategory(state, {value}) {
        state.categories.push(value);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DELETE CATEGORY
    deleteCategory(state, {value}) {
        const index = state.categories.findIndex(el => {
            if (el === value) {
                return true;
            }
        })
        state.categories.splice(index, 1)
    },
}