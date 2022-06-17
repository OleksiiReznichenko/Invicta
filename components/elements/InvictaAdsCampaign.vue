<template>
    <div class="toggle-container campaign">
        <AddNewBanner banner='campaignBanner' :campaignId='id' :campaignBannerSrc='bannerSrc' :id="'change-banner-component' + this.index" class="change-banner-component" />
        <div v-if="showAddCardWindow" @click="closeAddCardWindowOnWrapper" class="add-card-window-wrapper" :id="'add-card-window' + this.index">
            <div class="add-card-window">
                <div class="window-title-container">
                    <h3 class="title">Click on card to add it</h3>
                    <button @click="closeAddCardWindow" class="close-nav-btn">
                        <img src="@/assets/svg/closeIcon.svg" alt="Close" class="close-icon">
                    </button>
                </div>
                <div v-if="user.products.length >= 1" @click="addCard" class="products">
                    <ProductCard 
                    v-for="product in user.products"
                    :key="product.id"
                    :id="product.id"
                    :name="product.name"
                    :photo="product.photo"
                    :price="product.price"
                    :oldPrice="product.oldPrice"
                    :amountInStock="product.amountInStock"
                    :linkDisable='true'
                    />
                </div>
                <div v-if="user.products.length < 1" class="no-products">You don't have any products yet</div>
            </div>
        </div>
        <div class="title-container">
            <div class="title-container__left">
                <input ref="customNameInput" @keypress.enter.prevent="addReadonly" @blur="addReadonly" v-model="customNameLocal" readonly minlength="1" maxlength="18" type="text" class="custom-name title">
                <div @click="removeReadonly" class="icon-container">
                    <img src="@/assets/svg/editIcon.svg" alt="Icon" class="icon">
                </div>
            </div>
            <div class="title-container__right">
                <span class="title">{{bannerType}} banner {{itemsAmount}} {{itemsText}}</span>
                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
            </div>
        </div>
        <div ref="descriptionContainer" class="notifications-list description-container">
            <h2 class="options-title title">Select campaign options</h2>
            <div class="select-options">
                <div class="container">
                    <label :for="'itemsDropdownOpener' + index">Items Amount</label>
                    <div class="select">
                        <input class="input" :id="'itemsDropdownOpener' + index" @click="toggleDropdown(itemsSelectionDropdown, itemsDropdownArrow)" v-model="itemsAmountNotComp" type="text" placeholder="Items" readonly>
                        <img :id="'itemsDropdownArrow' + index" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <div :id="'itemsSelectionDropdown' + index" class="options">
                            <div @click="selectItemsOption(1)" class="option">1</div>
                            <div @click="selectItemsOption(2)" class="option">2</div>
                            <div @click="selectItemsOption(3)" class="option">3</div>
                            <div @click="selectItemsOption(4)" class="option">4</div>
                            <div @click="selectItemsOption(5)" class="option">5</div>
                            <div @click="selectItemsOption(6)" class="option">6</div>
                            <div v-if="bannerType === 'Horizontal'" @click="selectItemsOption(7)" class="option">7</div>
                            <div v-if="bannerType === 'Horizontal'" @click="selectItemsOption(8)" class="option">8</div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label :for="'bannerDropdownOpener' + index">Banner Type</label>
                    <div class="select">
                        <input class="input" :id="'bannerDropdownOpener' + index" @click="toggleDropdown(bannerSelectionDropdown, bannerDropdownArrow)" v-model="bannerTypeNotComp" type="text" placeholder="Banner" readonly>
                        <img :id="'bannerDropdownArrow' + index" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <div :id="'bannerSelectionDropdown' + index" class="options">
                            <div @click="selectBannerOption('Horizontal')" class="option">Horizontal</div>
                            <div @click="selectBannerOption('Vertical')" class="option">Vertical</div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!bannerSrc && bannerType === 'Horizontal'" class="horizontal-banner-empty banner-empty">
                <button @click="openWindow(changeBannerComponent)" class="btn btn-transparent btn-add"><div class="background"></div><span>Add banner</span></button>
            </div>
            <div v-if="bannerSrc && bannerType === 'Horizontal'" class="horizontal-banner">
                <div v-if="editingMode" class="overlay">
                    <div class="buttons">
                        <button @click="openWindow(changeBannerComponent)" class="btn btn-gradient"><span>Edit banner</span></button>
                        <button @click="removeBanner" class="btn btn-gradient"><span>Remove</span></button>
                    </div>
                </div>
                <div v-if="bannerSrc && bannerSrc === 'default'" key="info" class="info">
                    <h1 class="title">Hot Sale</h1>
                    <p class="subheading">Most bought this month "The North Face"</p>
                    <nuxt-link to="/browse" class="btn btn-white">Browse products</nuxt-link>
                </div>
                <img v-if="bannerSrc && bannerSrc === 'default'" key="bannerRightImage" src="@/assets/img/CustomBannerComposition.png" alt="Banner image" class="image">
                <img v-if="bannerSrc && bannerSrc !== 'default'" key="bannerImage" :src="bannerSrc" alt="" class="new-banner-image">
            </div>

            <div v-if="!bannerSrc && bannerType === 'Vertical'" class="mobile vertical-banner-empty banner-empty">
                <button @click="openWindow(changeBannerComponent)" class="btn btn-transparent btn-add"><div class="background"></div><span>Add banner</span></button>
            </div>
            <div v-if="bannerSrc && bannerType === 'Vertical'" class="mobile banner">
                <div v-if="editingMode" class="overlay">
                    <div class="buttons">
                        <button @click="openWindow(changeBannerComponent)" class="btn btn-gradient"><span>Edit banner</span></button>
                        <button @click="removeBanner" class="btn btn-gradient"><span>Remove</span></button>
                    </div>
                </div>
                <div v-if="bannerSrc && bannerSrc === 'default'" class="info">
                    <h3>Have time <br> to buy</h3>
                    <nuxt-link to="/browse" class="btn btn-white">Go to shop</nuxt-link>
                </div>
                <img v-if="bannerSrc && bannerSrc === 'default'" src="@/assets/img/bannerGirl.png" alt="Girl" class="girl">
                <img v-if="bannerSrc && bannerSrc !== 'default'" key="bannerImageMobile" :src="bannerSrc" alt="" class="new-banner-image">
            </div>

            <div @click="cardClickFunc" class="products-container">
                <div v-if="!bannerSrc && bannerType === 'Vertical'" class="desktop vertical-banner-empty banner-empty">
                    <button @click="openWindow(changeBannerComponent)" class="btn btn-transparent btn-add"><div class="background"></div><span>Add banner</span></button>
                </div>
                <div v-if="bannerSrc && bannerType === 'Vertical'" class="desktop banner">
                    <div v-if="editingMode" class="overlay">
                        <div class="buttons">
                            <button @click="openWindow(changeBannerComponent)" class="btn btn-gradient"><span>Edit banner</span></button>
                            <button @click="removeBanner" class="btn btn-gradient"><span>Remove</span></button>
                        </div>
                    </div>
                    <div v-if="bannerSrc && bannerSrc === 'default'" class="info">
                        <h3>Have time <br> to buy</h3>
                        <nuxt-link to="/browse" class="btn btn-white">Go to shop</nuxt-link>
                    </div>
                    <img v-if="bannerSrc && bannerSrc === 'default'" src="@/assets/img/bannerGirl.png" alt="Girl" class="girl">
                    <img v-if="bannerSrc && bannerSrc !== 'default'" key="bannerImageMobile" :src="bannerSrc" alt="" class="new-banner-image">
                </div>
                <div v-for="(card, i) in products" :key="i" class="product-card-container-wrapper">
                    <div class="product-card-container-index">{{i}}</div>
                    <div v-if="!card" class="product-card-container">
                        <button class="btn btn-transparent btn-add btn-add-card"><div class="background"></div><span class="add-card-span">Add card</span></button>
                    </div>
                    <ProductCard 
                     v-if="card"
                    :key="card.id"
                    :id="card.id"
                    :name="card.name"
                    :photo="card.photo"
                    :price="card.price"
                    :oldPrice="card.oldPrice"
                    :amountInStock="card.amountInStock"
                    :linkDisable='true'
                    />
                </div>
            </div>
            <button v-if="!editingMode" @click="edit" class="btn btn-gradient btn-edit"><span>Edit</span></button>
            <button v-if="editingMode" @click="cancelEdit" class="btn btn-gradient btn-edit"><span>Cancel</span></button>

            <h2 class="chart-title title">Number of transitions</h2>
            <div class="select select-margin-bottom">
                <input class="input" :id="'periodDropdownOpener' + index" @click="toggleDropdown(periodSelectionDropdown, periodDropdownArrow)" v-model="period" type="text" placeholder="Period" readonly>
                <img :id="'periodDropdownArrow' + index" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                <div :id="'periodSelectionDropdown' + index" class="options">
                    <div @click="selectPeriodOption('All time')" class="option">All time</div>
                    <div @click="selectPeriodOption('Year')" class="option">Year</div>
                    <div @click="selectPeriodOption('Month')" class="option">Month</div>
                    <div @click="selectPeriodOption('Week')" class="option">Week</div>
                </div>
            </div>
            <Chart 
            :period='period'
            :chartData='chartData'
            />
            <Stats
            :sales='salesPeriod'
            :sales24h='sales.daily'
            :revenue='revenuePeriod'
            :revenue24h='revenue.daily'
            :period='period'
            />
            <div class="price-regulations">
                <div class="input-group">
                    <label :for="'dayInput' + index">Current day</label>
                    <input v-model="currentDay" class="input current-day-input" :id="'dayInput' + index" type="number" placeholder="0" readonly>
                </div>
                <div class="range-regulation">
                    <span>{{rangeDays}} {{daysText}} / {{rangePrice}}$</span>
                    <div class="range-container">
                        <input @input="changeRangeLength" v-model="rangeDays" type="range" :id="'rangeInput' + index" class="range-input" min="1" max="365" step="1">
                    </div>
                </div>
                <div class="input-group">
                    <label :for="'priorityInput' + index">Priority %</label>
                    <input v-model="priority" min="1" class="input priority-input" :id="'priorityInput' + index" type="number" placeholder="Priority">
                </div>
            </div>
            <div class="pricing-container">
                <h3 class="price-day">{{rangeDays}} {{daysText}} / {{rangePrice}}$</h3>
                <div class="buttons">
                    <button @click="buy" class="btn btn-gradient"><span>Buy</span></button>
                    <button @click="extendCampaign" class="btn btn-transparent"><div class="background"></div><span>Extend the Campaign</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Stats from '@/components/layout/App/Stats';
