<template>
    <div class="root">
        <nav class="nav">
            <div class="nav__left">
                <nuxt-link class="link-logo" to="/">
                    <img src="@/assets/img/logo.png" alt="Logo" class="logo">
                </nuxt-link>
                <ul v-if="!isPhone" key="nav-desktop-list" class="list">
                    <li>
                        <nuxt-link to="/discover">Browse</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/updates">Updates</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="nav__right">
                <div class="search-container">
                    <input type="search" id="searchNav" placeholder="Search">
                    <img src="@/assets/svg/searchIcon.svg" alt="Search icon" class="search-icon">
                </div>
                <nuxt-link v-if="!isPhone && !isLoggedIn" key="nav-login-link" to="/login" class="btn btn-gradient"><span>Login</span></nuxt-link>
                <div v-if="!isPhone && !isLoggedIn" class="profile" id="dropdown-opener-parent" key="nav-profile">
                    <div class="profile__icon" id="dropdown-opener"><span>N</span></div>

                    <NavDropdown />
                </div>

                <nuxt-link v-if="!isPhone && isLoggedIn" key="nav-login-link" to="/login">
                    <img src="@/assets/svg/notification.svg" alt="Notification" class="link-icon">
                </nuxt-link>
                <div v-if="!isPhone && isLoggedIn" class="profile" id="dropdown-opener-parent" key="nav-profile">
                    <div class="profile-flex" id="dropdown-opener">
                        <img src="@/assets/img/avatar.png" alt="Avatar" class="user__icon">
                        <div class="user__name">Wade Warren</div>
                    </div>
                    <NavDropdown />
                </div>
            </div>
        </nav>

        <nav v-if="isPhone" key="nav-mobile" class="nav--mobile">
            <ul class="list">
                <li class="item">
                    <nuxt-link class="link" to="/">
                        <img src="@/assets/svg/home.svg" alt="Home" class="icon">
                        <span>Main</span>
                    </nuxt-link>
                </li>
                <li class="item">
                    <nuxt-link class="link" to="/discover">
                        <img src="@/assets/svg/cart.svg" alt="Cart" class="icon">
                        <span>Browse</span>
                    </nuxt-link>
                </li>
                <li class="item">
                    <nuxt-link class="link" to="/profile">
                        <img src="@/assets/svg/user.svg" alt="Profile" class="icon">
                        <span>Profile</span>
                    </nuxt-link>
                </li>
                <li class="item">
                    <div class="link" id="dropdown-opener">
                        <img src="@/assets/svg/more.svg" alt="More" class="icon">
                        <span>More</span>
                    </div>
                </li>
            </ul>
        </nav>
        <NavDropdown v-if="isPhone" key="nav-mobile-dropdown" />
    </div>
</template>

<script>
import NavDropdown from '@/components/layout/navigationComponents/NavDropdown';

export default {
    components: {
        NavDropdown,
    },
    data() {
        return {
            isPhoneInitial: false,
            dropdownIndicator: false,
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
.root {
    position: relative;
    z-index: 10000;
}
.nav {
    width: 95rem;
    max-width: 1360px;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    font-size: 1.4rem !important;

    @media only screen and (max-width: 900px) {
        width: 90%;
    }

    @media only screen and (max-width: 600px) {
        justify-content: flex-start;
        top: 5rem;
    }

    @media only screen and (max-width: 600px) and (max-height: 650px) {
        top: 2.5rem;
    }
 
    &__left {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 600px) {
            order: 1;
        }
    }

    &__right {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 600px) {
            order: 0;
            width: 50%;
        }
    }

    .logo {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 3.5rem;

        @media only screen and (max-width: 600px) {
            margin-right: 0;
        }
    }

    .list {
        display: flex;
    }

    li {

        &:not(:last-of-type) {
            margin-right: 2.75rem;
        }
    }

    a {
        transition: all .3s;

        &:hover {
            color: darken($color-text-grey, 10%);
        }
    }

    .search-container {
        width: 10rem;
        position: relative;

        @media only screen and (max-width: 900px) {
            width: 11rem;
        }

        @media only screen and (max-width: 700px) {
            width: 12rem;
        }

        @media only screen and (max-width: 1050px) and (max-height: 520px) {
            width: 14rem;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
            border-radius: 6px;
            overflow: hidden;
            margin-right: 3rem;
        }
    }

    .search-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 1.75rem;
        height: 1.75rem;

        @media only screen and (max-width: 600px) {
            width: 2rem;
            height: 2rem;
            left: 2rem;
        }
    }

    #searchNav {
        width: 100%;
        padding-left: 3rem;
        color: white;
        font-family: Montserrat;

        @media only screen and (max-width: 600px) {
            padding: 1rem 2rem;
            padding-left: 6rem;
        }

        &::placeholder {
            color: $color-text-grey;
        }
    }

    .profile-flex {
        display: flex;
        align-items: center;
        cursor: pointer;

        .user__icon {
            margin-right: 1rem;
            width: 3rem !important;
            height: 3rem !important;
        }

        .user__name {
            font-weight: 300;
        }
    }

    .link-icon {
        width: 2rem;
        height: 2rem;
        margin-right: 2.5rem;
    }
}

.nav--mobile {
    width: 100%;
    background-color: rgba($color-grey-2, .9);
    padding: 2rem 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10000;

    .list,
    .link {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item {

        &:not(:last-of-type) {
            margin-right: 8rem;

            @media only screen and (max-width: 450px) {
                margin-right: 6rem;
            }
        }
    }

    .link {
        flex-direction: column;
        cursor: pointer;

        .icon {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 1rem;
        }

        span {
            font-weight: 600;
        }
    }
}

.btn {
    padding: .6rem 3.5rem;
}
</style>