<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="admin-dashboard-page section section-page">
            <div @click="closeWindowOnWrapper" ref="addCategoryWindow" class="add-category-window-wrapper">
                <div class="add-category-window">
                    <h2 class="title">Add new <br>category</h2>
                    <div class="input-group">
                        <label for="categoryInput">Category</label>
                        <input @keypress.enter='addNewCategory' v-model="newCategory" ref="categoryInput" type="text" id="categoryInput" class="category-input" placeholder="Enter category">
                        <div class="buttons">
                            <button @click="addNewCategory" class="btn btn-gradient"><span>Add</span></button>
                            <button @click="closeWindow" class="btn btn-transparent"><div class="background"></div><span>Cancel</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Admin Dashboard</span>
                </div>
                <h1 class="page-title">Admin Dashboard</h1>
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
                <div class="center-container">
                    <h2 class="title">Category</h2>
                    <div class="categories-admin-stats-container">
                        <div ref="categories" class="categories">
                            <div class="category">All</div>
                            <div v-for="category in stats.categories" :key="category" class="category">
                                <p>{{category}}</p>
                                <button class="button-delete-category">
                                    <img src="@/assets/svg/closeIcon.svg" alt="Close" class="close-icon">
                                </button>
                            </div>
                        </div>
                        <div class="categories-controls">
                            <button v-if="!categoryEditingMode" @click="openWindow" ref="addCategoryButton" class="btn btn-transparent add-category"><div class="background"></div><span class="button-span">Add category</span></button>
                        </div>
                        <div class="admin-stats">
                            <div class="stat-item">
                                <div class="icon-container">
                                    <img src="@/assets/svg/bag.svg" alt="Icon" class="icon">
                                </div>
                                <div class="info">
                                    <h2 class="number">{{depositsAmount}}</h2>
                                    <p>{{periodText}} <br>deposits</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <img src="@/assets/svg/cart.svg" alt="Icon" class="icon">
                                </div>
                                <div class="info">
                                    <h2 class="number">{{transactionsAmount}}</h2>
                                    <p>{{periodText}} <br>transactions</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <img src="@/assets/svg/upload.svg" alt="Icon" class="icon">
                                </div>
                                <div class="info">
                                    <h2 class="number">{{referralsAmount}}</h2>
                                    <p>{{periodText}} <br>referrals</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <img src="@/assets/svg/bag.svg" alt="Icon" class="icon">
                                </div>
                                <div class="info">
                                    <h2 class="number">{{withdrawalsAmount}}</h2>
                                    <p>{{periodText}} <br>withdrawals</p>
                                </div>
                            </div>
                            <div class="stat-item">
                                <div class="icon-container">
                                    <img src="@/assets/svg/users.svg" alt="Icon" class="icon">
                                </div>
                                <div class="info">
                                    <h2 class="number">{{usersAmount}}</h2>
                                    <p>{{periodText}} <br>users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shop-stats">
                    <h2 ref="shopStatsTitle" class="title">Users</h2>
                    <div ref="shopStatsList" class="shop-stats-list">
                        <div class="shop-category">Interventions</div>
                        <div class="active shop-category">Users</div>
                        <div class="shop-category">Products</div>
                        <div class="shop-category">Transactions</div>
                        <div class="shop-category">Reports</div>
                        <div class="shop-category">Deposits</div>
                        <div class="shop-category">Withdrawals</div>
                        <div class="shop-category">Balance Tool</div>
                        <div class="shop-category">Applications</div>
                    </div>
                    <component :componentTypeBase="componentType" :is="currentComponent"></component>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Stats from '@/components/layout/App/Stats';

