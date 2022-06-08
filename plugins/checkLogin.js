export default function ({ app, store, route }) {
    // IF THERE IS A LOGIN COOKIE = LOG IN THE USER
    if (app.$cookies.get('loggedInUser') && !store.state.isLoggedIn) {
        const loggedInUser = app.$cookies.get('loggedInUser');
        store.commit('isLoggedInToTrue', {loggedInUser: loggedInUser})
    }
}