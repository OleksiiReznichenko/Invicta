<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="dashboard-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Dashboard</span>
                </div>
                <h1 class="page-title">Dashboard</h1>
                <div class="select">
                    <input ref="periodDropdownOpener" id="periodDropdownOpener" @click="togglePeriodDropdown" v-model="period" type="text" placeholder="Period" readonly>
                    <img ref="periodDropdownArrow" id="periodDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <div ref="periodSelectionDropdown" id="periodSelectionDropdown" class="options">
                        <div @click="selectPeriodOption('All time')" class="option">All time</div>
                        <div @click="selectPeriodOption('Year')" class="option">Year</div>
                        <div @click="selectPeriodOption('Month')" class="option">Month</div>
                        <div @click="selectPeriodOption('Week')" class="option">Week</div>
                    </div>
                </div>
                <Stats
                :sales='sales'
                :sales24h='stats.sales.daily'
                :revenue='revenue'
                :revenue24h='stats.revenue.daily'
                :period='stats.period'
                 />
                <Chart 
                :period='stats.period'
                :chartData='chartData'
                />
                <div class="flex-container">
                    <div class="flex-item api-key-container">
                        <div class="info">
                            <span class="small-title">Your API Key</span>
                            <div class="input-group">
                                <input type="text" class="api-key-input" placeholder="a840959a741c2a43a1e58c3bb9325a0">
                                <div class="icon-container">
                                    <img src="@/assets/svg/bindIcon.svg" alt="Icon" class="icon">
                                </div>
                            </div>
                            <button class="btn btn-gradient"><span>Generate</span></button>
                        </div>
                        <img src="@/assets/img/key.png" alt="Key" class="image-corner key-image">
                    </div>
                    <div class="flex-item referred-users-container">
                        <div class="info">
                            <h4 class="small-title">{{stats.usersReferred}} Users referred</h4>
                            <h2 class="number">${{stats.earnedFromReferredUsers}} Earned</h2>
                        </div>
                        <img src="@/assets/img/pigDashboard.png" alt="Pig" class="image-corner pig-image">
                    </div>
                </div>
                <div class="orders-section">
                    <h1 class="page-title">Your orders</h1>
                    <Orders :orders='orders' />
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Orders from '@/components/layout/App/Orders';
import Stats from '@/components/layout/App/Stats';

