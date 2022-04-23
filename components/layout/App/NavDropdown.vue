<template>
    <div id="dropdown">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="dropdown__container">

            <div class="heading-container">
                <h2>More</h2>
                <div class="close-nav-btn">
                    <svg class="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path class="close-icon__path" d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="close-icon__path" d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <img v-if="!isLoggedIn" src="@/assets/img/logoText.png" alt="Logo" class="logo">

            <div v-if="!isLoggedIn" class="line line-top"></div>

            <!-- <div v-if="!isLoggedIn" class="dropdown__search-container">
                <input type="search" class="dropdown__search-input" id="searchNavBeforeLogin" placeholder="Search">
                <img src="@/assets/svg/searchIcon.svg" alt="Search icon" class="dropdown__search-icon">
            </div> -->

            <nuxt-link v-if="isLoggedIn" to="/profile" class="user">
                <img
                    :src="$store.state.user.avatar"
                    alt="Avatar"
                    class="user__icon"
                />
                <div class="user__info">
                    <div class="user__name">{{$store.state.user.firstName}} {{$store.state.user.lastName}}</div>
                    <div class="user__balance">${{$store.state.user.balance}} balance</div>
                </div>
            </nuxt-link>

            <div v-if="isLoggedIn" class="line"></div>

            <ul class="list">
                <li>
                    <nuxt-link to="/discover">Browse</nuxt-link>
                </li>
                <li v-if="!isLoggedIn">
                    <nuxt-link to="/updates">Updates</nuxt-link>
                </li>
                <li v-if="!isLoggedIn || isLoggedIn && isPhone">
                    <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
                </li>
                <li v-if="isLoggedIn">
                    <nuxt-link to="/leaderboard">Invicta.ads</nuxt-link>
                </li>
                <li v-if="isLoggedIn">
                    <nuxt-link to="/leaderboard">My shopping <span class="shopping-number">({{$store.state.user.shoppingNumber}})</span></nuxt-link>
                </li>
            </ul>

            <div v-if="!isLoggedIn" class="line"></div>

            <nuxt-link v-if="!isLoggedIn" to="/profile" class="user">
                <div class="user__icon profile__icon"><span>N</span></div>
                <span class="user__name">No user</span>
            </nuxt-link>

            <!-- <nuxt-link @click="isLoggedInToTrue" v-if="!isLoggedIn" to="/login" class="btn btn-gradient"><span>Login</span></nuxt-link> -->
            <div @click="isLoggedInToTrue" v-if="!isLoggedIn" class="btn btn-gradient"><span>Login</span></div>
            
            <div v-if="isLoggedIn" class="buttons">
                <nuxt-link to="/login" class="btn btn-blue"><span>Deposit</span></nuxt-link>
                <nuxt-link to="/login" class="btn btn-blue"><span>Withdraw</span></nuxt-link>
                <nuxt-link to="/login" class="btn btn-pink"><span>Seller Dashboard</span></nuxt-link>
            </div>

            <div v-if="isLoggedIn" class="line"></div>

            <ul v-if="isLoggedIn" class="list">
                <li>
                    <nuxt-link class="link-flex" to="/discover">
                        <img src="@/assets/svg/notification.svg" alt="Notification" class="link-icon">
                        <span>My orders</span>
                    </nuxt-link>
                </li>
                <li @click="isLoggedInToFalse">
                    <div class="link-flex">
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
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        },
        isPhone() {
            return this.isPhoneInitial
        }
    },
    created(){
        if (process.browser){
            // eslint-disable-next-line nuxt/no-globals-in-created
            this.isPhoneInitial = window.outerWidth <= 600;
        }
    },
    methods: {
        isLoggedInToFalse() {
            this.$store.commit('isLoggedInToFalse');
            this.$router.push('/');
        },
        isLoggedInToTrue() {
            this.$store.commit('isLoggedInToTrue');
            this.$router.push('/');
        },
    },
    mounted () {
        window.addEventListener('resize', () => {
            if (window.outerWidth <= 600) {
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
    // background-color: $color-text-grey-dark;
    border-radius: 13px;
    position: absolute;
    top: 3.4rem;
    right: 0;
    padding: 2.25rem 1.5rem;
    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .5);
    font-size: 1.4rem !important;
    transition: all .2s;

    opacity: 0;
    display: none;
    min-width: 23rem;

    @media only screen and (max-width: 600px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 9000;
        padding-top: 10rem;
    }

    .corner-light {
        top: -30%;
        left: -30%;
        @media only screen and (min-width: 600px) {
            display: none;
        }
    }

    .dropdown__container {
        @media only screen and (max-width: 600px) {
            width: 50rem;

            @include abs-center;
            top: 48% !important;
        }
    }

    .logo {
        width: 11rem;

        @media only screen and (max-width: 600px) {
            display: none;
        }
    }

    .heading-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.5rem;

        @media only screen and (min-width: 600px) {
            display: none;
        }
    }

    h2 {
        font-size: 3rem;
    }

    .close-icon {
        width: 3rem;
        height: 3rem;
    }

    .line {
        height: 1px;
        background-color: $color-grey-2;
        margin: 2rem 0;

        @media only screen and (max-width: 600px) {
            margin: 2.5rem 0;
        }
    }

    .user {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        @media only screen and (max-width: 600px) {
            margin-bottom: 2.5rem;
            font-size: 2rem;
        }

        .avatar {
            background-color: white;
        }

        &__info {

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

        @media only screen and (max-width: 600px) {
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

        @media only screen and (max-width: 600px) {
            margin-top: 3.5rem;
        }

        .btn {
            transition: all .3s;
            margin-bottom: .75rem;

            @media only screen and (max-width: 600px) {
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

        // transition: all .3s;

        // &:hover {
        //     background-color: lighten($color-grey-dark, 20%);
        // }

        &:not(:last-of-type) {
            margin-bottom: 2.25rem;

            @media only screen and (max-width: 600px) {
                margin-bottom: 3.25rem;
            }
        }

        a, 
        .link-flex {
            transition: all .3s !important;

            &:hover {
                color: darken($color-text-grey, 25%) !important;
            }

            @media only screen and (max-width: 600px) {
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

    .shopping-number {
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

        @media only screen and (max-width: 600px) {
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