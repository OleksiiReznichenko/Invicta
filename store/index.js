export const state = () => ({
    isLoggedIn: true,
    user: {
        firstName: 'Wade',
        lastName: 'Warren',
        avatar: '/avatar.png',
        balance: '5.00',
        shoppingNumber: 11
    }
})

export const mutations = {
    isLoggedInToFalse(state) {
        state.isLoggedIn = false;
    },
    isLoggedInToTrue(state) {
        state.isLoggedIn = true;
    }
}

export const actions = {
    dropdownFunctional(state, payload) {
        payload.dropdownOpener.addEventListener('click', (e) => {
            if (!payload.dropdown.classList.contains('opened')) {
                payload.dropdown.classList.add('opened');
                payload.dropdown.style.display = 'block';
                setTimeout(() => {
                    payload.dropdown.style.opacity = 1;
                }, 10);

                if (window.outerWidth < 600) {
                    payload.nav.style.width = '50rem';
                }
            } else {
                // if (window.outerWidth < 600) return;
                payload.dropdown.style.opacity = 0;
                setTimeout(() => {
                    payload.dropdown.style.display = 'none';
                    payload.dropdown.classList.remove('opened');
                }, 200);

                if (window.outerWidth < 600) {
                    payload.nav.style.width = '90%';
                }
            }
        })

        window.addEventListener('click', (e) => {
            if (window.outerWidth < 600) return;
            const isClickInsideElement = payload.dropdown.contains(e.target);
            const isClickInsideElement2 = payload.dropdownOpener.contains(e.target);

            if (isClickInsideElement2) return;
            if (!isClickInsideElement && payload.dropdown.classList.contains('opened')) {
                payload.dropdown.style.opacity = 0;
                setTimeout(() => {
                    payload.dropdown.style.display = 'none';
                    payload.dropdown.classList.remove('opened');
                }, 200);

                if (window.outerWidth < 600) {
                    payload.nav.style.width = '90%';
                }
            }
        });
    }
}