export default function ({ store, route, redirect }) {
    // IS USER EXIST INDICATOR
    let userFound = false;

    // FIND USER IN USERS ARRAY
    store.state.users.users.find(el => {
        if (el.username === route.params.username) {
            userFound = true;
        }
    });

    // IF USER DOESN'T EXIST REDIRECT TO PROFILE PAGE
    if (!userFound) {
        return redirect('/users/' + store.state.user.username);
    }
}