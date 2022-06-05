<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="admin-dashboard-page section section-page">
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
                    <div class="flex-container">
                        <div ref="categories" class="categories">
                            <div class="category">All</div>
                            <div v-for="category in stats.categories" :key="category" class="category">
                                <p>{{category}}</p>
                                <button v-if="categoryEditingMode" class="button-delete-category">Delete</button>
                            </div>
                            <button v-if="!categoryEditingMode" @click="openEditingMode" ref="editCategoryButton" class="edit-category">Edit</button>
                            <div v-if="categoryEditingMode" class="input-group">
                                <label for="categoryInput">Add new category</label>
                                <input @keypress.enter='addNewCategory' v-model="newCategory" ref="categoryInput" type="text" id="categoryInput" class="category-input" placeholder="Enter category">
                                <button @click="addNewCategory" class="add-category-button">Add</button>
                                <button @click="cancelEditingMode" class="cancel-category-button">Cancel</button>
                            </div>
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
                        <div class="shop-category">Intervensions</div>
                        <div class="active shop-category">Users</div>
                        <div class="shop-category">Products</div>
                        <div class="shop-category">Transitions</div>
                        <div class="shop-category">Reports</div>
                        <div class="shop-category">Deposits</div>
                        <div class="shop-category">Withdrawals</div>
                        <div class="shop-category">Balance Tool</div>
                        <div class="shop-category">Applications</div>
                    </div>
                    <component :componentType="componentType" :is="currentComponent"></component>
                </div>
                <!-- <div class="orders-section">
                    <h1 class="page-title">Your orders</h1>
                    <Orders :orders='orders' />
                </div> -->
            </div>
            <!-- <Footer /> -->
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
        }
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
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // OPEN CATEGORY EDITING MODE
        openEditingMode() {
            this.categoryEditingMode = true;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CANCEL CATEGORY EDITING MODE
        cancelEditingMode() {
            this.categoryEditingMode = false;
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
    },

    created () {
        this.getDataByPeriod();
    },

    mounted () {
        this.periodSelectionDropdown = document.getElementById('periodSelectionDropdown');
        this.periodDropdownArrow = document.getElementById('periodDropdownArrow');
        this.periodDropdownOpener = document.getElementById('periodDropdownOpener');
        
        this.categories = document.querySelector('.categories');
        this.shopCategories = Array.from(document.querySelectorAll('.shop-category'));

        this.period = this.stats.period.charAt(0).toUpperCase() + this.stats.period.slice(1);

        // DELETE CATEGORY
        this.$refs.categories.addEventListener('click', (e) => {
            if (e.target.classList.contains('button-delete-category')) {
                const parent = e.target?.closest('.category');
                const category = parent?.querySelector('p').textContent;
                this.$store.commit('adminDashboard/deleteCategory', {value: category});
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
                console.log(this.componentType, this.currentComponent)
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

            if (!categories && 
            !e.target.classList.contains('edit-category') && 
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
    margin-bottom: 10rem;
    
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

        .center-container {
            @media only screen and (max-width: 850px) {
                width: fit-content;
                margin: 0 auto;
            }
        }

        .title {
            font-size: 4.75rem;
            margin-bottom: 3rem;
            margin-top: 6rem;
        }

        .flex-container {
            display: flex;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                // align-items: center;
            }
        }

        .categories {
            background-color: $color-grey-dark;
            border-radius: 10px;
            box-shadow: 0 .5rem 5rem rgba(black, .4);
            width: 18rem;
            padding: 1rem 1rem 4rem;
            text-align: center;
            margin-right: 5rem;

            @media only screen and (max-width: 850px) {
                width: 30rem;
                margin-bottom: 4rem;
                font-size: 1.8rem;
                width: 100%;
            }

            .category {
                padding: 1.5rem .75rem .7rem;
                color: $color-text-grey;
                border-bottom: 1px solid $color-grey-2;
                text-align: left;

                @media only screen and (max-width: 850px) {
                    padding: 2rem 1.25rem 1rem;
                }
            }

            .edit-category {
                font-weight: 600 !important;
                font-size: 1.7rem;
                color: $color-primary;
                margin-top: 1.5rem;
                transition: all .3s;

                &:hover {
                    color: lighten($color-primary, 5%);
                }

                @media only screen and (max-width: 850px) {
                    font-size: 2.2rem;
                }
            }

            .button-delete-category {
                background-color: #840f0f;
                border-radius: 10px;
                font-weight: 500 !important;
                padding: .35rem 1.25rem;
                margin-top: 5px;
                transition: all .3s;
                
                &:hover {
                    background-color: darken(#840f0f, 7%);
                }
            }

            .input-group {
                text-align: left;
                margin-top: 2rem;

                label {
                    font-weight: 500 !important;
                    display: inline-block;
                    margin-bottom: 6px;
                    margin-left: 5px;
                    font-size: 1.4rem;
        
                    @media only screen and (max-width: 850px) {
                        font-size: 1.7rem;
                    }
                }

                input {
                    display: block;
                    background-color: #111111;
                    box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                    0 .3rem 1rem 0 rgba(#19151F, .5);
                    border-radius: 8px;
                    padding: .8rem 1.5rem;
                    width: 100%;
        
                    @media only screen and (max-width: 850px) {
                        padding: 1.1rem 2.5rem;
                        width: 35rem;
                    }
                }

                button {
                    background-color: $color-primary;
                    border-radius: 20px;
                    font-weight: 500 !important;
                    padding: .35rem 1.25rem;
                    margin-top: 5px;
                    transition: all .3s;
                
                    &:hover {
                        background-color: darken($color-primary, 7%);
                    }
        
                    @media only screen and (max-width: 850px) {
                        padding: .65rem 2.5rem;
                    }
                }

                .cancel-category-button {
                    border: 1px solid white;
                    background: transparent;
                    margin-left: 2px;
                
                    &:hover {
                        background-color: white;
                        color: black;
                    }
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
                overflow-x: scroll;
                // -webkit-mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
                // mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));

                &::-webkit-scrollbar {
                    display: none;
                }

                .active {
                    background-color: lighten($color-grey, 2%) !important;
                }

                .shop-category {
                    cursor: pointer;
                    padding: .5rem 1.5rem;
                    border-radius: 50px;
                    transition: all .3s;

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