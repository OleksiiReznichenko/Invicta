export const state = () => ({
    isLoggedIn: false,
    isOpenNofication: false,
    notificationWindow: '',
    forgotPasswordEmail: '',
    forgotPasswordConfirmationCode: '',
    user: {}
})

export const mutations = {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LOG OUT
    isLoggedInToFalse(state) {
        // delete state.user.isMyProfile;
        state.user = {};
        state.isLoggedIn = false;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LOG IN
    isLoggedInToTrue(state, {loggedInUser}) {
        state.user = loggedInUser;
        // state.user.isMyProfile = true;
        state.isLoggedIn = true;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // EDIT USER PROFILE
    editProfile(state, {user}) {
        state.user = user;
        // state.user.isMyProfile = true;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHANGE USER BALANCE
    changeBalance(state, {value}) {
        state.user.balance = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD SHOPPING ITEM
    addShoppingItem(state, {shoppingItem}) {
        state.user.shoppingItems.push(shoppingItem);
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ADD SHOPPING ITEM CHAT MESSAGE
    addShoppingItemChatMessage(state, {itemId, message}) {
        state.user.shoppingItems.find(el => {
            if (el.id === itemId) {
                el.chat.messages.push(message);
            }
        })
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SUBSCRIBE
    subscribe(state) {
        state.user.following += 1;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // UNSUBSCRIBE
    unSubscribe(state) {
        state.user.following -= 1;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CLOSE NOTIFICATION
    isOpenNoficationToFalse(state) {
        state.isOpenNofication = false;
    },
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // OPEN NOTIFICATION
    isOpenNoficationToTrue(state) {
        state.isOpenNofication = true;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SET NOTIFICATION WINDOW
    getNotificationWindow(state, {value}) {
        state.notificationWindow = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SET FORGOT PASSWORD EMAIL
    setForgotPasswordEmail(state, {value}) {
        state.forgotPasswordEmail = value;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SER FORGOT PASSWORD CONFIRMATION CODE
    setForgotPasswordConfirmationCode(state, {value}) {
        state.forgotPasswordConfirmationCode = value;
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
    showNotificationWindow(context, {text, isBad}) {
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