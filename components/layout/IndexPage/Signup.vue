<template>
    <div class="root">
        <img src="@/assets/img/gridIndexSignup.png" alt="Grid" class="grid">
        <div class="section signup-window">
            <div class="info">
                <span class="border-text-blue">a marketplace for digital sellers</span>
                <h1>
                    B<img src="@/assets/svg/bigE.svg" alt="E" class="e">come a seller
                </h1>
                <p class="paragraph-short">Manage your listings in one place.</p>
                <p class="paragraph-long">
                    Invicta was designed to help sellers create listings,
                    manage products and connect with buyers through one
                    marketplace.
                </p>
                <div class="buttons">
                    <div class="btn-container btn-gradient-container">
                        <nuxt-link v-if="!isLoggedIn" key="beforeLogin" class="btn btn-gradient" to="/register"><span>Sign up</span></nuxt-link>
                        <nuxt-link v-if="isLoggedIn" key="afterLogin" class="btn btn-gradient" to="/createProduct"><span>Create product</span></nuxt-link>
                    </div>
                    <div class="btn-container btn-transparent-container">
                        <nuxt-link class="btn btn-transparent" to="/browse"><div class="background"></div><span>Browse</span></nuxt-link>
                    </div>
                </div>
                <img src="@/assets/img/spiralIndex.png" alt="Spiral" class="spiral">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    },
}
</script>

<style lang="scss" scoped>
.root {
    position: relative;
    height: 100vh;
    min-height: 450px;
    @include flex-center;

    @media only screen and (max-width: 850px) {
        height: auto;
        margin: 7rem 0;
    }

    .grid {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 43rem;
    }
}

.signup-window {
    background-color: $color-grey-dark;
    border-radius: 30px;
    padding: 4rem 0;
    padding-left: 10rem;
    position: relative;
    z-index: 100;

    @media only screen and (max-width: 850px) {
        width: 66%;
        padding: 4rem 4rem;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        padding: 4rem 4rem;
    }

    .info {
        @media only screen and (max-width: 850px) {
            width: 100%;
        }

        .border-text-blue {
            padding: .5rem 3rem;
            margin-bottom: 2rem;

            @media only screen and (max-width: 850px) {
                margin-bottom: 2.5rem;
            }
        }

        h1 {
            font-size: 5.6rem;
            text-transform: uppercase;
            width: 50rem;
            line-height: 1;
            margin-left: -2px;
            margin-bottom: 1.5rem;

            @media only screen and (max-width: 850px) {
                margin-bottom: 2.5rem;
            }

            @media only screen and (max-width: 450px) {
                width: 35rem;
            }

            .e {
                display: inline;
                width: 9rem;
            }
        }

        p {
            color: $color-text-grey;

            @media only screen and (max-width: 850px) {
                font-size: 2rem;
            }
        }

        .paragraph {
            &-short {
                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }

            &-long {

                @media only screen and (min-width: 850px) {
                    display: none;
                }
            }
        }

        .buttons {
            display: flex;
            margin-top: 4rem;

            .btn {
                padding: 1.25rem 4rem;

                @media only screen and (max-width: 850px) {
                    font-size: 2rem;
                }

                @media only screen and (max-width: 400px) {
                    padding: 1.25rem 3rem;
                    white-space: nowrap;
                }

                &-container {
                    transition: all .3s;

                    &:not(:last-of-type) {
                        margin-right: 2rem;
                    }
                }

                .background {
                    background-color: $color-grey-dark;
                    border-radius: 6px;
                }

                &:hover {
                    transform: scale(1.05);
                    border: 1px solid transparent;
                }
            }

            .btn-gradient {
                &:hover::before {
                    opacity: 1;
                }
            }

            .btn-transparent {
                &:hover::before {
                    opacity: 0;
                }

                &:hover::after {
                    opacity: 1;
                }
            }
        }
    }

    .spiral {
        position: absolute;
        bottom: 0;
        right: -8rem;
        width: 50rem;

        @media only screen and (max-width: 850px) {
            display: none;
        }
    }
}
</style>
