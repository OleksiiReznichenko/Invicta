<template>
    <div :class="componentType" class="main-container">
        <div class="title-item">
            <div class="left">
                <span v-if="firstColumnText" class="item-column-one">{{firstColumnText}}</span>
                <span v-if="secondColumnText" class="item-column-two">{{secondColumnText}}</span>
                <span v-if="thirdColumnText" class="item-column-three">{{thirdColumnText}}</span>
                <span v-if="fourthColumnText" class="item-column-four">{{fourthColumnText}}</span>
                <span v-if="fifthColumnText" class="item-column-five">{{fifthColumnText}}</span>
            </div>
            <div class="right">
                <div class="search-container">
                    <input v-if="baseArray && baseArray.length > 0" ref="searchInput" v-model="searchValue"
                    type="search" id="searchInput" placeholder="Search" />
                    <img v-if="baseArray && baseArray.length > 0"
                        src="@/assets/svg/searchIcon.svg"
                        alt="Search icon"
                        class="search-icon"
                    />
                </div>
            </div>
        </div>
        <div v-if="!baseArray || baseArray.length == 0" class="no-items">
            No {{componentType}} yet
        </div>
        <div v-if="baseArray && baseArray.length > 0 && filteredArray.length == 0" class="no-items">
            No {{componentType}} were found
        </div>
        <div v-if="baseArray && baseArray.length > 0" class="items-container">
            <div class="items" v-if="componentType === 'interventions'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :id='item.orderId'
                :firstColumnText='item.orderId'
                :secondColumnText='item.transactionId'
                :thirdColumnText='item.status'
                :componentType='componentType'
                :statusForMobile='item.status'
                />
            </div>
            <div class="items" v-if="componentType === 'users'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :userId='item.id'
                :userAvatar='item.avatar'
                :firstColumnText='item.username'
                :secondColumnText='item.id'
                :thirdColumnText='item.email'
                :componentType='componentType'
                :isAdmin='item.isAdmin'
                />
            </div>
            <div class="items" v-if="componentType === 'products'">
                <DynamicItem
                v-for="(item, i) in filteredArray"
                :key="i"
                :id='item.id'
                :firstColumnText='null'
                :secondColumnText='item.id'
                :thirdColumnText='item.name'
                :componentType='componentType'
                :findUserId='item.sellerId'
                />
            </div>
            <div class="items" v-if="componentType === 'transactions'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :firstColumnText='null'
                :secondColumnText='item.id'
                :thirdColumnText='item.productTitle'
                :fourthColumnText='item.amount'
                :fifthColumnText='item.timestamp'
                :componentType='componentType'
                :findUserId='item.sellerId'
                />
            </div>
            <div class="items" v-if="componentType === 'reports'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :id='item.id'
                :firstColumnText='item.id'
                :secondColumnText='item.category'
                :thirdColumnText='item.status'
                :componentType='componentType'
                />
            </div>
            <div class="items" v-if="componentType === 'deposits'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :id='item.id'
                :firstColumnText='null'
                :secondColumnText='item.id'
                :thirdColumnText='item.amount'
                :fourthColumnText='item.time'
                :fifthColumnText='item.status'
                :componentType='componentType'
                :findUserId='item.userId'
                :statusForMobile='item.status'
                />
            </div>
            <div class="items" v-if="componentType === 'withdrawals'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :id='item.id'
                :firstColumnText='null'
                :secondColumnText='item.id'
                :thirdColumnText='item.amount'
                :fourthColumnText='item.time'
                :fifthColumnText='item.status'
                :componentType='componentType'
                :findUserId='item.userId'
                :statusForMobile='item.status'
                />
            </div>
            <div class="items" v-if="componentType === 'applications'">
                <DynamicItem
                v-for="item in filteredArray"
                :key="item.id"
                :id='item.id'
                :firstColumnText='null'
                :secondColumnText='item.id'
                :thirdColumnText='item.status'
                :componentType='componentType'
                :findUserId='item.userId'
                :statusForMobile='item.status'
                />
            </div>
        </div>
        <div class="pagination">
            <div class="page-numbers">
                <span @click="paginationFunc" class="page-number page-number--first">1</span>
                <span class="dots dots--first">...</span>
                <span @click="paginationFunc" class="page-number page-number--central page-number--central--left">2</span>
                <span @click="paginationFunc" class="page-number page-number--central page-number--central--central">3</span>
                <span @click="paginationFunc" class="page-number page-number--central page-number--central--right">4</span>
                <span class="dots dots--last">...</span>
                <span @click="paginationFunc" ref="lastPageNumber" class="page-number page-number--last">10</span>
            </div>
            <div class="buttons">
                <button @click="prev" ref="prevButton" class="button-prev">Previous</button>
                <button @click="next" ref="nextButton" class="button-next">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicItem from '@/components/layout/AdminDahsboard/DynamicItem';

