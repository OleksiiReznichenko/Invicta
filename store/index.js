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
        state.isLoggedIn = true;
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // EDIT USER PROFILE
    editProfile(state, {user}) {
        state.user = user;
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

                payload.nav.classList.add('navigation-to-fit');
            } else {
                payload.dropdown.style.opacity = 0;
                setTimeout(() => {
                    payload.dropdown.style.display = 'none';
                    payload.dropdown.classList.remove('opened');
                }, 200);

                payload.nav.classList.remove('navigation-to-fit');
            }
        })

        payload.closeNavBtn.addEventListener('click', () => {
            // if (window.outerWidth >= 850 || window.outerHeight < 600) return;
            
            payload.dropdown.style.opacity = 0;
            setTimeout(() => {
                payload.dropdown.style.display = 'none';
                payload.dropdown.classList.remove('opened');
            }, 200);
                
            payload.nav.classList.remove('navigation-to-fit');
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
    // CHECK IF PRODUCT IS OVERFLOWING
    checkOverflowX(context, {el}) {
        const isOverflowingX = el.clientWidth < el.scrollWidth;
        
        if (isOverflowingX) {
            el.style.overflowX = 'scroll';
        } else {
            el.style.overflowX = 'visible';
        }
        
        return isOverflowingX;
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