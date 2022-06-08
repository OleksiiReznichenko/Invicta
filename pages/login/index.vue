<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="login-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Log in</span>
                </div>
                <h1 class="page-title">Log in</h1>
                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <p class="info">
                            Please login before purchasing cards! This helps us better protect you in the event of a scam
                        </p>
                        <div class="input-group input-group-login">
                            <input ref="emailInput" v-model="email" type="email" id="email" placeholder="E-mail" required>
                            <img src="@/assets/svg/message.svg" alt="Email" class="email-icon input-left-content">
                        </div>
                        <div class="input-group input-group-login">
                            <input @keypress.enter="login" ref="passwordInput" v-model="password" type="password" class="password-input" id="password" placeholder="Password" minlength="6" required>
                            <div @click.prevent="togglePasswordVisibility" class="show-password eye-container input-left-content">
                                <img src="@/assets/svg/eye.svg" alt="Eye" class="eye-icon">
                            </div>
                        </div>
                        <div class="flex-container-normal">
                            <div class="checkbox-container">
                                <input ref="rememberMeInput" type="checkbox" id="checkbox" value="yes">
                                <img src="@/assets/svg/checkMark2.svg" alt="Check mark" class="check-mark">
                                <label for="checkbox">Remember me</label>
                            </div>
                            <nuxt-link to="/setEmail" class="forgot-password">Forgot password?</nuxt-link>
                        </div>
                        <div class="buttons">
                            <button @click="login" @submit="login" type="submit" class="btn btn-gradient btn-big"><span>Sign in</span></button>
                            <nuxt-link to="/register" class="register-link">Register</nuxt-link>
                        </div>
                    </form>
                    <img src="@/assets/img/user.png" alt="User" class="user-image form-image">
                </div>
            </div>

            <img src="@/assets/img/gridLogin.png" alt="Grid" class="grid-image form-image">
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['loggedIn'],

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login(e) {
            let isEveryInputValid = true;
            let isEmailCorrect = false;
            let isPasswordCorrect = false;
            let correctUser = {};

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // CHECK IF USER EMAIL IS CORRECT AND IF PASSWORD IS CORRECT
            this.users.forEach(user => {
                if (user.email === this.email) {
                    isEmailCorrect = true;

                    if (user.password === this.password) {
                        isPasswordCorrect = true;
                        correctUser = user;
                    }
                }
            })

            // IF USER EMAIL IS NOT CORRECT - SHOW ERORR
            if (!isEmailCorrect) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'There is no account with that email', 
                    isBad: true
                });
                this.$refs.emailInput.focus();
                return;
            }

            // IF USER PASSWORD IS NOT CORRECT - SHOW ERORR
            if (!isPasswordCorrect) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This password is incorrect', 
                    isBad: true
                });
                this.$refs.passwordInput.focus();
                return;
            }

            const correctUserCookie = {
                id: correctUser.id,
                username: correctUser.username,
                avatar: correctUser.avatar
            };

            // IF REMEMBER ME IS CLICKED - SAVE USER COOKIE FOR 14 DAYS
            // IF REMEMBER ME IS NOT CLICKED - SAVE USER COOKIE FOR 1 DAY
            if (this.$refs.rememberMeInput?.checked) {
                this.$cookies.set('isLoggedIn', true, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 14
                });
                this.$cookies.set('loggedInUser', JSON.stringify(correctUserCookie), {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 14
                });
            } else {
                this.$cookies.set('isLoggedIn', true, {
                    path: '/',
                    maxAge: 60 * 60 * 24
                });
                this.$cookies.set('loggedInUser', JSON.stringify(correctUserCookie), {
                    path: '/',
                    maxAge: 60 * 60 * 24
                });
            }

            // LOG IN EVENT
            this.$store.commit('isLoggedInToTrue', {loggedInUser: correctUser});

            // REDIRECT TO MAIN PAGE
            this.$router.push('/');
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SHOW & HIDE PASSWORD ON EYE CLICK
        togglePasswordVisibility() {
            if (this.$refs.passwordInput.type === "password") {
                this.$refs.passwordInput.type = "text";
            } else {
                this.$refs.passwordInput.type = "password";
            }
        }
    },

    created () {
        // GET BASE ARRAY
        this.users = this.$store.state.users.users;
    },

    mounted () {
        // DOM
        this.inputs = Array.from(document.querySelectorAll('input'));
    },
}
</script>

<style lang="scss" scoped>
.login-page {
    min-height: calc(100vh - 11rem);
            
    @media only screen and (max-width: 850px) {
        min-height: calc(100vh - 15rem);
    }

    .grid-image {
        height: auto !important;
        width: 30rem !important;
    }

    .content {
        position: relative;
        z-index: 100;
            
        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        .page-title {
            margin-bottom: 1.75rem;
        }

        .flex-container-normal {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            position: relative;

            #checkbox {
                cursor: pointer;
                appearance: none;
                width: 1.5rem !important;
                height: 1.5rem !important;
                border-radius: .4rem;
                border: 1.5px solid white;
                transition: all .2s;
            
                @media only screen and (max-width: 850px) {
                    width: 1.85rem !important;
                    height: 1.85rem !important;
                }
            }

            #checkbox:checked + .check-mark {
                opacity: 1;
            }

            label {
                cursor: pointer;
                color: $color-text-grey;
                font-size: 1.5rem;
                display: inline-block;
                margin-left: 1rem;
                user-select: none;
            
                @media only screen and (max-width: 850px) {
                    font-size: 1.65rem;
                }
            }

            .check-mark {
                width: 1.65rem;
                position: absolute;
                top: 0;
                left: -.5px;
                z-index: 100;
                transition: all .2s;
                opacity: 0;
            
                @media only screen and (max-width: 850px) {
                    width: 1.9rem;
                    height: 1.9rem;
                    left: 0;
                }
            }
        }

        .forgot-password {
            font-weight: 500 !important;
            color: $color-primary;
            transition: all .3s;
            font-size: 1.5rem;

            &:hover {
                color: lighten($color-primary, 5%);
            }
            
            @media only screen and (max-width: 850px) {
                font-size: 1.65rem;
            }
        }

        .user-image {
            height: auto !important;
            width: 65rem;
            bottom: -8rem;
            
            @media only screen and (max-width: 850px) {
                display: none;
            }
        }

        .buttons {
            display: flex;
            align-items: center;
            margin-top: 3rem;
            
            .btn {
                margin-top: 0 !important;
                margin-right: 2rem;
            }

            .register-link {
                font-weight: 500 !important;
                transition: all .3s;

                &:hover {
                    color: $color-text-grey-dark;
                }
            }
        }

        .info {
            width: 36rem;
    
            @media only screen and (max-width: 850px) {
                width: 40rem !important;
            }

            @media only screen and (max-width: 450px) {
                width: 38rem !important;
            }
        }

        input {
            width: 36rem;
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
        
        .info {
            color: $color-text-grey;
            font-size: 1.5rem;
            margin-bottom: 1.75rem;
        }

        .form {
            width: fit-content;
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>