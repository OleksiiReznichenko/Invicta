export default function({app, store}) {
    app.router.beforeEach((to, from, next) => {
        if (!to.name && to.matched.length === 0) {
            return next('/browse');
        }

        if (
            to.name === 'adminDashboard' ||
            to.name === 'createProduct' ||
            to.name === 'dashboard' ||
            to.name === 'deposit' ||
            to.name === 'editProfile' ||
            to.name === 'invictaAds' ||
            to.name === 'orders' ||
            to.name === 'reportProduct' ||
            to.name === 'reportUser' ||
            to.name === 'shoppingItems' ||
            to.name === 'withdraw'
        ) {
            if (!store.state.isLoggedIn && !app.$cookies.get('loggedInUser')) {
                return next('/');
            }
        }
        
        if (
            to.name === 'confirmEmail' ||
            to.name === 'login' ||
            to.name === 'register' ||
            to.name === 'restorePassword' ||
            to.name === 'setEmail'
        ) {
            if (store.state.isLoggedIn) {
                return next('/users/' + store.state.user.id);
            }
        }
        
        if (
            to.name === 'confirmEmail' ||
            to.name === 'restorePassword'
        ) {
            if (!store.state.forgotPasswordEmail) {
                return next('/setEmail');
            }
        }

        if (to.fullPath.includes('adminDashboard')) {
            // CHECK IF USER IS ADMIN
            let isAdmin = false;
            store.state.users.users.find(el => {
                if (el.id === store.state.user.id) {
                    isAdmin = el.isAdmin;
                }
            })

            // IF USER IS NOT ADMIN - REDIRECT TO MAIN PAGE
            if (!isAdmin) {
                return next('/');
            }
        }

        return next();
    })
}