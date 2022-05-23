<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="confirm-email-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Confirm email</span>
                </div>
                <h1 class="page-title">Confirm email</h1>
                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <p class="info">
                            Enter the code from your email
                        </p>
                        <div class="input-group input-group-login">
                            <input ref="confirmEmailInput" v-model="confirmEmailCode" type="confirmEmail" id="confirmEmail" placeholder="Confirm E-mail" required>
                        </div>
                        <div class="flex-container-normal">
                            <div></div>
                            <button @click.prevent class="send-again">Send code again</button>
                        </div>
                        <div class="buttons">
                            <button @click="confirmEmail" @submit="confirmEmail" type="submit" class="btn btn-gradient btn-big"><span>Confirm Email</span></button>
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
    middleware: ['loggedIn', 'addEmailForForgotPassword'],
    
    data() {
        return {
            confirmEmailCode: '',
        }
    },

    methods: {
        confirmEmail(e) {
            let isEveryInputValid = true;
            // let isConfirmEmail = false;

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // if (!isConfirmEmail) {
            //     this.$store.dispatch('showNotificationWindow', {
            //         text: 'This confirm email code is incorrect', 
            //         isBad: true
            //     });
            //     return;
            // }

            // SAVE CONFIRMATION CODE
            this.$store.commit('setForgotPasswordConfirmationCode', {value: this.confirmEmailCode});

            // REDIRECT TO RESTORE PASSWORD PAGE
            this.$router.push('/restorePassword');
        },
    },
    mounted () {
        // DOM
        this.inputs = Array.from(document.querySelectorAll('input'));
    },
}
</script>

<style lang="scss" scoped>
.confirm-email-page {
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

        .send-again {
            font-weight: 500 !important;
            color: $color-primary;
            transition: all .3s;

            &:hover {
                color: lighten($color-primary, 5%);
            }
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