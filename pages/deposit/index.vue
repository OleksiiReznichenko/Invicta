<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="relative-container">
            <div class="deposit-id-page form-page section section-page">
                <div class="content">
                    <div class="page-sequence">
                        <nuxt-link to="/">Main</nuxt-link>
                        <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <span>Deposit</span>
                    </div>
                    <h1 class="page-title">How much do you <br> want to deposit?</h1>
                    <span class="balance">5% one-time-fee is applied at checkout</span>

                    <div class="form-container">
                        <form @submit.prevent action="#" class="form">
                            <div class="input-group">
                                <label for="total">Total</label>
                                <input v-model="total" type="number" id="total" placeholder="10" :min="minTotal" :max="maxTotal" required>
                                <h3 class="max-amount input-left-content">max 999<span class="span-grey">$</span></h3>
                            </div>
                            <div class="input-group">
                                <label for="btcAddress">BTC address</label>
                                <input v-model="btcAddress" type="text" id="btcAddress" placeholder="bc1wefwefdsfs2312312" required>
                                <img src="@/assets/svg/workingBag.svg" alt="Bag" class="bag-icon input-left-content">
                            </div>
                            <button @click="deposit" @submit="deposit" type="submit" class="btn btn-gradient btn-medium"><span>Deposit</span></button>
                        </form>
                    </div>
                </div>
                <img src="@/assets/img/withdrawComposition.png" alt="Pig" class="form-image">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn'],

    data() {
        return {
            total: 5,
            btcAddress: '',
            minTotal: 1,
            maxTotal: 999,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        myUserId() {
            return this.$store.state.user.id; 
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DEPOSIT
        deposit() {
            let isEveryInputValid = true;

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // CALCULATE NEW BALANCE
            const newBalance = parseFloat(this.user.balance) + this.total;


            // CHANGE BALANCE
            this.$store.commit('users/changeBalance', {value: newBalance, id: this.user.id});

            const depositObject = {
                id: (this.$_uid * Date.now()).toString(),
                userId: this.user.id,
                amount: this.total,
                btcAddress: this.btcAddress,
                time: this.getDate(),
                status: 'pending'
            }

            this.$store.commit('adminDashboard/addDeposit', {newDeposit: depositObject});
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET DATE
        getDate() {
            const dateObj = new Date();
            const year = dateObj.getFullYear();
            const monthNumber = dateObj.getMonth();
            const day = dateObj.getDate();
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            let minutesFormatted = minutes;

            if (minutes < 10) {
                minutesFormatted = '0' + minutes;
            }

            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]

            const month = months[monthNumber];
            
            return `${day} ${month} ${year}, ${hours}:${minutesFormatted}`;
        }
    },

    created () {
        // FIND USER
        this.user = this.$store.state.users.users.find(el => {
            return el.id === this.myUserId;
        })
    },

    mounted () {
        // DOM
        this.inputs = Array.from(document.querySelectorAll('input'));
    },
}
</script>

<style lang="scss" scoped>
.deposit-id-page {
    min-height: calc(100vh - 11rem);
            
    @media only screen and (max-width: 850px) {
        min-height: calc(100vh - 15rem);
    }

    .form-image {
        top: -15rem;
        right: -10rem;
        height: auto;
        width: 85rem;
            
        @media only screen and (max-width: 850px) {
            display: none;
        }
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

        .span-green {
            color: $color-green;
        }

        .bag-icon {
            width: 1.75rem;
        }

        .max-amount {
            font-weight: 300 !important;
            color: $color-text-grey;
            font-size: 1.6rem;

            .span-grey {
                color: $color-text-grey-dark;
            }
        }

        #total {
            padding-right: 13rem;
        }

        #btcAddress {
            padding-right: 7rem;
        }

        .page-title {
            margin-bottom: 1.75rem;
            font-weight: 300 !important;
        }

        input,
        textarea {
            width: 37rem;
        }

        .form,
        .form-container {
            width: fit-content;
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }

        .form-container {
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>