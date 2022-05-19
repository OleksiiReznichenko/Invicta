export const state = () => ({
    isLoggedIn: true,
    isOpenNofication: false,
    notificationWindow: '',
    // user: {}
    user: {
        id: 'warrenjs',
        username: 'warrenjs',
        email: 'warrenjs@gmail.com',
        password: '654321',
        avatar: '/projects/Invicta/avatar.png',
        balance: '5.00',
        shoppingNumber: 11,
        registrationDate: 'Jul 09, 2021',
        selledAmount: 10,
        workingPlaces: [
            {
                name: 'Figma',
                image: '/projects/Invicta/figma.png'
            },
            {
                name: 'Yandex',
                image: '/projects/Invicta/yandex.png'
            },
        ],
        following: 10,
        followers: 23,
        rank: 'super seller',
        bio: `
        I love, I hate, I'm losing my mind. It's 
        'cause I'm in the loony bin I love, I hate, 
        I'm losing my mind It's 'cause, 'cause,
        cause I'm crazy
        `,
        backgroundImage: '/projects/Invicta/backProfileImage.png',
        discordId: '',
        telegramUsername: 'aleksys228',
        achievements: {
            achievementHeart: true,
            achievementComment: true,
            achievementLike: true,
        },
        isMyProfile: true,
    }
})

export const mutations = {
    isLoggedInToFalse(state) {
        state.user = {};
        state.isLoggedIn = false;
    },
    isLoggedInToTrue(state, {loggedInUser}) {
        state.user = loggedInUser;
        state.user.isMyProfile = true;
        state.isLoggedIn = true;
    },
    editProfileUsername(state, {value}) {
        state.user.username = value;
    },
    editProfileEmail(state, {value}) {
        state.user.email = value;
    },
    editProfilePassword(state, {value}) {
        state.user.password = value;
    },
    editProfileTelegramUsername(state, {value}) {
        state.user.telegramusername = value;
    },
    editProfileDiscordUserId(state, {value}) {
        state.user.discordUserId = value;
    },
    editProfileBio(state, {value}) {
        state.user.bio = value;
    },
    subscribe(state) {
        state.user.following += 1;
    },
    unSubscribe(state) {
        state.user.following -= 1;
    },
    isOpenNoficationToFalse(state) {
        state.isOpenNofication = false;
    },
    isOpenNoficationToTrue(state) {
        state.isOpenNofication = true;
    },
    getNotificationWindow(state, {value}) {
        state.notificationWindow = value;
    },
}

export const actions = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAVIGATION DROPDOWN FUNCTIONAL
    dropdownFunctional(context, payload) {
        payload.dropdownOpener.addEventListener('click', () => {
            if (!payload.dropdown.classList.contains('opened')) {
                payload.dropdown.classList.add('opened');
                payload.dropdown.style.display = 'block';
                setTimeout(() => {
                    payload.dropdown.style.opacity = 1;
                }, 10);

                if (window.outerWidth < 850 && window.outerWidth > 550 && window.outerHeight > 600) {
                    payload.nav.style.width = '50rem';
                    payload.nav.style.position = 'fixed';
                }

                if (window.outerWidth <= 550) {
                    payload.nav.style.width = '44rem';
                    payload.nav.style.position = 'fixed';
                }
            } else {
                // if (window.outerWidth < 850) return;
                payload.dropdown.style.opacity = 0;
                setTimeout(() => {
                    payload.dropdown.style.display = 'none';
                    payload.dropdown.classList.remove('opened');
                }, 200);

                if (window.outerWidth < 850 && window.outerHeight > 600) {
                    payload.nav.style.position = 'absolute';
                    payload.nav.style.width = '66%';
                }

                if (window.outerWidth < 600) {
                    payload.nav.style.position = 'absolute';
                    payload.nav.style.width = '90%';
                }
            }
        })

        payload.closeNavBtn.addEventListener('click', () => {
            if (window.outerWidth >= 850 || window.outerHeight < 600) return;
            
            payload.dropdown.style.opacity = 0;
            setTimeout(() => {
                payload.dropdown.style.display = 'none';
                payload.dropdown.classList.remove('opened');
            }, 200);

            if (window.outerWidth < 850) {
                payload.nav.style.position = 'absolute';
                payload.nav.style.width = '66%';
            }

            if (window.outerWidth < 600) {
                payload.nav.style.position = 'absolute';
                payload.nav.style.width = '90%';
            }
        })

        window.addEventListener('click', (e) => {
            if (window.outerWidth < 850 && window.outerHeight > 600) return;
            const isClickInsideElement = payload.dropdown.contains(e.target);
            const isClickInsideElement2 = payload.dropdownOpener.contains(e.target);

            if (isClickInsideElement2) return;
            if (!isClickInsideElement && payload.dropdown.classList.contains('opened')) {
                payload.dropdown.style.opacity = 0;
                setTimeout(() => {
                    payload.dropdown.style.display = 'none';
                    payload.dropdown.classList.remove('opened');
                }, 200);
            }
        });
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SHOW NOTIFICATION WINDOW
    showNotificationWindow(context, {notificationWindow, text, isBad}) {
                // console.log(context.state.isOpenNofication)
        if (context.state.isOpenNofication || !context.state.notificationWindow) return;
        context.commit('isOpenNoficationToTrue');

        context.state.notificationWindow.textContent = text;

        if (isBad) {
            context.state.notificationWindow.classList.remove('notification-good');
            context.state.notificationWindow.classList.add('notification-bad');
        } else {
            context.state.notificationWindow.classList.remove('notification-bad');
            context.state.notificationWindow.classList.add('notification-good');
        }

        context.state.notificationWindow.style.display = 'block';
        setTimeout(() => {
            context.state.notificationWindow.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            context.state.notificationWindow.style.opacity = 0;
            setTimeout(() => {
                context.state.notificationWindow.style.display = 'none';

                context.commit('isOpenNoficationToFalse');
            }, 200);
        }, 1500);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SLIDE UP FUNCTION
    slideUp(state, {target, duration = 500}) {
        target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.boxSizing = 'border-box';
            target.style.height = target.offsetHeight + 'px';
            target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;

            window.setTimeout( () => {
                target.style.display = 'none';
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SLIDE DOWN FUNCTION
    slideDown(context, {target, duration = 500}) {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');

        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE SLIDES
    slideToggle(context, {target, duration = 500}) {
        if (window.getComputedStyle(target).display === 'none') {
            return context.dispatch('slideDown', {target, duration});
        } else {
            return context.dispatch('slideUp', {target, duration});
        }
    },
}