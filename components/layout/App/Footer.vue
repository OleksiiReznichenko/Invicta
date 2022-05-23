<template>
    <footer class="section-page">
        <div class="left">
                <img src="@/assets/img/logoText.png" alt="Logo" class="logo">
                <p class="paragraph-primary">The best giftcard hub.</p>
                <p class="paragraph-secondary">Copyright © 2022 invicta.cards. <br> All rights reserved.</p>
        </div>
        <div class="right">
            <div class="two-lists-container">
                <ul>
                    <h4>Invicta</h4>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/browse">Browse</nuxt-link>
                    </li>
                </ul>
                <ul>
                    <h4>Info</h4>
                    <li>
                        <nuxt-link to="/termsOfService">Terms of service</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/">Support</nuxt-link>
                    </li>
                </ul>
            </div>
            <ul>
                <h4>Account</h4>
                <li v-if="!isLoggedIn">
                    <nuxt-link to="/login">Login</nuxt-link>
                </li>
                <li v-if="!isLoggedIn">
                    <nuxt-link to="/register">Register</nuxt-link>
                </li>
                <li v-if="isLoggedIn">
                    <nuxt-link :to="'/users/' + user.id">Profile</nuxt-link>
                </li>
                <li v-if="isLoggedIn">
                    <nuxt-link to="/createProduct">Create Product</nuxt-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
          return this.$store.state.isLoggedIn
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.$store.state.user;
        },
    },
}
</script>

<style lang='scss' scoped>
footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-top: 1px solid $color-grey-2;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-bottom: 7rem;
    margin: 0 auto;
    margin-top: 12rem !important;

    @media only screen and (min-width: 850px) and (max-width: 1000px) {
        width: 100% !important;
    }

    @media only screen and (min-width: 600px) and (max-width: 850px) {
        width: 90% !important;
    }

    @media only screen and (max-width: 850px) {
        padding-bottom: 13rem;
    }

    @media only screen and (max-width: 850px) {
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    @media only screen and (max-width: 450px) {
        text-align: left;
        font-size: 1.8rem;
    }

    .left {
        @media only screen and (max-width: 450px) {
            margin-left: 18px;
        }

        .paragraph-primary {
            margin: 1.25rem 0 2.5rem;
            font-weight: 300;
        }

        .paragraph-secondary {
            color: $color-text-grey-dark;
            font-size: 1.3rem;

            @media only screen and (max-width: 450px) {
                font-size: 1.5rem;
            }

            br {
                @media only screen and (min-width: 800px),
                only screen and (max-width: 850px) {
                    display: none;
                }
            }
        }

        @media only screen and (max-width: 850px) {
            order: 1;
        }
    }

    .two-lists-container {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 450px) {
            flex-direction: column;
            align-items: flex-start;
        }

        ul {
            margin-right: 6rem;

            &:first-of-type {
                @media only screen and (max-width: 450px) {
                    margin-bottom: 3rem;
                }
            }
        }
    }

    .right {
        @include flex-center;
        align-items: flex-start;

        @media only screen and (max-width: 850px) {
            margin-bottom: 4rem;
            order: 0;
        }

        ul {

            h4 {
                color: $color-primary;
                margin-bottom: 1.25rem;

                @media only screen and (max-width: 450px) {
                    font-size: 2rem;
                }
            }

            li {
                margin-bottom: .85rem;

                a {
                    transition: all 0.3s;

                    @media only screen and (max-width: 450px) {
                        font-size: 1.8rem;
                    }

                    &:hover {
                    color: darken($color-text-grey, 10%);
                    }
                }
            }
        }
    }

    .logo {
        width: 17rem;
        margin-left: -4px;
        
        @media only screen and (max-width: 450px) {
            width: 20rem;
        }
    }
}
</style>