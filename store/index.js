export const state = () => ({
    isLoggedIn: true,
})

export const mutations = {
    isLoggedInFalse(state) {
        state.isLoggedIn = false;
    },
    isLoggedInTrue(state) {
        state.isLoggedIn = true;
    }
}

export const actions = {
    
}