export default {
    middleware: ['notLoggedIn', 'isAdmin'],

    components: {
        Stats,
        DynamicComponent: () => import('~/components/layout/AdminDahsboard/DynamicComponent'),
        BalanceTool: () => import('~/components/layout/AdminDahsboard/BalanceTool'),
    },

    data() {
        return {
            period: '',
            categoryEditingMode: false,
            newCategory: '',
            currentComponent: 'DynamicComponent',
            componentType: 'Users',
            periodTextNotComp: '',
            salesNotComp: [],
            revenueNotComp: [],
            depositsAmountNotComp: [],
            withdrawalsAmountNotComp: [],
            transactionsAmountNotComp: [],
            usersAmountNotComp: [],
            referralsAmountNotComp: [],
            chartDataNotComp: [],
        }
    },

    watch: {
        periodComp() {
            this.getDataByPeriod();
        },
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADMIN DASHBOARD STATS
        stats() {
            return this.$store.state.adminDashboard;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PERIOD
        periodComp() {
            return this.$store.state.adminDashboard.period;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SALES
        sales() {
            return this.salesNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REVENUE
        revenue() {
            return this.revenueNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DEPOSITS
        depositsAmount() {
            return this.depositsAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // WITHDRAWALS
        withdrawalsAmount() {
            return this.withdrawalsAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TRANSACTIONS
        transactionsAmount() {
            return this.transactionsAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USERS
        usersAmount() {
            return this.usersAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REFERRALS
        referralsAmount() {
            return this.referralsAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // STATS PERIOD TEXT
        periodText() {
            return this.periodTextNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHART DATA
        chartData() {
            return this.chartDataNotComp;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET DATA BY PERIOD
        getDataByPeriod() {
            if (this.periodComp === 'week') {
                this.salesNotComp = this.stats.sales.weekly;
                this.revenueNotComp = this.stats.revenue.weekly;
                this.depositsAmountNotComp = this.stats.depositsAmount.weekly;
                this.withdrawalsAmountNotComp = this.stats.withdrawsAmount.weekly;
                this.transactionsAmountNotComp = this.stats.transactionsAmount.weekly;
                this.usersAmountNotComp = this.stats.usersAmount.weekly;
                this.referralsAmountNotComp = this.stats.referralsAmount.weekly;
                this.chartDataNotComp = this.stats.chartData.weekly;
                this.periodTextNotComp = 'Weekly';
            } else if (this.periodComp === 'month') {
                this.salesNotComp = this.stats.sales.monthly;
                this.revenueNotComp = this.stats.revenue.monthly;
                this.depositsAmountNotComp = this.stats.depositsAmount.monthly;
                this.withdrawalsAmountNotComp = this.stats.withdrawsAmount.monthly;
                this.transactionsAmountNotComp = this.stats.transactionsAmount.monthly;
                this.usersAmountNotComp = this.stats.usersAmount.monthly;
                this.referralsAmountNotComp = this.stats.referralsAmount.monthly;
                this.chartDataNotComp = this.stats.chartData.monthly;
                this.periodTextNotComp = 'Monthly';
            } else if (this.periodComp === 'year') {
                this.salesNotComp = this.stats.sales.yearly;
                this.revenueNotComp = this.stats.revenue.yearly;
                this.depositsAmountNotComp = this.stats.depositsAmount.yearly;
                this.withdrawalsAmountNotComp = this.stats.withdrawsAmount.yearly;
                this.transactionsAmountNotComp = this.stats.transactionsAmount.yearly;
                this.usersAmountNotComp = this.stats.usersAmount.yearly;
                this.referralsAmountNotComp = this.stats.referralsAmount.yearly;
                this.chartDataNotComp = this.stats.chartData.yearly;
                this.periodTextNotComp = 'Yearly';
            } else if (this.periodComp === 'all time') {
                this.salesNotComp = this.stats.sales.allTime;
                this.revenueNotComp = this.stats.revenue.allTime;
                this.depositsAmountNotComp = this.stats.depositsAmount.allTime;
                this.withdrawalsAmountNotComp = this.stats.withdrawsAmount.allTime;
                this.transactionsAmountNotComp = this.stats.transactionsAmount.allTime;
                this.usersAmountNotComp = this.stats.usersAmount.allTime;
                this.referralsAmountNotComp = this.stats.referralsAmount.allTime;
                this.chartDataNotComp = this.stats.chartData.allTime;
                this.periodTextNotComp = 'Total';
            }
        },

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
            this.$store.commit('adminDashboard/changePeriod', {value: option.toLowerCase()});
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CANCEL CATEGORY EDITING MODE
        addNewCategory() {
            this.newCategory = this.validateValue(this.newCategory);
            this.categoryIsTaken = false;

            if (!this.newCategory) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'New category input can\'t be empty', 
                    isBad: true
                });
                return;
            }
            
            this.stats.categories.forEach(el => {
                if (el.toLowerCase() === this.newCategory.toLowerCase()) {
                    this.categoryIsTaken = true;
                }
            })

            if (this.categoryIsTaken) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Category is already taken', 
                    isBad: true
                });
                return;
            }

            this.$store.commit('adminDashboard/addNewCategory', {value: this.newCategory});
            this.newCategory = '';
            this.closeWindow();
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE
        validateValue(value) {
            if (!value) return;
            if (value.includes(' ') >= 0) {
                const inputArr = value.split(' ');

                const inputArr2 = inputArr.filter(el => {
                if (el.replace(/\s/g, '')) {
                    return el.replace(/\s/g, '');
                }
                })

                const validatedValue = inputArr2.join(' ').toLowerCase();
                const firstCapitalValue = validatedValue.charAt(0).toUpperCase() + validatedValue.slice(1);
                return firstCapitalValue;
            } else {
                const validatedValue = value.toLowerCase();
                const firstCapitalValue = validatedValue.charAt(0).toUpperCase() + validatedValue.slice(1);
                return firstCapitalValue;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // OPEN ADD CATEGORY WINDOW
        openWindow() {
            if (this.$refs.addCategoryWindow.classList.contains('opened')) return;
                this.$refs.addCategoryWindow.classList.add('opened');
                this.navigationRoot.style.display = 'none';
                this.$refs.addCategoryWindow.style.display = 'block';
                setTimeout(() => {
                    this.$refs.addCategoryWindow.style.opacity = 1;
                }, 10);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE ADD CATEGORY WINDOW
        closeWindow() {
            if (!this.$refs.addCategoryWindow.classList.contains('opened')) return;
                this.navigationRoot.style.display = 'block';
                this.$refs.addCategoryWindow.style.opacity = 0;
                setTimeout(() => {
                    this.$refs.addCategoryWindow.style.display = 'none';
                    this.$refs.addCategoryWindow.classList.remove('opened');
                }, 200);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE ADD CATEGORY WINDOW ON WRAPPER CLICK
        closeWindowOnWrapper(e) {
            if (!e.target.classList.contains('add-category-window-wrapper')) return;
            this.closeWindow();
        },
    },

    created () {
        this.getDataByPeriod();
    },

    mounted () {
        // DOM
        this.navigationRoot = document.querySelector('.navigation-root');
        this.periodSelectionDropdown = document.getElementById('periodSelectionDropdown');
        this.periodDropdownArrow = document.getElementById('periodDropdownArrow');
        this.periodDropdownOpener = document.getElementById('periodDropdownOpener');
        
        this.categories = document.querySelector('.categories');
        this.categoriesControls = document.querySelector('.categories-controls');
        this.shopStatsList = document.querySelector('.shop-stats-list');
        this.shopCategories = Array.from(document.querySelectorAll('.shop-category'));

        // CONVERT FIRST PERIOD LETTER TO CAPITAL
        this.period = this.stats.period.charAt(0).toUpperCase() + this.stats.period.slice(1);

        // CHECK IF ELEMENTS ARE OVERFLOWING
        // this.$store.dispatch('checkOverflowX', {el: this.categories});
        this.$store.dispatch('checkOverflowX', {el: this.shopStatsList});

        // DELETE CATEGORY
        this.$refs.categories.addEventListener('click', (e) => {
            if (e.target.classList.contains('button-delete-category')) {
                const parent = e.target?.closest('.category');
                const category = parent?.querySelector('p').textContent;
                this.$store.commit('adminDashboard/deleteCategory', {value: category});
                this.$store.dispatch('checkOverflowX', {el: this.categories});
            }
        })

        // SELECT STATS CATEGORY
        this.$refs.shopStatsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('shop-category')) {
                this.shopCategories.forEach(el => {
                    el.classList.remove('active');
                })
                e.target.classList.add('active');
                this.componentType = e.target.textContent;
                if (this.componentType === 'Balance Tool') {
                    this.currentComponent = 'BalanceTool';
                } else {
                    this.currentComponent = 'DynamicComponent';
                }
                this.$refs.shopStatsTitle.textContent = e.target.textContent;
            }
        })

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
            const categories = this.categories.contains(e.target);
            const categoriesControls = this.categoriesControls.contains(e.target);

            if (!categories && 
            !categoriesControls &&
            !e.target.classList.contains('add-category') && 
            !e.target.classList.contains('background') && 
            !e.target.classList.contains('button-span') && 
            !e.target.classList.contains('button-delete-category') && 
            this.categoryEditingMode) {
                this.categoryEditingMode = false;
            }
        });
    },
}
</script>

<style lang="scss" scoped>
.admin-dashboard-page {

    .add-category-window-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000000;
        width: 100%;
        height: 100vh;
        min-height: var(--app-height);
        background-color: rgba(black, .5);
        backdrop-filter: blur(5px);
        transition: all .2s;
        display: none;
        opacity: 0;
    }

    .add-category-window {
        @include abs-center;
        background-color: $color-grey-dark;
        box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        padding: 4rem;
        width: 40rem;

        .title {
            font-size: 3.5rem;
            margin-bottom: 2rem;
            line-height: 1;
        }

        .input-group {
            label {
                display: inline-block;
                margin-bottom: .75rem;
                font-size: 1.5rem;
            }

            input {
                font-family: Montserrat;
                display: block;
                box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                0 .3rem 1rem 0 rgba(#19151F, .5);
                background-color: #111;
                padding: 1rem 2.25rem;
                border-radius: 9px;
                width: 23rem;
                color: white;
                margin-bottom: 3rem;

                &::placeholder {
                    color: $color-text-grey;
                }
            }
        }

        .buttons {
            display: flex;

            .btn {
                padding: .75rem 4rem;
                width: 13rem;
                font-weight: 500 !important;

                &:hover {
                    transform: scale(1.05);
                    border: 1px solid transparent;
                }
            }

            .btn-gradient {
                margin-right: 1rem;
                border-radius: 6px;

                &:hover::before {
                    opacity: 1;
                }

                * {
                    border-radius: 6px;
                    opacity: 1 !important;
                }
            }
            
            .btn-transparent {
                &:hover::before {
                    opacity: 0;
                }

                &:hover::after {
                    opacity: 1;
                }

                .background {
                    background-color: $color-grey-dark;
                }
            }
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
                border: 1px solid $color-grey-2;

                &:not(:last-of-type) {
                    margin-bottom: 1.25rem;
                }
                

                &::placeholder {
                    color: white;
                }
            }
        }

        .center-container {
            @media only screen and (max-width: 850px) {
                width: 100%;
                margin: 0 auto;
            }
        }

        .title {
            font-size: 4.75rem;
            margin-bottom: 3rem;
            margin-top: 7rem;
        }

        .flex-container {
            display: flex;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                // align-items: center;
            }
        }

        .categories-controls {
            display: flex;
            justify-content: flex-end;
            margin-top: 2.5rem;
            margin-bottom: 7rem;

            .add-category {
                font-weight: 500 !important;
                font-size: 1.7rem;
                padding: .75rem 2.5rem;
                justify-self: flex-end;

                @media only screen and (max-width: 850px) {
                    font-size: 2.2rem;
                }

                .background {
                    background-color: #111;
                }
            }
        }

        .categories {
            background-color: $color-grey-dark;
            border-radius: 10px;
            box-shadow: 0 .5rem 5rem rgba(black, .4);
            // width: 18rem;
            padding: 2.5rem;
            text-align: center;
            display: flex;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                height: 6px;
                width: 6px;
            }

            &::-webkit-scrollbar-track {
                background-color: rgba($color-grey, 1);
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 17px;
                background-color: lighten($color-grey-2, 15%);
            }

            .category {
                font-weight: 500 !important;
                padding: .75rem 1.85rem;
                background-color: #1C1B25;
                border-radius: 40px;
                display: flex;
                align-items: center;

                &:not(:last-of-type) {
                    margin-right: 1.25rem;
                }
            }

            .button-delete-category {
                margin-left: 1rem;
                margin-bottom: -4px;
                
                .close-icon {
                    width: 18px;
                    height: 18px;
                }
            }
        }

        .admin-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-columns: 1fr;
            grid-row-gap: 4.5rem;
            grid-column-gap: 7.5rem;
            align-content: start;

            @media only screen and (max-width: 850px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media only screen and (max-width: 550px) {
                grid-column-gap: 9.5rem;
            }
        
            @media only screen and (max-width: 450px) {
                grid-column-gap: 6.5rem;
            } 

            .stat-item {
                display: flex;
                
                @media only screen and (max-width: 550px) {
                    align-items: center;
                }

                .icon-container {
                    background-color: $color-grey-2;
                    border-radius: 15px;
                    width: 6rem;
                    height: 6rem;
                    @include flex-center;
                    margin-right: 1.5rem;

                    @media only screen and (max-width: 850px) {
                        width: 6.5rem;
                        height: 6.5rem;
                    }

                    @media only screen and (max-width: 600px) {
                        width: 5.75rem;
                        height: 5.75rem;
                    }

                    .icon {
                        width: 2.85rem;

                        @media only screen and (max-width: 850px) {
                            width: 3.25rem;
                        }

                        @media only screen and (max-width: 600px) {
                            width: 2.95rem;
                        }
                    }
                }

                .info {
                    color: $color-text-grey;

                    .number {
                        font-size: 3.15rem;
                        margin-bottom: .5rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 3.75rem;
                        }
                    }

                    p {
                        white-space: nowrap;
                        font-weight: 500 !important;
                        font-weight: 1.8rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 2rem;
                        }

                        @media only screen and (max-width: 550px) {
                            white-space: pre-wrap;
                        }

                        br {
                            @media only screen and (min-width: 550px) {
                                display: none;
                            }
                        }

                    }
                }
            }
        }

        .shop-stats {


            .shop-stats-list {
                display: flex;
                align-items: center;
                margin: 2rem 0 3.5rem;
                width: 100%;
                padding-bottom: 1rem;
                // -webkit-mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
                // mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));

                    // overflow-x: scroll;
                @media only screen and (max-width: 850px) {
                    overflow-x: scroll !important;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }

                &::-webkit-scrollbar {
                    height: 6px;
                    width: 6px;
                }

                &::-webkit-scrollbar-track {
                    background-color: rgba($color-grey-dark, 1);
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 17px;
                    background-color: lighten($color-grey, 15%);
                }

                .active {
                    background-color: lighten($color-grey, 2%) !important;
                }

                .shop-category {
                    cursor: pointer;
                    padding: .5rem 1.5rem;
                    border-radius: 50px;
                    transition: all .3s;
                    white-space: nowrap;

                    &:not(:last-of-type) {
                        margin-right: .75rem;
                    }

                    @media only screen and (max-width: 850px) {
                        font-size: 1.9rem;
                        padding: 1rem 3.5rem;
                    }
                }
            }
        }
    }
}
</style>