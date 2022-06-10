<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="restore-password-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Restore password</span>
                </div>
                <h1 class="page-title">Restore password</h1>
                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <div class="input-group input-group-login">
                            <input ref="passwordInput" v-model="password" type="password" class="password-input" id="password" placeholder="New password" minlength="6" required>
                            <div @click.prevent="togglePasswordVisibility" class="show-password eye-container input-left-content">
                                <img src="@/assets/svg/eye.svg" alt="Eye" class="eye-icon">
                            </div>
                        </div>
                        <div class="input-group input-group-login">
                            <input ref="repeatPasswordInput" v-model="repeatPassword" type="password" id="repeatPassword" placeholder="Repeat password" minlength="6" required>
                        </div>
                        <div class="buttons">
                            <button @click="restorePassword" @submit="restorePassword" type="submit" class="btn btn-gradient btn-big"><span>Restore</span></button>
                            <nuxt-link to="/login" class="register-link">Back to sign in</nuxt-link>
                        </div>
                    </form>
                    <img src="@/assets/img/user.png" alt="User" class="user-image form-image">
                </div>
            </div>

            <img src="@/assets/img/gridForgotPassword.png" alt="Grid" class="grid-image form-image">
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['loggedIn', 'confirmEmailForForgotPassword'],

    data() {
        return {
            password: '',
            repeatPassword: '',
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // RESTORE PASSWORD
        restorePassword() {
            let isEveryInputValid = true;

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // IF PASSWORD AND REPEAT PASSWORD ARE NOT THE SANE - SHOW ERORR
            if (this.repeatPassword !== this.password) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'The password and repeat password must be the same', 
                    isBad: true
                });
                this.$refs.repeatPasswordInput.focus();
                return;
            }

            // REGIRECT TO LOGIN
            this.$store.commit('users/changeUserPassword', {email: this.$store.state.forgotPasswordEmail, newPassword: this.password});

            // REGIRECT TO LOGIN
            this.$router.push('/login');
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
.restore-password-page {
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

        .user-image {
            height: auto !important;
            width: 55rem;
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