export default {
    middleware: ['notLoggedIn'],

    components: {
        Orders,
        Stats,
    },

    data() {
        return {
            period: ''
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER ID
        userId() {
            return this.$store.state.user.id;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        foundUser() {
            let user = {};
            this.$store.state.users.users.forEach(el => {
                if (el.id === this.userId) {
                    user = el;
                }
            })
            return user;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY ORDERS ARRAY
        orders() {
            return this.foundUser.orders;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY DASHBOARD STATS
        stats() {
            return this.foundUser.dashboard;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SALES
        sales() {
            let sales = [];
            if (this.stats.period === 'week') {
                sales = this.stats.sales.weekly;
            } else if (this.stats.period === 'month') {
                sales = this.stats.sales.monthly;
            } else if (this.stats.period === 'year') {
                sales = this.stats.sales.yearly;
            } else if (this.stats.period === 'all time') {
                sales = this.stats.sales.allTime;
            }
            return sales;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REVENUE
        revenue() {
            let revenue = [];
            if (this.stats.period === 'week') {
                revenue = this.stats.revenue.weekly;
            } else if (this.stats.period === 'month') {
                revenue = this.stats.revenue.monthly;
            } else if (this.stats.period === 'year') {
                revenue = this.stats.revenue.yearly;
            } else if (this.stats.period === 'all time') {
                revenue = this.stats.revenue.allTime;
            }
            return revenue;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHART DATA
        chartData() {
            let chartData = [];
            if (this.stats.period === 'week') {
                chartData = this.stats.chartData.weekly;
            } else if (this.stats.period === 'month') {
                chartData = this.stats.chartData.monthly;
            } else if (this.stats.period === 'year') {
                chartData = this.stats.chartData.yearly;
            } else if (this.stats.period === 'all time') {
                chartData = this.stats.chartData.allTime;
            }
            return chartData;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PERIOD SELECTION DROPDOWN
        togglePeriodDropdown() {
            if (!this.periodSelectionDropdown.classList.contains('opened')) {
                this.periodSelectionDropdown.classList.add('opened');
                this.periodSelectionDropdown.style.display = 'block';
                this.periodDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.periodSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.periodSelectionDropdown.style.opacity = 0;
                this.periodDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.periodSelectionDropdown.style.display = 'none';
                    this.periodSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION PERIOD OPTION FUNCTIONAL
        selectPeriodOption(option) {
            this.period = option;
            this.$store.commit('users/changePeriod', {value: option.toLowerCase(), id: this.userId});
        },
    },

    mounted () {
        this.periodSelectionDropdown = document.getElementById('periodSelectionDropdown');
        this.periodDropdownArrow = document.getElementById('periodDropdownArrow');
        this.periodDropdownOpener = document.getElementById('periodDropdownOpener');

        this.period = this.stats.period.charAt(0).toUpperCase() + this.stats.period.slice(1);

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const dropdownPeriodOpener = this.periodDropdownOpener.contains(e.target);

            if (!dropdownPeriodOpener && this.periodSelectionDropdown.classList.contains('opened')) {
                this.periodSelectionDropdown.style.opacity = 0;
                this.periodDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.periodSelectionDropdown.style.display = 'none';
                    this.periodSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        });
    },
}
</script>

<style lang="scss" scoped>
.dashboard-page {
    
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

        .select {
            width: fit-content;

            input {
                font-family: Montserrat;
                display: block;
                box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                0 .3rem 1rem 0 rgba(#19151F, .5);
                background-color: darken($color-grey, 1%);
                padding: 1.2rem 2.75rem;
                border-radius: 9px;
                width: 100%;
                color: white;
                margin-bottom: 3rem;

                &:not(:last-of-type) {
                    margin-bottom: 1.25rem;
                }
                

                &::placeholder {
                    color: white;
                }
            }
        }

        .flex-container {
            display: flex;
            margin-top: 5rem;
            margin-bottom: 5rem;
            
            @media only screen and (max-width: 850px) {
                flex-direction: column;
            }

            .flex-item {
                background-color: $color-grey-dark;
                border-radius: 10px;
                box-shadow: 0 .5rem 5rem rgba(black, .4);
                padding: 3.5rem 2.75rem;
                width: 50%;
                position: relative;
                overflow: hidden;


                &:not(:last-of-type) {
                    margin-right: 2.75rem;
                }
            
                @media only screen and (max-width: 850px) {
                    width: 100%;

                    &:not(:last-of-type) {
                        margin-right: 0;
                        margin-bottom: 1.5rem;
                    }
                }

                .image-corner {
                    position: absolute;
                    right: 0;
                    bottom: 0;
            
                    @media only screen and (max-width: 850px) {
                        display: none;
                    }
                }

                .info {
                    position: relative;
                    z-index: 100;
                }
            }
        }

        .api-key-container {
            .info {
                .small-title {
                    font-weight: 500 !important;
                    display: inline-block;
                    margin-bottom: 1rem;
            
                    @media only screen and (max-width: 850px) {
                        font-size: 1.8rem;
                    }
                }

                .input-group {
                    display: flex;
                    margin-bottom: 2rem;

                    input {
                        display: block;
                        background-color: #111111;
                        box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                        0 .3rem 1rem 0 rgba(#19151F, .5);
                        border-radius: 8px;
                        padding: .8rem 2.5rem;
                        width: 33rem;
                        margin-right: 1rem;
            
                        @media only screen and (max-width: 850px) {
                            padding: 1.3rem 2.5rem;
                            width: 38rem;
                        }
                    }
                }

                .icon-container {
                    @include flex-center;
                    background-color: $color-grey-2;
                    box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2);
                    border-radius: 8px;
                    padding: .75rem;
                    width: 3.5rem;
                    height: 3.5rem;
                    cursor: pointer;
                    transition: all .3s;

                    &:hover {
                        background-color: lighten($color-grey-2, 4%);
                    }

                    @media only screen and (max-width: 850px) {
                        width: 4.25rem;
                        height: 4.25rem;
                    }

                    .icon {
                        width: 2rem;

                        @media only screen and (max-width: 850px) {
                            width: 3.25rem;
                        }
                    }
                }

                .btn {
                    padding: .75rem 3.5rem;
                    font-weight: 500 !important;
            
                    @media only screen and (max-width: 850px) {
                        padding: 1.25rem 3rem;
                        font-size: 1.7rem;
                    }
                }
            }

            .key-image {
                width: 28rem;
            }
        }

        .referred-users-container {
            display: flex;
            align-items: center;
            
            @media only screen and (max-width: 850px) {
                justify-content: center;
                text-align: center;
            }

            .info {
                .small-title {
                    display: inline-block;
                    color: $color-primary;
                    font-size: 1.7rem;
                    margin-bottom: .5rem;
            
                    @media only screen and (max-width: 850px) {
                        font-size: 2rem;
                    }
                }

                .number {
                    color: $color-text-grey;
                    font-size: 4.25rem;
                }
            }

            .pig-image {
                width: 23rem;
            }
        }
        
    }
}
</style>