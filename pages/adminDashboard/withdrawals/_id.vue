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
                    <h2 class="withdraw-id">{{withdrawal.id}}</h2>
                    <span class="status withdraw-status">{{withdrawal.status}}</span>
                </div>
                <div class="withdraw-info">
                    <span class="status withdraw-status desktop">{{withdrawal.status}}</span>
                    <span class="amount-in-wallet">amount in central wallet: $304.26</span>
                    <span class="withdraw-id desktop">{{withdrawal.id}}</span>
                </div>

                <div class="form-container">
                    <div class="form">
                        <div class="user-info">
                            <span class="status user-rank">{{userRank}}</span>
                            <span class="user-rank-text">User rank</span>
                        </div>
                        <div class="input-group">
                            <label for="amount">Amount</label>
                            <input class="full-width" type="text" id="amount" :value="withdrawal.amount" placeholder="$304.26 (0.006843324999 BTC)" readonly>
                        </div>
                            <div class="input-group">
                                <label for="btcAddress">BTC address</label>
                                <input class="full-width" type="text" id="btcAddress" :value="withdrawal.btcAddress" placeholder="bc1wefwefdsfs2312312" readonly>
                            </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="time">Time</label>
                                <input type="text" id="time" :value="withdrawal.time" placeholder="Mar 24, 2022 08:32:00" readonly>
                            </div>
                            <div class="input-group">
                                <label for="username">Username</label>
                                <input type="text" id="username" :value="user.username" placeholder="johnjr" readonly>
                            </div>
                        </div>
                        <nuxt-link to="/adminDashboard" class="btn btn-gradient btn-medium"><span>Back to dashboard</span></nuxt-link>
                    </div>
                    <img src="@/assets/img/pigWithdrawId.png" alt="Pig" class="form-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    // middleware: ['notLoggedIn', 'isAdmin', 'isWithdrawIdExist'],
    middleware: ['notLoggedIn', 'isAdmin'],

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER RANK TEXT
        userRank() {
            if (this.user?.isAdmin) {
                return 'Admin';
            } else {
                return 'User';
            }
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD CLASS TO STATUS BASED ON STATUS
        addStatusClass(status) {
            if (status) {
                if (status === 'completed' || 
                status === 'accepted' ||
                status === 'closed') {
                    return 'status-green';
                } else if (status === 'denied' ||
                status === 'admin') {
                    return 'status-red';
                } else if (status === 'pending' ||
                status === 'open') {
                    return 'status-yellow';
                } else if (status === 'user') {
                    return 'status-grey';
                }
            } else {
                return false;
            }
        },
    },
    
    created () {
        // FIND WITHDRAWAL
        this.withdrawal = this.$store.state.adminDashboard.withdrawals.find(el => {
            return el.id === this.$route.params.id;
        });

        // FIND USER
        this.user = this.$store.state.users.users.find(el => {
            return el.id === this.withdrawal.userId;
        })
    },

    mounted () {
        // DOM
        const statuses = Array.from(document.querySelectorAll('.status'));

        // ADD CLASS TO STATUS BASED ON STATUS
        statuses.forEach(el => {
            el.classList.add(this.addStatusClass(el.textContent.toLowerCase()));
        })
    },
}
</script>

<style lang="scss" scoped>
.status-green {
    border: 1px solid $color-green;
    color: $color-green;
}

.status-red {
    border: 1px solid $color-orange;
    color: $color-orange;
}

.status-yellow {
    border: 1px solid #ffc107;
    color: #ffc107;
}

.status-grey {
    border: 1px solid $color-text-grey-dark;
    color: $color-text-grey-dark;
}

.corner-light {
    display: block !important;
    top: -15rem;
}

.withdraw-id-page {
    margin-bottom: 5rem;
    min-height: calc(100vh - 11rem);
            
    @media only screen and (max-width: 850px) {
        min-height: calc(100vh - 15rem);
    }
            
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
                border: none !important;
                font-size: 2rem;
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

        .status {
            border-radius: 6px;
        }
        
        .withdraw-status {
            padding: 1rem 5rem;
            margin-right: 1rem;
            // color: white !important;
        }
        
        .amount-in-wallet {
            display: inline-block;
            padding: 1rem 3rem;
            margin-right: 1rem;
            color: $color-text-grey;
            border-radius: 6px;
            border: 1px solid $color-text-grey-dark;
            
            @media only screen and (max-width: 850px) {
                margin-top: 1rem;
            }
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
                // color: $color-orange;
            }
        }

        .form-image {
            height: 115%;
            right: -5%;
            
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