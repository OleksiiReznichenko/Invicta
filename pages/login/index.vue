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
                            <input ref="emailInput" v-model="email" type="text" id="email" placeholder="E-mail" required>
                            <img src="@/assets/svg/user.svg" alt="User" class="user-icon input-left-content">
                        </div>
                        <div class="input-group input-group-login">
                            <input ref="passwordInput" v-model="password" type="password" id="password" placeholder="Password" minlength="6" required>
                            <img src="@/assets/svg/eye.svg" alt="User" class="eye-icon input-left-content">
                        </div>
                        <div class="flex-container-normal">
                            <div class="checkbox-container">

                            </div>
                            <nuxt-link to="/forgotPassword" class="forgot-password">Forgot password?</nuxt-link>
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
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
export default {
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

            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            if (!isEveryInputValid) return;

            this.users.forEach(user => {
                if (user.email === this.email) {
                    isEmailCorrect = true;

                    if (user.password === this.password) {
                        isPasswordCorrect = true;
                        correctUser = user;
                    }
                }
            })

            if (!isEmailCorrect) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This email is incorrect', 
                    isBad: true
                });
                this.$refs.emailInput.focus();
                return;
            }

            if (!isPasswordCorrect) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This password is incorrect', 
                    isBad: true
                });
                this.$refs.passwordInput.focus();
                return;
            }

            console.log(correctUser);
            
            this.$store.commit('isLoggedInToTrue', {loggedInUser: correctUser});
            this.$router.push('/');
        }
    },
    created () {
        this.users = this.$store.state.users.users;
    },
    mounted () {
        this.inputs = Array.from(document.querySelectorAll('input'));
    },
}
</script>

<style lang="scss" scoped>
.login-page {
    // min-height: 80vh;
    min-height: 95vh;
    height: 100%;

    .grid-image {
        height: auto !important;
        width: 30rem !important;
    }


    .content {
        min-height: 70vh;
        // min-height: 90vh;
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

        .checkout-container {
            display: flex;
            align-items: center;


        }

        .forgot-password {
            font-weight: 500 !important;
            color: $color-primary;
            transition: all .3s;

            &:hover {
                color: lighten($color-primary, 5%);
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

        .user-icon {
            width: 1.5rem;
        }

        .message-icon {
            width: 1.75rem;
        }

        .eye-icon {
            width: 1.75rem;
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

        input,
        .info {
            width: 36rem;
    
            @media only screen and (max-width: 850px) {
                width: 40rem !important;
            }

            @media only screen and (max-width: 450px) {
                width: 38rem !important;
            }
        }
        
        .info {
            color: $color-text-grey;
            font-size: 1.5rem;
            margin-bottom: 1.75rem;
        }

        .form {
            width: fit-content;
        }
    }
}
</style>