export const state = () => ({
    leaderboard: [
        {
            id: 'mikhailjr',
        },
        {
            id: 'antoniojr',
        },
        {
            id: 'alexjr',
        },
        {
            id: 'johnjr',
        },
        {
            id: 'donaldmaen',
        },
    ]
})

export const mutations = {
    loadLeaderboardUsers(state, {newArray}) {
        state.leaderboard = newArray;
    }
}

export const actions = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FIND AND SET LEADERBOARD USERS
    loadLeaderboardUsers(context) {
        let username = '';
        let avatar = '';
        let registrationDate = '';
        let selledAmount = 0;
        let workingPlaces = [];
        const usersArray = context.rootState.users.users;
        const newArray = context.state.leaderboard.map(leaderboardUser => {
            usersArray.forEach(user => {
                if (user.id === leaderboardUser.id) {
                    username = user.username;
                    avatar = user.avatar;
                    registrationDate = user.registrationDate;
                    selledAmount = user.selledAmount;
                    workingPlaces = user.workingPlaces;
                }
            })
            return {
                id: leaderboardUser.id,
                username,
                avatar,
                registrationDate,
                selledAmount,
                workingPlaces
            }
        })

        context.commit('loadLeaderboardUsers', {newArray});
    }
}