import AddNewBanner from '@/components/layout/Profile/AddNewBanner';

export default {
    props: ['index', 'id', 'type', 'bannerTypeBase', 'customName', 'itemsAmountBase', 'currentDayBase', 'priorityBase', 'sales', 'revenue', 'chartDataObject', 'bannerSrc', 'cardsIds'],

    components: {
        Stats,
        AddNewBanner,
    },

    data() {
        return {
            customNameLocal: this.customName,
            customNameLocalCopy: this.customName,
            itemsAmountNotComp: 6,
            bannerTypeNotComp: 'Vertical',
            period: 'All time',
            chartDataNotComp: [],
            salesPeriodNotComp: null,
            revenuePeriodNotComp: null,
            editingMode: false,
            userNotComp: [],
            showAddCardWindow: false,
            productsBase: [],
            cardWrappers: [],
            currentDay: 1,
            priority: 10,
            rangeDays: 1,
            rangePrice: 200,
            readonlyRemovedIndicator: false,
        }
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IF PERIOD CHANGES = CHANGE PERIOD DATA
        period() {
            this.getDataByPeriod();
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IF BANNER TYPE CHANGES TO VERTICAL AND ITEMS AMOUNT WAS MORE THAN 6 - CHANGE ITEMS AMOUNT TO 6
        bannerType(newValue) {
            if (newValue === 'Vertical' && this.itemsAmountNotComp > 6) {
                this.selectItemsOption(6);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IF RANGE INPUT VALUE CHANGES - CHANGE RANGE PRICE VALUE
        rangeDays() {
            this.rangePrice = this.rangeDays * 200;
        },
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE TEXT IF DAYS AMOUNT IS 1
        daysText() {
            if (this.rangeDays == 1) {
                return 'day';
            } else {
                return 'days';
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE TEXT IF ITEMS AMOUNT IS 1
        itemsText() {
            if (this.itemsAmount == 1) {
                return 'item';
            } else {
                return 'items';
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE
        customNameValidated() {
            if (this.customNameLocal.includes(' ') >= 0) {
                const customNameArr = this.$refs.customNameInput.value.split(' ');

                const customNameArr2 = customNameArr.filter(el => {
                    if (el.replace(/\s/g, '')) {
                        return el.replace(/\s/g, '');
                    }
                })

                const customName = customNameArr2.join(' ');
                this.customNameLocal = customName;
                return customName;
            } else {
                return this.customNameLocal;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BANNER TYPE
        itemsAmount() {
            return this.itemsAmountNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BANNER TYPE
        bannerType() {
            return this.bannerTypeNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SALES
        salesPeriod() {
            return this.salesPeriodNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REVENUE
        revenuePeriod() {
            return this.revenuePeriodNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHART DATA
        chartData() {
            return this.chartDataNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.userNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRODUCTS ARRAY
        products() {
            return this.productsBase.slice(0, this.itemsAmount);
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BUY
        buy() {
            // IF PRIORITY IS LESS THAN 1 - SHOW ERORR
            if (this.priority < 1) {
                this.$store.dispatch('showNotificationWindow', {
                    text: "The priority can't be less than 1%", 
                    isBad: true
                });
                return;
            }
            
            // IF PRIORITY IS MORE THAN 100 - SHOW ERORR
            if (this.priority > 100) {
                this.$store.dispatch('showNotificationWindow', {
                    text: "The priority can't be more than 100%", 
                    isBad: true
                });
                return;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // EXTEND CAMPAIGN
        extendCampaign() {
            // IF PRIORITY IS LESS THAN 1 - SHOW ERORR
            if (this.priority < 1) {
                this.$store.dispatch('showNotificationWindow', {
                    text: "The priority can't be less than 1%", 
                    isBad: true
                });
                return;
            }
            
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // IF PRIORITY IS MORE THAN 100 - SHOW ERORR
            if (this.priority > 100) {
                this.$store.dispatch('showNotificationWindow', {
                    text: "The priority can't be more than 100%", 
                    isBad: true
                });
                return;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FOCUS INPUT AND REMOVE READONLY
        removeReadonly() {
            this.$refs.customNameInput.removeAttribute('readonly');
            this.$refs.customNameInput.focus();
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DISABLE INPUT IF NOT FOCUSED AND UPDATE VARIABLES AND INPUT WIDTH
        addReadonly() {
            if (!this.customNameValidated) {
                this.customNameLocal = this.customNameLocalCopy;
            } else {
                this.customNameLocalCopy = this.customNameLocal;

                this.$store.commit('users/changeCustomName', {userId: this.user.id, campaignId: this.id, newName: this.customNameLocal})
            }
            this.$refs.customNameInput.classList.remove('not-readonly');
            this.$refs.customNameInput.setAttribute('readonly', true)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET DATA BY PERIOD
        getDataByPeriod() {
            if (this.period.toLowerCase() === 'week') {
                this.chartDataNotComp = this.chartDataObject.weekly;
                this.salesPeriodNotComp = this.sales.weekly;
                this.revenuePeriodNotComp = this.revenue.weekly;
            } else if (this.period.toLowerCase() === 'month') {
                this.chartDataNotComp = this.chartDataObject.monthly;
                this.salesPeriodNotComp = this.sales.monthly;
                this.revenuePeriodNotComp = this.revenue.monthly;
            } else if (this.period.toLowerCase() === 'year') {
                this.chartDataNotComp = this.chartDataObject.yearly;
                this.salesPeriodNotComp = this.sales.yearly;
                this.revenuePeriodNotComp = this.revenue.yearly;
            } else if (this.period.toLowerCase() === 'all time') {
                this.chartDataNotComp = this.chartDataObject.allTime;
                this.salesPeriodNotComp = this.sales.allTime;
                this.revenuePeriodNotComp = this.revenue.allTime;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TOGGLE SELECTION DROPDOWN
        toggleDropdown(dropdown, arrow) {
            if (!dropdown.classList.contains('opened')) {
                dropdown.classList.add('opened');
                dropdown.style.display = 'block';
                arrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    dropdown.style.opacity = 1;
                }, 10);
            } else {
                this.closeDropdown(dropdown, arrow);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE SELECTION DROPDOWN
        closeDropdown(dropdown, arrow) {
            if (dropdown.classList.contains('opened')) {
                dropdown.style.opacity = 0;
                arrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    dropdown.style.display = 'none';
                    dropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION PERIOD OPTION FUNCTIONAL
        selectPeriodOption(option) {
            this.period = option;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION ITEMS OPTION FUNCTIONAL
        selectItemsOption(option) {
            this.itemsAmountNotComp = option;
            this.$store.commit('users/changeItemsAmount', {userId: this.user.id, campaignId: this.id, value: +option})
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION BANNER OPTION FUNCTIONAL
        selectBannerOption(option) {
            this.bannerTypeNotComp = option;
            this.$store.commit('users/changeBannerType', {userId: this.user.id, campaignId: this.id, value: option})
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // OPEN WINDOW
        openWindow(windowToOpen) {
            if (windowToOpen?.classList.contains('opened')) return;
            windowToOpen.style.display = 'block';
            windowToOpen.classList.add('opened');
            setTimeout(() => {
                windowToOpen.style.opacity = 1;
                this.navigationRoot.style.display = 'none';
            }, 10)

        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD & CHANGE & REMOVE CARD FUNCTIONAL
        cardClickFunc(e) {
            if (e.target.classList.contains('btn-add-card') || e.target.parentNode.classList.contains('btn-add-card') ||
            e.target.classList.contains('btn-change-card') || e.target.parentNode.classList.contains('btn-change-card')) {
                if (this.showAddCardWindow) return;
                this.showAddCardWindow = true;
                this.currentAddCardContainer = e.target?.closest('.product-card-container-wrapper');
                this.currentIndex = +this.currentAddCardContainer.querySelector('.product-card-container-index').textContent;
                setTimeout(() => {
                    document.getElementById('add-card-window' + this.index).style.opacity = 1;
                    this.navigationRoot.style.display = 'none';
                }, 10)
            }

            if (e.target.classList.contains('btn-remove-card') || e.target.parentNode.classList.contains('btn-remove-card')) {
                this.currentAddCardContainer = e.target?.closest('.product-card-container-wrapper');
                // console.log(this.currentAddCardContainer);
                this.currentIndex = +this.currentAddCardContainer.querySelector('.product-card-container-index').textContent;
                this.$store.commit('users/addProductCard', {userId: this.user.id, campaignId: this.id, index: this.currentIndex, cardId: null});
                this.currentAddCardContainer.innerHTML = `
                <div class="product-card-container">
                    <div class="product-card-container-index"></div>
                    <button class="btn btn-transparent btn-add btn-add-card"><div class="background"></div><span class="add-card-span">Add card</span></button>
                </div>
                `;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE ADD CARD WINDOW
        closeAddCardWindow() {
            document.getElementById('add-card-window' + this.index).style.opacity = 0;
            setTimeout(() => {
                this.navigationRoot.style.display = 'block';
                this.showAddCardWindow = false;
            }, 200)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE ADD CARD WINDOW
        closeAddCardWindowFast() {
            document.getElementById('add-card-window' + this.index).style.opacity = 0;
            this.navigationRoot.style.display = 'block';
            this.showAddCardWindow = false;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE ADD CARD WINDOW
        closeAddCardWindowOnWrapper(e) {
            if (e.target.classList.contains('add-card-window-wrapper')) {
                this.closeAddCardWindow();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TURN ON EDITING MODE
        edit() {
            this.$refs.descriptionContainer.classList.add('edit-class');
            this.editingMode = true;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TURN OFF EDITING MODE
        cancelEdit() {
            this.$refs.descriptionContainer.classList.remove('edit-class');
            this.editingMode = false;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD CARD
        addCard(e) {
            const productCard = e.target?.closest('.product-card-wrapper');
            if (!productCard) return;
            const productCardId = productCard.querySelector('.product-id')?.textContent;
            this.$store.commit('users/addProductCard', {userId: this.user.id, campaignId: this.id, index: this.currentIndex, cardId: productCardId});
            this.currentAddCardContainer.innerHTML = '';
            this.currentAddCardContainer.insertAdjacentHTML('beforeend', `
                <div class="product-card-container-index">${this.currentIndex}</div>
            `);
            this.currentAddCardContainer.appendChild(productCard);
            this.closeAddCardWindowFast();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE BANNER
        removeBanner() {
            this.$store.commit('users/changeBannerSrc', {userId: this.user.id, campaignId: this.id, newBanner: null});
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE RANGE INPUT LENGTH
        changeRangeLength() {
            const min = this.rangeInput.min;
            const max = this.rangeInput.max;
            this.rangeInput.style.backgroundSize = (this.rangeDays - min) * 100 / (max - min) + '% 100%';
        },
    },

    created () {
        // GET DATA BY PERIOD
        this.getDataByPeriod();

        // FIND USER IN USERS ARRAY
        this.userNotComp = this.$store.state.users.users.find(el => {
            return el.id === this.$store.state.user.id;
        })

        // PRODUCTS ARRAY
        const storeProducts = this.$store.state.products.products;
        
        let foundProduct;

        // FIND PRODUCT OR SET VALUE NULL
        this.productsBase = this.cardsIds.map(cardId => {
            foundProduct =  storeProducts.find(product => {
                return product.id === cardId;
            })
            if (foundProduct) {
                return foundProduct;
            } else {
                return null;
            }
        })
    },

    mounted () {
        // SET INITIAL VALUES
        if (this.itemsAmountBase) {
            this.itemsAmountNotComp = this.itemsAmountBase;
        }

        if (this.bannerTypeBase) {
            this.bannerTypeNotComp = this.bannerTypeBase;
        }

        if (this.currentDayBase) {
            this.currentDay = this.currentDayBase;
        }

        if (this.priorityBase) {
            this.priority = this.priorityBase;
        }

        // DOM
        this.periodSelectionDropdown = document.getElementById('periodSelectionDropdown' + this.index);
        this.periodDropdownArrow = document.getElementById('periodDropdownArrow' + this.index);
        this.periodDropdownOpener = document.getElementById('periodDropdownOpener' + this.index);
        
        this.itemsSelectionDropdown = document.getElementById('itemsSelectionDropdown' + this.index);
        this.itemsDropdownArrow = document.getElementById('itemsDropdownArrow' + this.index);
        this.itemsDropdownOpener = document.getElementById('itemsDropdownOpener' + this.index);
        
        this.bannerSelectionDropdown = document.getElementById('bannerSelectionDropdown' + this.index);
        this.bannerDropdownArrow = document.getElementById('bannerDropdownArrow' + this.index);
        this.bannerDropdownOpener = document.getElementById('bannerDropdownOpener' + this.index);

        this.navigationRoot = document.querySelector('.navigation-root');
        this.changeBannerComponent = document.getElementById('change-banner-component' + this.index);
        this.rangeInput = document.getElementById('rangeInput' + this.index);

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const dropdownItemsOpener = this.itemsDropdownOpener.contains(e.target);

            if (!dropdownItemsOpener && this.itemsSelectionDropdown.classList.contains('opened')) {
                this.closeDropdown(this.itemsSelectionDropdown, this.itemsDropdownArrow);
            }
            
            const dropdownBannerOpener = this.bannerDropdownOpener.contains(e.target);

            if (!dropdownBannerOpener && this.bannerSelectionDropdown.classList.contains('opened')) {
                this.closeDropdown(this.bannerSelectionDropdown, this.bannerDropdownArrow);
            }
            
            const dropdownPeriodOpener = this.periodDropdownOpener.contains(e.target);

            if (!dropdownPeriodOpener && this.periodSelectionDropdown.classList.contains('opened')) {
                this.closeDropdown(this.periodSelectionDropdown, this.periodDropdownArrow);
            }
        });
    },
}
</script>

<style lang="scss" scoped>
::v-deep {
    .stats {
        margin-top: 4rem;
    }

    .chart {
        width: 100%;

        @media only screen and (max-width: 850px) {
            width: 105%;
        }
    }
}

.add-card-window-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: 100vh;
    min-height: var(--app-height);
    background-color: rgba(black, .5);
    transition: all .2s;
    opacity: 0;
}

.add-card-window {
    @include abs-center;
    background-color: $color-grey-dark;
    box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 4rem;
    max-height: 90vh;
    overflow-y: scroll;
    min-width: 100rem;

    @media only screen and (max-width: 850px) {
        min-width: 70%;
    }

    @media only screen and (max-width: 750px) {
        min-width: 80%;
    }

    @media only screen and (max-width: 600px) {
        min-width: 90%;
    }

    @media only screen and (max-width: 500px) {
        min-width: 95%;
        padding: 4rem 2.5rem;
    }

    @media only screen and (max-width: 400px) {
        padding: 4rem 2rem;
    }

    &::-webkit-scrollbar {
        height: 6px;
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba($color-grey, 1);
        margin: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 17px;
        background-color: lighten($color-grey-2, 15%);
    }

    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-columns: 1fr;
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media only screen and (max-width: 400px) {
            grid-column-gap: 2rem;
        }
    }

    .window-title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;

        .title {
            font-size: 3rem;
        }

        .close-nav-btn {
            @include flex-center;
            position: relative;
            width: 4rem;
            height: 4rem;

            @media only screen and (max-width: 850px) {
                width: 7rem;
                height: 7rem;
            }

            .close-icon {
                width: 2.5rem;
                height: 2.5rem;

                @media only screen and (max-width: 850px) {
                    width: 3.5rem;
                    height: 3.5rem;
                }
            }
        }
    }

    .no-products {
        font-size: 2rem;
        font-weight: 500 !important;
        margin: 5rem 0 3rem;
        text-align: center;
    }
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    background-color: $color-grey-dark;
    box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    margin-top: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 3rem 3rem;
    }

    &__left {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        @media only screen and (max-width: 850px) {
            margin-bottom: 1rem;
        }

        .custom-name {
            font-family: Rowdies;
            font-weight: 300 !important;
            font-size: 2.75rem;
            color: white !important;
            width: fit-content;
            min-width: 18rem;
            max-width: 32rem;

            @media only screen and (max-width: 850px) {
                font-size: 3.2rem;
                max-width: 34rem;
            }
        }

        .custom-name[readonly] {
            -webkit-appearance: none;
            cursor: pointer;
            color: white !important;
        }

        .icon-container {
            width: 3rem;
            height: 3rem;
            margin-right: 1.5rem;
            margin-top: -1rem;
            transition: all .3s;
            border-radius: 5px;
            @include flex-center;

            @media only screen and (max-width: 850px) {
                width: 4rem;
                height: 4rem;
                margin-right: 2rem;
            }

            &:hover {
                background-color: lighten($color-grey-2, 5%);
            }

            .icon {
                width: 1.75rem;
                min-width: 15px;
                position: relative;
                z-index: 100;

                @media only screen and (max-width: 850px) {
                    width: 2.75rem;
                }
            }
        }
    }

    &__right {
        display: flex;
        align-items: center;

        .title {
            padding-right: 2rem;
            font-size: 1.5rem;
            font-weight: 500 !important;
            color: $color-text-grey;

            @media only screen and (max-width: 850px) {
                font-size: 2rem;
            }
        }

        .arrow {
            width: 1.4rem;
        }
    }
}

.description-container {
    padding: 2rem 1rem;
    display: none;

    .mobile {
        @media only screen and (min-width: 850px) {
            display: none;
        }
    }

    .desktop {
        @media only screen and (max-width: 850px) {
            display: none;
        }
    }

    .auto-height {
        min-height: auto !important;
        max-height: auto !important;
        height: auto !important;
    }

    .hide {
        display: none !important;
    }
    
    .new-banner-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .overlay {

        .buttons {
            @include abs-center;
            width: 17rem;
            max-width: 80%;
            display: flex;
            flex-direction: column;


            .btn:not(:last-of-type) {
                margin-bottom: 1.5rem;
            }

            .btn {
                padding: 1.4rem 0;
                position: static !important;
                transform: translate(0, 0);
                width: 100%;

                &::before {
                    opacity: 1 !important;
                }

                &:hover {
                    transform: translate(0, 0) scale(1.05);
                }
            }
        }
    }
    
    .new-banner-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .banner-empty {
        border: 2px dashed $color-primary;
    }

    .horizontal-banner,
    .horizontal-banner-empty {
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        margin-bottom: 5rem;
        white-space: nowrap;
        height: 25rem;
        width: 100%;
    }

    .horizontal-banner {
        background-color: $color-pink;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 850px) {
            justify-content: center;
        }

        .info {
            padding: 4.75rem 6rem;
            position: relative;
            z-index: 100;

            @media only screen and (max-width: 850px) {
                text-align: center;
            }

            .title {
                text-transform: uppercase;
                font-size: 7rem;

                @media only screen and (max-width: 400px) {
                    font-size: 6.5rem;
                }
            }

            .subheading {
                font-size: 1.9rem;

                @media only screen and (max-width: 400px) {
                    font-size: 1.75rem;
                }
            }

            .btn {
                font-weight: 400 !important;
                padding: 1rem 5rem;
                margin-top: 1.5rem;
            }
        }

        .image {
            width: 55rem;
            margin-right: 4rem;

            @media only screen and (max-width: 1100px) {
                position: absolute;
                bottom: 0;
                right: 0;
            }

            @media only screen and (max-width: 850px) {
                display: none;
            }
        }
    }

    .vertical-banner-empty,
    .banner {
        grid-row: 1 / span 2;
        min-height: 60rem;
        border-radius: 8px;
        position: relative;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            width: 40rem;
            height: 65rem;
            margin: 0 auto;
            margin-bottom: 3rem;
        }
    }

    .banner {
        background-color: #4F23EA;
        text-align: center;
        overflow: hidden;
        padding-top: 5rem;

        &-container {
            width: 100%;
            background-color: $color-orange;
            padding: 2.5rem 0;
            margin-bottom: 4rem;
            position: relative;
            overflow: hidden;
        }

        .girl {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;

            @media only screen and (max-width: 850px) {
                bottom: -25rem;
            }

            @media only screen and (max-width: 650px) {
                bottom: -20rem;
            }
        }

        .info {
            position: relative;
            z-index: 100;

            h3 {
                text-transform: uppercase;
                font-size: 3rem;
                margin-bottom: 2rem;

                @media only screen and (max-width: 850px) {
                    font-size: 3.75rem;
                }
            }

            .btn {
                padding: 1.25rem 3.6rem;
                font-weight: 400 !important;

                @media only screen and (max-width: 850px) {
                    font-size: 1.75rem;
                }
            }
        }
    }
    
    .btn-add {
        @include abs-center;
        padding: 1.4rem 5.5rem;
        white-space: nowrap;
    }

    .btn-edit {
        padding: 1.4rem 5.5rem;
        margin-top: 2.5rem;
    }

    .products-container {
        position: relative;
        z-index: 100;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-columns: 1fr;
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;

        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
        }

        @media only screen and (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .product-card-container-wrapper {
            border-radius: 8px;
            position: relative;
            height: 28.5rem;

            @media only screen and (max-width: 1450px) {
                height: 30.5rem;
            }

            @media only screen and (max-width: 450px) {
                height: 33.5rem;
            }

            .product-card-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 2px dashed $color-primary;
                border-radius: 8px;
            }

            .product-card-container-index {
                display: none;
            }
    
            .btn-add {
                @include abs-center;
                padding: 1.4rem 5.5rem;
                white-space: nowrap;
            }
        }
    }

    .title {
        font-weight: 300 !important;
        font-size: 3.25rem;
    }

    .options-title {
        margin-top: 1.5rem;
        margin-bottom: 3rem;
    }

    .chart-title {
        margin-bottom: 3.5rem;
        margin-top: 9rem;
    }
    
    .btn {
        font-weight: 500 !important;
        
        .background {
            background-color: #111;
        }
    }

    .select-options {
        display: flex;
        align-items: center;
        margin-bottom: 5rem;

        .container {

            &:not(:last-of-type) {
                margin-right: 1.5rem;
            }
        }
    }

    .select-margin-bottom {
        margin-bottom: 4rem;
    }

    label {
        font-weight: 500 !important;
        display: inline-block;
        margin-bottom: 1rem;
    }

    .input {
        font-family: Montserrat;
        display: block;
        box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
        0 .3rem 1rem 0 rgba(#19151F, .5);
        padding: 1.2rem 2.75rem;
        border-radius: 9px;
        width: 100%;
        color: white;
        border: 1px solid $color-grey-2;
        
        &::placeholder {
            color: white;
        }
    }

    .select {
        width: fit-content;

        input {
            background-color: darken($color-grey, 1%);
            width: 100%;
            
            &:not(:last-of-type) {
                margin-bottom: 1.25rem;
            }
        }
    }

    .price-regulations {
        padding: 1.5rem 3rem;
        background-color: $color-grey-dark;
        box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        margin-bottom: 4.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 850px) {
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            padding: 2.25rem 4rem;
        }
        
        .input-group {

            @media only screen and (max-width: 550px) {
                width: 90%;
            }

            label {
                margin-bottom: .65rem;
            }

            input {
                width: 18rem;
                background-color: #111;

                @media only screen and (max-width: 850px) {
                    width: 40rem;
                }

                @media only screen and (max-width: 550px) {
                    width: 100%;
                }
            }
        }

        .current-day-input {
            color: $color-text-grey;
        
            &::placeholder {
                color: $color-text-grey;
            }
        }

        .range-regulation {
            margin: 0 3.5rem;
            width: 100%;

            @media only screen and (max-width: 850px) {
                margin: 3rem 0;
            }

            span {
                font-weight: 500 !important;
                font-size: 1.8rem;
                display: inline-block;
                margin-bottom: 2rem;
            }

            .range-container {
                position: relative;

                .range-input {
                    cursor: grab;
                    appearance: none;
                    -webkit-appearance: none;
                    height: 6px;
                    width: 100%;
                    background-color: #111;
                    background-image: linear-gradient($color-primary, $color-primary);
                    background-size: 0% 100%;
                    background-repeat: no-repeat;
                    border-radius: 10px;

                    &:active {
                        cursor: grabbing;
                    }

                    &::-webkit-slider-thumb {
                        appearance: none;
                        -webkit-appearance: none;
                        width: 15px !important;
                        height: 15px !important;
                        border-radius: 100%;
                        background-color: $color-text-grey;
                    }

                    &::-moz-range-thumb {
                        appearance: none;
                        -webkit-appearance: none;
                        width: 15px !important;
                        height: 15px !important;
                        border-radius: 100%;
                        background-color: $color-text-grey;
                    }

                    &::-ms-thumb {
                        appearance: none;
                        -webkit-appearance: none;
                        width: 15px !important;
                        height: 15px !important;
                        border-radius: 100%;
                        background-color: $color-text-grey;
                    }

                    &::-webkit-slider-runnable-track {
                        appearance: none;
                        -webkit-appearance: none;
                        background-color: transparent;
                        border-radius: 10px;
                        border: none;
                    }

                    &::-moz-range-track {
                        appearance: none;
                        -webkit-appearance: none;
                        background-color: transparent;
                        box-shadow: none;
                        border-radius: 10px;
                        border: none;
                    }

                    &::-ms-track {
                        appearance: none;
                        -webkit-appearance: none;
                        background-color: transparent;
                        box-shadow: none;
                        border-radius: 10px;
                        border: none;
                    }
                }
            }
        }
    }

    .pricing-container {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            align-items: flex-start;
        }

        .price-day {
            font-weight: 300 !important;
            font-size: 2.75rem;
            margin-right: 2rem;

            @media only screen and (max-width: 850px) {
                margin-right: 0;
                margin-bottom: 1.25rem;
            }
        }

        .buttons {
            display: flex;
            align-items: center;

            .btn {
                font-weight: 500 !important;
                padding: 1.25rem 3rem;

                &:hover {
                    transform: scale(1.05);
                    border: 1px solid transparent;
                }
            }

            .btn-gradient {
                &:hover::before {
                    opacity: 1;
                }
            }

            .btn-transparent {
                &:hover::before {
                    opacity: 0;
                }

                &:hover::after {
                    opacity: 1;
                }
            }

            .btn-gradient {
                margin-right: 1rem;
            }
        }
    }
}
</style>