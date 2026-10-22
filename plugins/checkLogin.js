export default function ({ app, store }) {
    if (process.server) return;

    window.onNuxtReady(() => {
        if (store.state.isLoggedIn) return;

        let savedUser = app.$cookies.get('loggedInUser');

        if (!savedUser) return;

        if (typeof savedUser === 'string') {
            try {
                savedUser = JSON.parse(savedUser);
            } catch (error) {
                return;
            }
        }

        if (!savedUser || !savedUser.id) return;

        const user = store.state.users.users.find(
            item => item.id === savedUser.id
        );

        if (!user) return;

        store.commit('isLoggedInToTrue', {
            loggedInUser: user
        });
    });
}
