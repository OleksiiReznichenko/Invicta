<template>
    <div ref="dropdown" id="dropdown">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light corner-light-dropdown">
        <div @click="checkLink" class="dropdown__container">

            <div class="heading-container">
                <h2>More</h2>
                <div class="close-nav-btn">
                    <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path class="close-icon__path" d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="close-icon__path" d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <img v-if="!isLoggedIn" key="logo" src="@/assets/img/logoText.png" alt="Logo" class="logo">

            <div v-if="!isLoggedIn" key="line-top" class="line line-top"></div>

            <nuxt-link v-if="isLoggedIn" key="userLogin" :to="'/users/' + user.id" class="user">
                <img
                    :src="user.avatar"
                    alt="Avatar"
                    class="user__icon"
                />
                <div class="close-dropdown user__info">
                    <div class="close-dropdown user__name">{{user.username}}</div>
                    <div class="close-dropdown user__balance">${{balance}} balance</div>
                </div>
            </nuxt-link>

            <div v-if="isLoggedIn" key="line" class="line"></div>

            <ul class="list">
                <li v-if="!isPhone">
                    <nuxt-link to="/browse">Browse</nuxt-link>
                </li>
                <li v-if="!isLoggedIn || isLoggedIn && isPhone"  key="updates">
                    <nuxt-link to="/updates">Updates</nuxt-link>
                </li>
                <li v-if="!isLoggedIn || isLoggedIn && isPhone" key="leaderboard">
                    <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
                </li>
                <li v-if="isLoggedIn" key="ads">
                    <nuxt-link to="/InvictaAds">Invicta.ads</nuxt-link>
                </li>
                <li v-if="isLoggedIn" key="shoppingItems">
                    <nuxt-link to="/shoppingItems">My shopping <span class="span-red">({{shoppingItemsAmount}})</span></nuxt-link>
                </li>
            </ul>

            <div v-if="!isLoggedIn" key="line-2" class="line"></div>

            <nuxt-link v-if="!isLoggedIn" key="userNoLogin" to="/login" class="user">
                <div class="user__icon profile__icon"><span>N</span></div>
                <span class="user__name">No user</span>
            </nuxt-link>

            <nuxt-link to="/login" v-if="!isLoggedIn" key="loginBtn" class="btn btn-gradient"><span>Login</span></nuxt-link>
            
            <div v-if="isLoggedIn" key="buttonsDropdown" class="buttons">
                <nuxt-link to="/deposit" class="btn btn-blue"><span>Deposit</span></nuxt-link>
                <nuxt-link to="/withdraw" class="btn btn-blue"><span>Withdraw</span></nuxt-link>
                <nuxt-link to="/dashboard" class="btn btn-pink"><span>Seller Dashboard</span></nuxt-link>
            </div>

            <div v-if="isLoggedIn" key="line-3" class="line"></div>

            <ul v-if="isLoggedIn" key="list" class="list">
                <li>
                    <nuxt-link class="link-flex" to="/orders">
                        <img src="@/assets/svg/notification.svg" alt="Notification" class="link-icon">
                        <span>My orders <span class="span-red">({{ordersAmount}})</span></span>
                    </nuxt-link>
                </li>
                <li class="logout" @click="isLoggedInToFalse">
                    <div class="logout link-flex">
                        <img src="@/assets/svg/logout.svg" alt="Logout" class="link-icon">
                        <span>Logout</span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPhoneInitial: false,
        }
    },
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            const usersFound = this.$store.state.users.users.find(el => {
                if (el.id === this.$store.state.user.id) {
                    return el;
                }
            })

            if (usersFound) {
                return usersFound;
            } else {
                return this.$store.state.user;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY SHOPPING ITEMS AMOUNT
        shoppingItemsAmount() {
            let myShoppingItemsArray = [];
            this.$store.state.users.users.find(el => {
                if (el.id === this.user?.id) {
                    myShoppingItemsArray = el.shoppingItems;
                }
            })
            if (myShoppingItemsArray?.length > 0) {
                return myShoppingItemsArray.length;
            } else {
                return 0;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY ORDERS AMOUNT
        ordersAmount() {
            let myOrdersArray = [];
            this.$store.state.users.users.find(el => {
                if (el.id === this.user.id) {
                    myOrdersArray = el.orders;
                }
            })
            if (myOrdersArray?.length > 0) {
                return myOrdersArray.length;
            } else {
                return 0;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER BALANCE
        balance() {
            return this.user.balance?.toFixed(2);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS PHONE VERSION
        isPhone() {
            return this.isPhoneInitial;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK MOBILE VERSION
    created(){
        if (process.browser){
            this.isPhoneInitial = window.outerWidth <= 850 && window.outerHeight > 600;
        }
    },
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // LOG OUT
        isLoggedInToFalse() {
            this.$store.commit('isLoggedInToFalse');
            this.$cookies.removeAll();
            localStorage.clear();
            this.$router.push('/');
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE DROPDOWN BEFORE GOING TO ANOTHER PAGE
        checkLink(e) {
            const target = e.target.tagName.toLowerCase();
            if (e.target?.closest('.logout')) return;
            if (target == 'a' || target == 'span' || target == 'img' ||
            e.target.classList.contains('close-dropdown')) {
                this.$refs.dropdown.style.opacity = 0;
                setTimeout(() => {
                    this.$refs.dropdown.style.display = 'none';
                    this.$refs.dropdown.classList.remove('opened');
                }, 200)

                if (window.outerWidth < 850 && window.outerHeight > 600) {
                    this.nav.style.position = 'absolute';
                    this.nav.style.width = '66%';
                }

                if (window.outerWidth < 600) {
                    this.nav.style.position = 'absolute';
                    this.nav.style.width = '90%';
                }
            }
        },
    },

    mounted () {
        // DOM
        this.nav = document.querySelector('.nav');

        // RESIZE
        window.addEventListener('resize', () => {
            if (window.outerWidth <= 850 && window.outerHeight > 600) {
                this.isPhoneInitial = true;
            } else {
                this.isPhoneInitial = false;
            }
        })
    },
}
</script>

<style lang="scss" scoped>
#dropdown {
    background-color: $color-grey-dark;
    border-radius: 13px;
    position: absolute;
    top: 3.4rem;
    right: 0;
    padding: 2.25rem 1.5rem;
    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
    font-size: 1.4rem !important;
    transition: all .2s;

    opacity: 0;
    display: none;
    min-width: 23rem;

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 9000;
        padding-top: 10rem;
        border-radius: 0;
    }

    .corner-light-dropdown {
        @media only screen and (min-width: 850px),
        only screen and (max-width: 850px) and (max-height: 600px) {
            display: none;
        }
    }

    .dropdown__container {
        @media only screen and (max-width: 850px) and (min-height: 600px) {
            width: 50rem;

            @include abs-center;
            top: 48% !important;
        }
        
        @media only screen and (max-width: 550px) {
            width: 44rem;
        }
    }

    .logo {
        width: 11rem;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            display: none;
        }
    }

    .heading-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.5rem;

        @media only screen and (min-width: 850px),
        only screen and (max-width: 850px) and (max-height: 600px) {
            display: none;
        }
    }

    h2 {
        font-size: 3rem;
    }

    .close-nav-btn {
        position: relative;
        width: 8rem;
        height: 8rem;
        margin-right: -2.2rem;

        .close-icon {
            position: absolute;
            top: 2.5rem;
            right: 2.2rem;
            width: 3.5rem;
            height: 3.5rem;
        }
    }

    .line {
        height: 1px;
        background-color: $color-grey-2;
        margin: 2rem 0;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            margin: 2.5rem 0;
        }
    }

    .user {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            margin-bottom: 2.5rem;
            font-size: 2rem;
        }

        .avatar {
            background-color: white;
        }

        &__balance {
            color: $color-green;
            margin-top: .3rem;
        }
    }

    .btn {
        display: block;
        width: 100%;
        padding: .75rem 0;
        text-align: center;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            padding: 1.5rem 0;
            font-size: 2rem !important;
        }

        &-blue {
            background-color: $color-primary;
        }

        &-pink {
            background-color: $color-pink;
        }
    }

    .buttons {
        margin-top: 2.25rem;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            margin-top: 3.5rem;
        }

        .btn {
            transition: all .3s;
            margin-bottom: .75rem;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                margin-bottom: 1.25rem;
            }

            &-blue:hover {
                background-color: darken($color-primary, 20%);
            }
            &-pink:hover {
                background-color: darken($color-pink, 20%);
            }
        }
    }

    li {
        color: $color-text-grey;
        display: flex;

        &:not(:last-of-type) {
            margin-bottom: 2.25rem;

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                margin-bottom: 3.25rem;
            }
        }

        a, 
        .link-flex {
            transition: all .3s !important;

            &:hover {
                color: darken($color-text-grey, 25%) !important;
            }

            @media only screen and (max-width: 850px) and (min-height: 600px) {
                font-size: 2rem !important;
            }
        }
    }
    
    .link-flex {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 300;
    }

    .link-icon {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
    }

    .span-red {
        color: $color-orange;
    }
}

.dropdown__search {

    &-container {
        background-color: #111111;
        width: 100%;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        margin: 2rem 0 2.5rem;

        @media only screen and (max-width: 850px) and (min-height: 600px) {
            display: none;
        }
    }

    &-input {
        width: 100%;
        padding-left: 2rem;
        padding: 1rem 1rem 1rem 4.1rem;
        color: white;
        font-family: Montserrat;

        &::placeholder {
            color: $color-text-grey;
        }
    }

    &-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>