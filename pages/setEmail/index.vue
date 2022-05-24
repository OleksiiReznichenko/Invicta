<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="send-code-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Send code</span>
                </div>
                <h1 class="page-title">Send code</h1>
                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <p class="info">
                            Enter your email to receive a recovery code
                        </p>
                        <div class="input-group input-group-login">
                            <input v-model="email" type="text" id="email" placeholder="E-mail" required>
                            <img src="@/assets/svg/user.svg" alt="User" class="user-icon input-left-content">
                        </div>
                        <div class="buttons">
                            <button @click="sendCode" @submit="sendCode" type="submit" class="btn btn-gradient btn-big"><span>Send code</span></button>
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
    middleware: ['loggedIn'],

    data() {
        return {
            email: '',
        }
    },

    methods: {
        sendCode(e) {
            let isEveryInputValid = true;
            let isEmailCorrect = false;

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // CHECK IF EMAIL EXIST
            this.users.forEach(user => {
                if (user.email === this.email) {
                    isEmailCorrect = true;
                }
            })

            // IF EMAIL DOESNT EXIST - SHOW ERROR
            if (!isEmailCorrect) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'There is no account with that email', 
                    isBad: true
                });
                return;
            }

            // SET FORGOT PASSWORD EMAIL
            this.$store.commit('setForgotPasswordEmail', {value: this.email});

            // REGIRECT TO CONFIRM EMAIL
            this.$router.push('/confirmEmail');
        },
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
.send-code-page {
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