export default {
    props: ['componentTypeBase'],

    components: {
        DynamicItem,
    },

    data() {
        return {
            searchValue: '',
            searchValueValidated: '',
            finalArray: [],
            sliceStart: 0,
            sliceEnd: 10,
            amountOfItemsInPage: 10,
            productsPages: 1,
            currentProductsPage: 1,
            componentType: 'users',
            firstColumnText: '',
            secondColumnText: '',
            thirdColumnText: '',
            fourthColumnText: '',
            fifthColumnText: '',
        }
    },

    computed: {
        baseArray() {
            this.componentType = this.componentTypeBase.toLowerCase();
            if (this.componentType === 'interventions') {
                this.firstColumnText = 'ID';
                this.secondColumnText = 'Transaction ID';
                this.thirdColumnText = 'Status';
                this.fourthColumnText = '';
                this.fifthColumnText = '';
                
                return this.$store.state.adminDashboard.interventionRequests;
            } else if (this.componentType === 'users') {
                this.firstColumnText = 'Username';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Email';
                this.fourthColumnText = 'Status';
                this.fifthColumnText = '';
                
                return this.$store.state.users.users;
            } else if (this.componentType === 'products') {
                this.firstColumnText = 'Seller';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Title';
                this.fourthColumnText = '';
                this.fifthColumnText = '';
                
                return this.$store.state.products.products;
            } else if (this.componentType === 'transactions') {
                this.firstColumnText = 'Seller';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Title';
                this.fourthColumnText = 'Amount';
                this.fifthColumnText = 'Timestamp';
                
                return this.$store.state.adminDashboard.transactions;
            } else if (this.componentType === 'reports') {
                this.firstColumnText = 'ID';
                this.secondColumnText = 'Category';
                this.thirdColumnText = 'Status';
                this.fourthColumnText = '';
                this.fifthColumnText = '';
                
                return this.$store.state.adminDashboard.reports;
            }  else if (this.componentType === 'deposits') {
                this.firstColumnText = 'Username';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Amount';
                this.fourthColumnText = 'Date';
                this.fifthColumnText = 'Status';
                
                return this.$store.state.adminDashboard.deposits;
            } else if (this.componentType === 'withdrawals') {
                this.firstColumnText = 'Username';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Amount';
                this.fourthColumnText = 'Date';
                this.fifthColumnText = 'Status';
                
                return this.$store.state.adminDashboard.withdrawals;
            } else if (this.componentType === 'applications') {
                this.firstColumnText = 'Username';
                this.secondColumnText = 'ID';
                this.thirdColumnText = 'Status';
                this.fourthColumnText = '';
                this.fifthColumnText = '';
                
                return this.$store.state.adminDashboard.applications;
            }
        },

        filteredArray() {
            if (this.searchValueValidated) {
                this.finalArray = this.baseArray.filter(el => {
                    if (
                        el.productTitle?.toLowerCase().includes(this.searchValueValidated) || 
                        el.id?.toLowerCase().includes(this.searchValueValidated) ||
                        el.orderId?.toLowerCase().includes(this.searchValueValidated) ||
                        el.transactionId?.toLowerCase().includes(this.searchValueValidated) ||
                        el.productTitle?.toLowerCase().includes(this.searchValueValidated) ||
                        el.category?.toLowerCase().includes(this.searchValueValidated) ||
                        el.username?.toLowerCase().includes(this.searchValueValidated) ||
                        el.email?.toLowerCase().includes(this.searchValueValidated)
                    ) {
                        return el;
                    }
                });
            } else {
                this.finalArray = this.baseArray;
            }

            // CALC PAGES AMOUNT
            this.productsPages = Math.ceil(this.finalArray.length / this.amountOfItemsInPage);

            // LIMIT AMOUNT OF PRODUCTS ON PAGE
            return this.finalArray.slice(this.sliceStart, this.sliceEnd);
        },
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VALIDATE SEARCH VALUE ON TYPING
        searchValue() {
            this.validateSearchValue();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REINIT PAGINATION ON ARRAY CHANGE
        'finalArray.length'() {
            this.paginationInit();
        }
    },
    
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE AND CONVERT TO LOWERCASE
        validateSearchValue() {
            this.searchValueValidated = '';
            if (this.searchValue.includes(' ') >= 0) {
                const searchInputArr = this.$refs.searchInput.value.split(' ');

                const searchInputArr2 = searchInputArr.filter(el => {
                    if (el.replace(/\s/g, '')) {
                        return el.replace(/\s/g, '');
                    }
                })

                const search = searchInputArr2.join(' ');
                this.searchValueValidated = search.toLowerCase();
            } else {
                this.searchValueValidated = this.searchValue.toLowerCase();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PREV BUTTON FUNCTIONAL
        prev() {
            if (this.sliceStart !== 0) {
                // SHOW PREV BUTTON IF IT WAS HIDDEN
                if (this.$refs.prevButton.classList.contains('disabled-button')) {
                    this.$refs.prevButton.classList.remove('disabled-button');
                }
                
                // SHOW NEXT BUTTON IF IT WAS HIDDEN
                if (this.$refs.nextButton.classList.contains('disabled-button')) {
                    this.$refs.nextButton.classList.remove('disabled-button');
                }

                // UPDATE SLICE START & SLICE END VALUE AND CURRENT PAGE NUMBER
                this.sliceStart -= this.amountOfItemsInPage;
                this.sliceEnd -= this.amountOfItemsInPage;
                this.currentProductsPage -= 1;

                // HIDE PREV BUTTON ON THE FIRST PAGE
                if (this.sliceStart === 0) {
                    this.$refs.prevButton.classList.add('disabled-button');
                }
            }
                
            this.paginationOnButtons();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // NEXT BUTTON FUNCTIONAL
        next() {
            // MAXIMAL AMOUNT OF PRODUCTS FOR ALL PAGES
            const maxProductsItems = this.productsPages * this.amountOfItemsInPage;

            if (maxProductsItems !== this.sliceEnd) {
                // SHOW NEXT BUTTON IF IT WAS HIDDEN
                if (this.$refs.nextButton.classList.contains('disabled-button')) {
                    this.$refs.nextButton.classList.remove('disabled-button');
                }

                // SHOW PREV BUTTON IF IT WAS HIDDEN
                if (this.$refs.prevButton.classList.contains('disabled-button')) {
                    this.$refs.prevButton.classList.remove('disabled-button');
                }
                
                // IF NOT MOBILE UPDATE SLICE START VALUE
                this.sliceStart += this.amountOfItemsInPage;
                
                // UPDATE SLICE END VALUE AND CURRENT PAGE NUMBER
                this.sliceEnd += this.amountOfItemsInPage;
                this.currentProductsPage += 1;

                if (this.currentProductsPage === this.productsPages) {
                    this.$refs.nextButton.classList.add('disabled-button');
                }
            }
                
            this.paginationOnButtons();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAGINATION FUNCTIONAL WHEN USE PREV & NEXT BUTTONS
        paginationOnButtons() {
            // REMOVE ACTIVE CLASSES FROM PREVIOUS PAGINATION BUTTONS
            this.pageNumbers.forEach(el => {
                el.classList.remove('active-page-number');
            })

            // FIND NEW ACTIVE PAGINATION BUTTON
            const activeButton = this.pageNumbers.find(el => {
                return el.textContent == this.currentProductsPage;
            })

            if (!activeButton) return;

            // ADD ACTIVE CLASS TO NEW PAGINATION BUTTON
            activeButton.classList.add('active-page-number');

            // CHECK IF BUTTON IN CENTER FROM LEFT SIDE IS CLICKED AND IF THE NUMBER BEFORE THIS PAGE NUMBER
            // IS NOT THE FIRST PAGINATIONO BUTTON NUMBER
            if (activeButton.classList.contains('page-number--central--left') && this.currentProductsPage - 1 > 1) {
                // REMOVE ACTIVE CLASS FROM NEW PAGINATION BUTTON
                activeButton.classList.remove('active-page-number');

                // INDICATOR FOR CHECKING IF ACTIVE PAGINATION BUTTON WAS FOUND
                let indicator = false;

                // ADD ACTIVE CLASS TO THE BUTTON AFTER NEW PAGINATION BUTTON
                this.pageNumbersCentral.forEach(el => {
                    el.textContent = +el.textContent - 1;
                    if (+activeButton.textContent + 1 == el.textContent && !indicator) {
                        el.classList.add('active-page-number');
                        indicator = true;
                    }
                })

                // UPDATE CURRENT PAGE NUMBER + 1
                this.currentProductsPage = +activeButton.textContent + 1;

                // CHECK IF THE NUMBER OF BUTTON BEFORE THE OLD BUTTON IS IS NOT THE FIRST PAGINATION BUTTON NUMBER
                // IF SO HIDE FIRST PAGINATION DOTS AND IN ANY CASE SHOW LAST PAGINATION DOTS
                if (this.currentProductsPage - 2 === 1) {
                    this.pageDotsLast.style.display = 'inline-block';
                    this.pageDotsFirst.style.display = 'none';
                } else {
                    this.pageDotsLast.style.display = 'inline-block';
                }
            }

            // CHECK IF BUTTON IN CENTER FROM RIGHT SIDE IS CLICKED AND IF THE NUMBER AFTER THIS PAGE NUMBER
            // IS NOT THE LAST PAGINATIONO BUTTON NUMBER
            if (activeButton.classList.contains('page-number--central--right') && this.currentProductsPage + 1 < this.productsPages) {
                // REMOVE ACTIVE CLASS FROM NEW PAGINATION BUTTON
                activeButton.classList.remove('active-page-number');

                // INDICATOR FOR CHECKING IF ACTIVE PAGINATION BUTTON WAS FOUND
                let indicator = false;

                // ADD ACTIVE CLASS TO THE BUTTON BEFORE NEW PAGINATION BUTTON
                this.pageNumbersCentral.forEach(el => {
                    el.textContent = +el.textContent + 1;
                    if (activeButton.textContent == el.textContent && !indicator) {
                        el.classList.add('active-page-number');
                        indicator = true;
                    }
                })

                // UPDATE CURRENT PAGE NUMBER - 1
                this.currentProductsPage = +activeButton.textContent - 1;

                // CHECK IF THE NUMBER OF BUTTON AFTER THE OLD BUTTON IS IS NOT THE LAST PAGINATION BUTTON NUMBER
                // IF SO HIDE LAST PAGINATION DOTS AND IN ANY CASE SHOW FIRST PAGINATION DOTS
                if (this.currentProductsPage + 2 === this.productsPages) {
                    this.pageDotsFirst.style.display = 'inline-block';
                    this.pageDotsLast.style.display = 'none';
                } else {
                    this.pageDotsFirst.style.display = 'inline-block';
                }
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAGINATION FUNCTIONAL
        paginationFunc(e) {
            // REMOVE ACTIVE CLASSES FROM PREVIOUS PAGINATION BUTTONS
            this.pageNumbers.forEach(el => {
                el.classList.remove('active-page-number');
            })

            // ADD ACTIVE CLASS TO CLICKED PAGINATION BUTTON
            e.target.classList.add('active-page-number');

            // UPDATE CURRENT PAGE NUMBER
            this.currentProductsPage = +e.target.textContent;

            // CHECK IF BUTTON IN CENTER FROM LEFT SIDE IS CLICKED AND IF THE NUMBER BEFORE THIS PAGE NUMBER
            // IS NOT THE FIRST PAGINATIONO BUTTON NUMBER
            if (e.target.classList.contains('page-number--central--left') && this.currentProductsPage - 1 > 1) {
                // REMOVE ACTIVE CLASS TO CLICKED PAGINATION BUTTON
                e.target.classList.remove('active-page-number');

                // INDICATOR FOR CHECKING IF ACTIVE PAGINATION BUTTON WAS FOUND
                let indicator = false;

                // ADD ACTIVE CLASS TO THE BUTTON AFTER CLICKED PAGINATION BUTTON
                this.pageNumbersCentral.forEach(el => {
                    el.textContent = +el.textContent - 1;
                    if (+e.target.textContent + 1 == el.textContent && !indicator) {
                        el.classList.add('active-page-number');
                        indicator = true;
                    }
                })

                // UPDATE CURRENT PAGE NUMBER + 1
                this.currentProductsPage = +e.target.textContent + 1;

                // CHECK IF THE NUMBER OF BUTTON BEFORE THE OLD BUTTON IS IS NOT THE FIRST PAGINATION BUTTON NUMBER
                // IF SO HIDE FIRST PAGINATION DOTS AND IN ANY CASE SHOW LAST PAGINATION DOTS
                if (this.currentProductsPage - 2 === 1) {
                    this.pageDotsLast.style.display = 'inline-block';
                    this.pageDotsFirst.style.display = 'none';
                } else {
                    this.pageDotsLast.style.display = 'inline-block';
                }
            }

            // CHECK IF BUTTON IN CENTER FROM RIGHT SIDE IS CLICKED AND IF THE NUMBER AFTER THIS PAGE NUMBER
            // IS NOT THE LAST PAGINATIONO BUTTON NUMBER
            if (e.target.classList.contains('page-number--central--right') && this.currentProductsPage + 1 < this.productsPages) {
                // REMOVE ACTIVE CLASS TO CLICKED PAGINATION BUTTON
                e.target.classList.remove('active-page-number');

                // INDICATOR FOR CHECKING IF ACTIVE PAGINATION BUTTON WAS FOUND
                let indicator = false;

                // ADD ACTIVE CLASS TO THE BUTTON BEFORE CLICKED PAGINATION BUTTON
                this.pageNumbersCentral.forEach(el => {
                    el.textContent = +el.textContent + 1;
                    if (e.target.textContent == el.textContent && !indicator) {
                        el.classList.add('active-page-number');
                        indicator = true;
                    }
                })

                // UPDATE CURRENT PAGE NUMBER = 1
                this.currentProductsPage = +e.target.textContent - 1;

                // CHECK IF THE NUMBER OF BUTTON AFTER THE OLD BUTTON IS IS NOT THE LAST PAGINATION BUTTON NUMBER
                // IF SO HIDE LAST PAGINATION DOTS AND IN ANY CASE SHOW FIRST PAGINATION DOTS
                if (this.currentProductsPage + 2 === this.productsPages) {
                    this.pageDotsFirst.style.display = 'inline-block';
                    this.pageDotsLast.style.display = 'none';
                } else {
                    this.pageDotsFirst.style.display = 'inline-block';
                }
            }

            // CHECK IF CLICKED PAGINATION BUTTON IS THE FIRST BUTTON AND AMOUNT OF PAGES
            // IS MORE THAN 6 IF SO UPDATE CENTRAL PAGINATION BUTTONS NUMBERS & SHOW 
            // LAST PAGINATION DOTS & HIDE FIRST PAGINATION DOTS
            if (e.target.classList.contains('page-number--first') && this.productsPages >= 6) {
                this.pageDotsLast.style.display = 'inline-block';
                this.pageDotsFirst.style.display = 'none';
                this.pageNumberCentralLeft.textContent = 2;
                this.pageNumberCentralCentral.textContent = 3;
                this.pageNumberCentralRight.textContent = 4;
            }

            // CHECK IF CLICKED PAGINATION BUTTON IS THE LAST BUTTON AND AMOUNT OF PAGES
            // IS MORE THAN 6 IF SO UPDATE CENTRAL PAGINATION BUTTONS NUMBERS & SHOW 
            // FIRST PAGINATION DOTS & HIDE LAST PAGINATION DOTS
            if (e.target.classList.contains('page-number--last') && this.productsPages >= 6) {
                this.pageDotsFirst.style.display = 'inline-block';
                this.pageDotsLast.style.display = 'none';
                this.pageNumberCentralLeft.textContent = this.productsPages - 3;
                this.pageNumberCentralCentral.textContent =this.productsPages - 2;
                this.pageNumberCentralRight.textContent = this.productsPages - 1;
            }

            // UPDATE SLICE START & SLICE END
            this.sliceStart = (this.currentProductsPage - 1) * this.amountOfItemsInPage;
            this.sliceEnd = this.currentProductsPage * this.amountOfItemsInPage;

            // HIDE & SHOW PREV BUTTON
            if (this.sliceStart === 0) {
                this.$refs.prevButton.classList.add('disabled-button');
            } else {
                if (this.$refs.prevButton.classList.contains('disabled-button')) {
                    this.$refs.prevButton.classList.remove('disabled-button');
                }
            }

            // HIDE & SHOW NEXT BUTTON
            if (this.productsPages * this.amountOfItemsInPage === this.sliceEnd) {
                this.$refs.nextButton.classList.add('disabled-button');
            } else {
                if (this.$refs.nextButton.classList.contains('disabled-button')) {
                    this.$refs.nextButton.classList.remove('disabled-button');
                }
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // INIT OF PAGINATION
        paginationInit() {
            // REMOVE ACTIVE CLASSES FROM PREVIOUS PAGINATION BUTTONS
            this.pageNumbers.forEach(el => {
                el.classList.remove('active-page-number');
            })
            // ADD ACTIVE CLASS TO FIRST PAGINATION BUTTON
            this.pageNumberFirst.classList.add('active-page-number');

            // HIDE FIRST PAGINATION DOTS
            this.pageDotsFirst.style.display = 'none';


            // CHECK PRODUCTS PAGES AMOUNT & SHOW AND HIDE PAGINATION BUTTONS BASED ON THIS
            if (this.productsPages < 6) {
                this.pageDotsLast.style.display = 'none';
            } else {
                this.pageDotsLast.style.display = 'inline-block';
            }

            if (this.productsPages < 5) {
                this.pageNumberCentralRight.style.display = 'none';
            } else {
                this.pageNumberCentralRight.style.display = 'inline-block';
            }

            if (this.productsPages < 4) {
                this.pageNumberCentralCentral.style.display = 'none';
            } else {
                this.pageNumberCentralCentral.style.display = 'inline-block';
            }

            if (this.productsPages < 3) {
                this.pageNumberCentralLeft.style.display = 'none';
            } else {
                this.pageNumberCentralLeft.style.display = 'inline-block';
            }

            // REINIT ARRAYS BASED ON PAGINATION BUTTONS STYLE DISPLAY (CHECK HIDDEN OR NOT)
            this.pageNumbers = Array.from(document.querySelectorAll('.page-number')).filter(el => {
                return el.style.display !== 'none';
            })
            this.pageNumbersCentral = Array.from(document.querySelectorAll('.page-number--central')).filter(el => {
                return el.style.display !== 'none';
            });

            // REINIT PAGINATION BUTTONS NUMBERS
            this.pageNumberCentralLeft.textContent = 2;
            this.pageNumberCentralCentral.textContent = 3;
            this.pageNumberCentralRight.textContent = 4;
            this.pageNumberLast.textContent = this.productsPages;
            
            // REINIT BASIC VARIABLES
            this.sliceStart = 0;
            this.sliceEnd = 10;
            this.currentProductsPage = 1;

            // SHOW & HIDE PAGINATION BASED ON AMOUNT OF PRODUCTS
            if (this.finalArray.length > 0) {
                // IF FILTRATION WAS APPLIED
                if (this.finalArray.length <= this.amountOfItemsInPage) {
                    this.pagination.style.display = 'none';
                } else {
                    this.pagination.style.display = 'flex';
                }
            } else {
                // IF NO FILTRATION WAS APPLIED
                if (this.finalArray.length <= this.amountOfItemsInPage) {
                    this.pagination.style.display = 'none';
                } else {
                    this.pagination.style.display = 'flex';
                }
            }

            // HIDE PREV BUTTON
            if (!this.$refs.prevButton.classList.contains('disabled-button')) {
                this.$refs.prevButton.classList.add('disabled-button');
            }

            // SHOW NEXT BUTTON IF IT WAS HIDDEN
            if (this.$refs.nextButton.classList.contains('disabled-button')) {
                this.$refs.nextButton.classList.remove('disabled-button');
            }
        }
    },

    mounted () {
        // DOM
        this.pageNumbers = Array.from(document.querySelectorAll('.page-number'));
        this.pageNumbersCentral = Array.from(document.querySelectorAll('.page-number--central'));
        this.pageNumberFirst = document.querySelector('.page-number--first');
        this.pageNumberCentralLeft = document.querySelector('.page-number--central--left');
        this.pageNumberCentralCentral = document.querySelector('.page-number--central--central');
        this.pageNumberCentralRight = document.querySelector('.page-number--central--right');
        this.pageNumberLast = document.querySelector('.page-number--last');
        this.pageDotsFirst = document.querySelector('.dots--first');
        this.pageDotsLast = document.querySelector('.dots--last');
        this.pagination = document.querySelector('.pagination');

        this.paginationInit();
    },
}
</script>

<style lang="scss" scoped>

.left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    @media only screen and (max-width: 850px) {
        display: none !important;
    }

    span {
        display: inline-block;
        width: 20%;
        text-align: center;
    }

    .item-column-one,
    .item-column-two {
        width: 30%;
    }
}

.right {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    text-align: right;

    @media only screen and (max-width: 850px) {
        width: 100% !important;
        text-align: center;
        justify-content: center;
    }
}

.interventions {

    ::v-deep {
        .item-left {
            width: 75%;

            .item-column-one,
            .item-column-two {
                width: 40% !important;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;

        .item-column-one,
        .item-column-two {
            width: 40%;
        }
    }

    .right {
        width: 25%;
    }
}

.users {

    ::v-deep {
        .item-left {
            width: 70%;

            .item-column-one,
            .item-column-two {
                width: 28%;
            }

            .item-column-three {
                width: 34%;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70%;

        .item-column-one,
        .item-column-two {
            width: 28%;
        }

        .item-column-three {
            width: 34%;
        }
    }

    .right {
        width: 30%;
    }
}

.products {

    ::v-deep {
        .item-left {
            width: 65%;

            .item-column-one,
            .item-column-two,
            .item-column-three {
                width: 33% !important;
            }
        }

        .item-link {
            padding: .65rem 4.5rem;
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 65%;

        .item-column-one,
        .item-column-two,
        .item-column-three {
            width: 33%;
        }
    }

    .right {
        width: 35%;
    }
}

.transactions {

    ::v-deep {
        .item-left {
            width: 87%;

            .item-column-one,
            .item-column-two {
                width: 30% !important;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 87%;

        .item-column-one,
        .item-column-two {
            width: 30%;
        }
    }

    .right {
        width: 13%;
    }
}

.reports {

    ::v-deep {
        .item-left {
            width: 80%;

            .item-column-one,
            .item-column-two {
                width: 50% !important;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;

        .item-column-one,
        .item-column-two {
            width: 50%;
        }
    }

    .right {
        width: 20%;
    }
}

.deposits,
.withdrawals {

    ::v-deep {
        .item-left {
            width: 80%;

            .item-column-one,
            .item-column-two {
                width: 30% !important;
            }
            
            .item-column-four {
                padding-right: 1rem;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;

        .item-column-one,
        .item-column-two {
            width: 30%;
        }
            
        .item-column-four {
            padding-right: 1rem;
        }
    }

    .right {
        width: 20%;
    }
}

.applications {

    ::v-deep {
        .item-left {
            width: 80%;

            .item-column-one,
            .item-column-two {
                width: 35% !important;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;

        .item-column-one,
        .item-column-two {
            width: 35%;
        }
    }

    .right {
        width: 20%;
    }
}

.main-container {
    position: relative;

    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        user-select: none;

        @media only screen and (max-width: 850px) {
            margin-top: 3.5rem;
            flex-direction: column;
            justify-content: center;
        }
            
        .disabled-button {
            cursor: default !important;
            pointer-events: none !important;
            opacity: .7 !important;
        }

        .page-numbers {
            display: flex;

            @media only screen and (max-width: 850px) {
                margin-bottom: 2.5rem;
            }

            .active-page-number {
                background-color: $color-grey-2;
            }

            * {
                padding: .5rem 1.25rem;
                border-radius: 5px;
                user-select: none;
            }

            .page-number {
                cursor: pointer;

                @media only screen and (max-width: 850px) {
                    font-size: 2.2rem;
                    margin-right: 1rem;
                }
            }

            .dots--first {
                display: none;
            }
        }

        .buttons {


            button {
                font-weight: 500 !important;
                background-color: $color-primary;
                border-radius: 6px;
                padding: .75rem 4.5rem;
                transition: all .3s;
                text-align: center;
                transition: all .3s;

                &:hover {
                    background-color: darken($color-primary, 15%);
                }

                &:not(:last-of-type) {
                    margin-right: 1rem;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 1.8rem;
                    padding: 1rem 5.5rem;
                }
            }
        }
    }

    .no-items {
        width: 100%;
        background-color: $color-grey-dark;
        border-radius: 10px;
        padding: 2.5rem 2.5rem;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 2rem;

        @media only screen and (max-width: 850px) {
            white-space: normal;
            width: 45rem;
            margin: 0 auto;
            font-family: Rowdies;
            font-weight: 300 !important;
            font-size: 3.75rem !important;
        }
    }

    .title-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $color-grey-dark;
        border-radius: 10px;
        padding: 2.5rem 2.5rem;
        margin-bottom: 2rem;
        font-size: 1.6rem !important;

        @media only screen and (max-width: 850px) {
            width: 45rem;
            margin: 0 auto;
            margin-bottom: 2rem;
        }
    }

    // .items {
    //     display: flex;
    //     flex-direction: column;
    // }
}

.search-container {
    width: 15rem;
    margin-right: 1rem;
    position: relative;

    @media only screen and (max-width: 1050px) and (max-height: 520px) {
        width: 14rem;
    }

    @media only screen and (max-width: 900px) {
        width: 11rem;
    }

    @media only screen and (max-width: 850px) {
        width: 100%;
    }
}

.search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 1.75rem;
    height: 1.75rem;

    @media only screen and (max-width: 850px) {
        width: 2.5rem;
        height: 2.5rem;
    }
}

#searchInput {
    width: 100%;
    padding-left: 3rem;
    color: white;
    font-family: Montserrat;

    @media only screen and (max-width: 850px) {
        padding: 1rem 2rem;
        padding-left: 4.5rem;
        font-size: 2.2rem;
    }

    &::placeholder {
        color: $color-text-grey;
    }
}
</style>