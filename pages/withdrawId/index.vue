<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="withdraw-id-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Withdraw ID</span>
                </div>
                <h1 class="page-title">Withdraw ID</h1>
                <div class="withdraw-info withdraw-info-mobile">
                    <h2 class="withdraw-id">PR0SW1JB4ZVB</h2>
                    <span class="withdraw-status">success</span>
                </div>
                <div class="withdraw-info">
                    <span class="border-text-green withdraw-status desktop">success</span>
                    <span class="border-text-green amount-in-wallet">ammount in central wallet: $304.26</span>
                    <span class="withdraw-id desktop">PR0SW1JB4ZVB</span>
                </div>

                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                    <div class="user-info">
                        <span class="border-text-red user-rank">admin</span>
                        <span class="user-rank-text">User rank</span>
                    </div>
                        <div class="input-group">
                            <label for="ammount">Ammount</label>
                            <input class="full-width" v-model="ammount" type="text" id="ammount" placeholder="$304.26 (0.006843324999 BTC)" required>
                        </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="time">Time</label>
                                <input v-model="time" type="text" id="time" placeholder="Mar 24, 2022 08:32:00" required>
                            </div>
                            <div class="input-group">
                                <label for="btcAddress">BTC address</label>
                                <input v-model="btcAddress" type="text" id="btcAddress" placeholder="bc1wefwefdsfs2312312" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-gradient btn-medium"><span>Back to dashboard</span></button>
                    </form>
                    <img src="@/assets/img/pigWithdrawId.png" alt="Pig" class="form-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn'],
    
    data() {
        return {
            time: '',
            btcAddress: '',
        }
    },
}
</script>

<style lang="scss" scoped>
.corner-light {
    display: block !important;
    top: -15rem;
}

.withdraw-id-page {
    margin-bottom: 5rem;
            
    @media only screen and (max-width: 850px) {
        margin-bottom: 15rem;
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

        .withdraw-info-mobile {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;

            @media only screen and (min-width: 850px) {
                display: none;
            }
        
            .withdraw-status {
                padding: 0;
                color: $color-green;
            }

            .withdraw-id {
                font-size: 2.4rem;
                color: white;
                margin-right: 2rem;
            }
        }

        .withdraw-info {
            .desktop {
                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }
        }
        
        .withdraw-status {
            padding: 1rem 5rem;
            margin-right: 1rem;
        }
        
        .amount-in-wallet {
            padding: 1rem 3rem;
            margin-right: 1rem;
        }

        .withdraw-id {
            color: $color-text-grey;
        }

        .user-info {
            display: flex;
            align-items: center;
            border-bottom: 1px solid $color-grey-2;
            padding-bottom: 1.75rem;
            margin-bottom: 1.75rem;
            
            @media only screen and (max-width: 850px) {
                padding-bottom: 2.25rem;
                margin-bottom: 2.25rem;
            }

            .user-rank {
                padding: 5px 15px;
                margin-right: 1rem;
                color: $color-orange;
            }
        }

        .form-image {
            height: 120%;
            
            @media only screen and (max-width: 1100px) {
                height: 100%;
            }
            
            @media only screen and (max-width: 950px) {
                height: 80%;
            }
            
            @media only screen and (max-width: 850px) {
                display: none;
            }
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