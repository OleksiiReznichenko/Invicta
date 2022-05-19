<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="register-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Register</span>
                </div>
                <h1 class="page-title">Register</h1>
                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <div class="input-group input-group-login">
                            <input ref="usernameInput" v-model="username" type="text" id="username" placeholder="Username" required>
                            <img src="@/assets/svg/user.svg" alt="User" class="user-icon input-left-content">
                        </div>
                        <div class="input-group input-group-login">
                            <input ref="emailInput" v-model="email" type="email" id="email" placeholder="E-mail" required>
                            <img src="@/assets/svg/message.svg" alt="User" class="message-icon input-left-content">
                        </div>
                        <div class="input-group input-group-login">
                            <input ref="passwordInput" v-model="password" type="password" id="password" placeholder="Password" minlength="6" required>
                            <img src="@/assets/svg/eye.svg" alt="User" class="eye-icon input-left-content">
                        </div>
                        <div class="input-group input-group-login">
                            <input ref="confirmPasswordInput" v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm password" minlength="6" required>
                        </div>
                        <div class="buttons">
                            <button @click="register" @submit="register" type="submit" class="btn btn-gradient btn-big"><span>Register</span></button>
                            <nuxt-link to="/login" class="login-link">Sign in</nuxt-link>
                        </div>
                    </form>
                    <img src="@/assets/img/graphUp.png" alt="Graph" class="graph-image form-image">
                </div>
            </div>

            <img src="@/assets/img/gridRegister.png" alt="Grid" class="grid-image form-image">
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            // isEveryInputValid: true,
        }
    },
    methods: {
        register(e) {
            let isEveryInputValid = true;
            let isUsernameTaken = false;
            let isEmailTaken = false;

            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            if (!isEveryInputValid) return;

            if (this.username.includes(' ')) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Username can\'t contain white space', 
                    isBad: true
                });
                this.$refs.usernameInput.focus();
                return;
            }

            this.users.forEach(user => {
                if (user.username === this.username) {
                    isUsernameTaken = true;
                }
                
                if (user.email === this.email) {
                    isEmailTaken = true;
                }
            })

            if (isUsernameTaken) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This username is taken', 
                    isBad: true
                });
                this.$refs.usernameInput.focus();
                return;
            }

            if (isEmailTaken) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This email is taken', 
                    isBad: true
                });
                this.$refs.emailInput.focus();
                return;
            }
            
            if (this.password !== this.confirmPassword) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'The password and confirm password must be the same', 
                    isBad: true
                });
                this.$refs.confirmPasswordInput.focus();
                return;
            }
            
            this.$store.commit('users/addUser', {username: this.username, email: this.email, password: this.password});
            // this.$router.push('/login');
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
.register-page {
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

        .graph-image {
            height: auto !important;
            width: 65rem;
            
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

            .login-link {
                font-weight: 500 !important;
                transition: all .3s;

                &:hover {
                    color: $color-text-grey-dark;
                }
            }
        }

        input {
            width: 36rem;
    
            @media only screen and (max-width: 850px) {
                width: 40rem !important;
            }

            @media only screen and (max-width: 450px) {
                width: 38rem !important;
            }
        }

        .form {
            width: fit-content;
        }
    }
}
</style>