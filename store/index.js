export const state = () => ({
    isLoggedIn: true,
    user: {
        id: 'warrenjs',
        firstName: 'Wade',
        lastName: 'Warren',
        username: 'warrenjs',
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
        state.isLoggedIn = false;
    },
    isLoggedInToTrue(state) {
        state.isLoggedIn = true;
    },
    editProfileUsername(state, {value}) {
        state.user.username = value;
    },
    editProfileFirstName(state, {value}) {
        state.user.firstName = value;
    },
    editProfileLastName(state, {value}) {
        state.user.lastName = value;
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
}

export const actions = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAVIGATION DROPDOWN FUNCTIONAL
    dropdownFunctional(state, payload) {
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
    slideDown(state, {target, duration = 500}) {
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
    slideToggle(state, {target, duration = 500}) {
        if (window.getComputedStyle(target).display === 'none') {
            return state.dispatch('slideDown', {target, duration});
        } else {
            return state.dispatch('slideUp', {target, duration});
        }
    },
}