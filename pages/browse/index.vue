<template>
    <div class="root">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="browse-page section section-page">
            <div class="content">
                <div ref="pageSequence" class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Browse</span>
                </div>
                <div class="order-sort-container">
                    <h2 class="title">Browse</h2>
                    <div @click="sortPrice" class="order-sort-button">
                        <span ref="sortPriceText">first {{sortPriceTextComp}}</span>
                        <img ref="sortPriceArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    </div>
                </div>
                <div class="main-content">
                    <div class="product-filtration">
                        <div class="product-types-container">
                            <h4 class="title">Product type</h4>
                            <ul @click="typeFiltration" class="types-list">
                                <li class="product-type">
                                    <span>Giftcards</span>
                                    <div class="indicator"></div>
                                </li>
                                <li class="product-type">
                                    <span>Accounts</span>
                                    <div class="indicator"></div>
                                </li>
                            </ul>
                        </div>
                        <div class="product-categories-container">
                            <ul @click="categoryFiltration" class="categories-list">
                                <li id="all" class="product-category active">
                                    <span>All</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="technology" class="product-category">
                                    <span>Technology</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="beauty" class="product-category">
                                    <span>Beauty</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="food" class="product-category">
                                    <span>Food</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="clothes" class="product-category">
                                    <span>Clothes</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="gaming" class="product-category">
                                    <span>Gaming</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="streaming" class="product-category">
                                    <span>Streaming</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="entertainment" class="product-category">
                                    <span>Entertainment</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="travel" class="product-category">
                                    <span>Travel</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="shopping" class="product-category">
                                    <span>Shopping</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                                <li id="wellness" class="product-category">
                                    <span>Wellness</span>
                                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="products-container">
                        <div ref="noProduct" class="no-products">
                            <h4 class="title">No products were found by your request</h4>
                            <div class="line"></div>
                        </div>
                        <div class="products-list">
                            <ProductCard 
                                v-for="card in filteredProducts"
                                :key="card.id + Math.random()"
                                :id="card.id"
                                :name="card.name"
                                :photo="card.photo"
                                :price="card.price"
                                :oldPrice="card.oldPrice"
                                :amountInStock="card.amountInStock"
                            />
                        </div>
                        <div ref="productsPagination" class="products-pagination">
                            <div ref="prevButton" @click="prevProductsPageButton" class="prev-button">
                                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                <span>prev</span>
                            </div>
                            <div class="page-numbers">
                                <span @click="pagination" class="page-number page-number--first">1</span>
                                <span class="dots dots--first">...</span>
                                <span @click="pagination" class="page-number page-number--central page-number--central--left">2</span>
                                <span @click="pagination" class="page-number page-number--central page-number--central--central">3</span>
                                <span @click="pagination" class="page-number page-number--central page-number--central--right">4</span>
                                <span class="dots dots--last">...</span>
                                <span @click="pagination" ref="lastPageNumber" class="page-number page-number--last">10</span>
                            </div>
                            <div ref="nextButton" @click="nextProductsPageButton" class="next-button">
                                <span ref="nextButtonSpanLoad" class="span-load">Load more</span>
                                <span class="span-next">next</span>
                                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortPriceText: 'expensive',
            filteredProductsArray: [],
            filteredTypeProductsArray: [],
            filteredCategoryProductsArray: [],
            productsArray: [],
            finalArray: [],
            isExist: false,
            amountOfProductsInPage: 9,
            sliceStart: 0,
            sliceEnd: 9,
            productsPages: 1,
            currentProductsPage: 1
        }
    },
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // LOCAL PRODUCTS ARRAY
        filteredProducts() {
            // CHECK IF THERE IS TYPE FILTRATION AND NO CATEGORY FILTRATION
            if (this.filteredTypeProductsArray.length > 0 && this.filteredCategoryProductsArray.length === 0) {
                this.filteredProductsArray = this.filteredTypeProductsArray;
            } 
            
            // CHECK IF THERE IS CATEGORY FILTRATION
            if (this.filteredCategoryProductsArray.length > 0) {
                this.filteredProductsArray = this.filteredCategoryProductsArray;
            }

            // CHECK IF THERE IS FILTERED ARRAY
            if (this.filteredProductsArray.length > 0) {
                this.finalArray = this.filteredProductsArray;
            } else {
                this.finalArray = this.productsArray;
            }

            // CALC PAGES AMOUNT
            this.productsPages = Math.ceil(this.finalArray.length / this.amountOfProductsInPage);

            // LIMIT AMOUNT OF PRODUCTS ON PAGE
            return this.finalArray.slice(this.sliceStart, this.sliceEnd);
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORT PRICE TEXT
        sortPriceTextComp() {
            return this.sortPriceText;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MAIN SORT FUNCTION
        sortPrice() {
            if (this.sortPriceText === 'expensive') {
                // CHANGE SORT TEXT AND ARROW STYLE
                this.sortPriceText = 'cheap';
                this.$refs.sortPriceArrow.style.transform = 'rotate(0)';

                // SORT ARRAYS
                this.filteredProductsArray?.sort(this.fromCheap)
                this.productsArray.sort(this.fromCheap)
            } else if (this.sortPriceText === 'cheap') {
                // CHANGE SORT TEXT AND ARROW STYLE
                this.sortPriceText = 'expensive';
                this.$refs.sortPriceArrow.style.transform = 'rotate(-180deg)';

                // SORT ARRAYS
                this.filteredProductsArray?.sort(this.fromExpensive)
                this.productsArray.sort(this.fromExpensive)
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORT FROM EXPENSIVE
        fromExpensive( a, b ) {
            if ( a.price < b.price ) {
                return 1;
            }

            if ( a.price > b.price ) {
                return -1;
            }

            return 0;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORT FROM CHEAP
        fromCheap( a, b ) {
            if ( a.price < b.price ) {
                return -1;
            }

            if ( a.price > b.price ) {
                return 1;
            }

            return 0;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TYPE FILTRATION FUNCTIONAL
        typeFiltration(e) {
            // SELECT THE CLICKED PRODUCT TYPE
            const parent = e.target?.closest('.product-type');

            // SELECT THE CLICKED PRODUCT TYPE SQUARE
            const indicator = parent?.querySelector('.indicator');

            // TAKE TYPE FROM PRODUCT TYPE TEXT CONTENT & CONVERT IT TO LOWERCASE
            this.type = parent?.querySelector('span')?.textContent.toLowerCase();


            if (this.type && indicator) {
                // CREATE ARRAY OF FILTERED BY TYPE PRODUCTS
                this.filteredTypeProductsArray = this.productsArray.filter(el => {
                    return this.type.includes(el.type);
                })

                // IF PREVIOUS TYPE EQUAL TO NEW TYPE - TURN OFF THE TYPE FILTRATION
                // AND REMOVE INDICATOR ACTIVE CLASS
                if (this.prevType === this.type) {
                    if (indicator.classList.contains('active')) {
                        indicator.classList.remove('active');
                        this.filteredTypeProductsArray =  this.productsArray;
                    } else {
                        indicator.classList.add('active');
                    }
                } else {
                    this.typeIndicators.forEach(el => {
                        el.classList.remove('active');
                    })

                    indicator.classList.add('active');
                }

                // IF FILTERED PRODUCTS ARRAY IS LESS THAN AMOUNT OF PRODUCTS IN ONE PAGE =
                // HIDE PAGINATION
                if (this.filteredProducts.length < this.amountOfProductsInPage) {
                    this.productsPagination.style.display = 'none';
                } else {
                    this.productsPagination.style.display = 'flex';
                    
                    if (window.outerWidth < 850) {
                        this.$refs.nextButtonSpanLoad.textContent = 'Load more';
                        this.$refs.nextButton.classList.remove('button-to-top');
                    }
                }

                // UPDATE VARIABLES
                this.prevType = this.type;
                this.sliceStart = 0;
                
                // CHANGE PARAMETERS FOR MOBILE & DESKTOP VERSIONS
                if (window.outerWidth > 850) {
                    this.sliceEnd = 9;
                    this.paginationInit();
                } else {
                    this.sliceEnd = 20;
                }
            }

            // IF CATEGORY FILTRATION WAS THERE BEFORE TYPE FILTRATION =
            // CALL CATEGORY FUNCTIONAL FUNCTION
            if (this.category) {
                this.categoryFiltrationPart();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CATEGORY FILTRATION FUNCTIONAL
        categoryFiltrationPart() {
            // IF TYPE FILTRATION IS THERE - THE BASE ARRAY FOR CATEGORY FILTRATION
            // IS FILTERED TYPE PRODUCTS ARRAY
            if (this.filteredTypeProductsArray.length > 0) {
                this.filteredCategoryProductsArray = this.filteredTypeProductsArray.filter(el => {
                    return this.category === el.category;
                })
            } else {
                this.filteredCategoryProductsArray = this.productsArray.filter(el => {
                    return this.category === el.category;
                })
            }

            // IF FILTERED CATEGORY ARRAY IS EMPTY - SHOW MESSAGE & SHOW BASE ARRAY
            if (this.filteredCategoryProductsArray.length === 0 && this.category !== 'all') {
                this.$refs.noProduct.style.display = 'block';
                this.filteredProductsArray = this.filteredTypeProductsArray;
            } else {
                this.$refs.noProduct.style.display = 'none';
            }

            // IF ALL BUTTON IS CLICKED = SHOW BASE ARRAY
            if (this.category === 'all') {
                if (this.filteredTypeProductsArray.length === 0) {
                    this.filteredProductsArray = this.productsArray;
                } else {
                    this.filteredProductsArray = this.filteredTypeProductsArray;
                }
            }

            // IF FILTERED PRODUCTS ARRAY IS LESS THAN AMOUNT OF PRODUCTS IN ONE PAGE =
            // HIDE PAGINATION
            if (this.filteredProducts.length < this.amountOfProductsInPage) {
                this.productsPagination.style.display = 'none';
            } else {
                this.productsPagination.style.display = 'flex';

                if (window.outerWidth < 850) {
                    this.$refs.nextButtonSpanLoad.textContent = 'Load more';
                    this.$refs.nextButton.classList.remove('button-to-top');
                }
            }

            // UPDATE VARIABLES
            this.sliceStart = 0;
                
            // CHANGE PARAMETERS FOR MOBILE & DESKTOP VERSIONS
            if (window.outerWidth > 850) {
                this.sliceEnd = 9;
                this.paginationInit();
            } else {
                this.sliceEnd = 20;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CATEGORY FILTRATION (CATEGORY SELECTION & CATEGORY ACTIVE CLASSES MANIPULATION)
        categoryFiltration(e) {
            // SELECT THE CLICKED PRODUCT CATEGORY
            const parent = e.target?.closest('.product-category');

            // TAKE CATEGORY FROM PRODUCT CATEGORY TEXT CONTENT & CONVERT IT TO LOWERCASE
            this.category = parent?.querySelector('span')?.textContent.toLowerCase();


            if (this.category) {
                // REMOVE ACTIVE CLASSES FROM ALL CATEGORIES
                this.categories.forEach(el => {
                    el.classList.remove('active');
                })

                // ADD ACTIVE CLASS TO THE CLICKED PRODUCT CATEGORY
                parent.classList.add('active');

                this.categoryFiltrationPart();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // NEXT BUTTON FUNCTIONAL
        nextProductsPageButton() {
            // MAXIMAL AMOUNT OF PRODUCTS FOR ALL PAGES
            const maxProductsItems = this.productsPages * this.amountOfProductsInPage;

            // IF MOBILE AND CONDITION IS TRUE - SCROLL OT THE TOP OF PAGE ON CLICK
            if (window.outerWidth < 850 && maxProductsItems === this.sliceEnd) {
                this.$refs.pageSequence.scrollIntoView({
                    behavior: "smooth",
                });
            }

            if (maxProductsItems !== this.sliceEnd) {
                // SHOW NEXT BUTTON IF IT WAS HIDDEN
                if (this.$refs.nextButton.style.display === 'none') {
                    this.$refs.nextButton.style.display = 'flex';
                }

                // SHOW PREV BUTTON IF IT WAS HIDDEN
                if (this.$refs.prevButton.style.display === 'none') {
                    this.$refs.prevButton.style.display = 'flex';
                }
                
                // IF NOT MOBILE UPDATE SLICE START VALUE
                if (window.outerWidth > 850) {
                    this.sliceStart += this.amountOfProductsInPage;
                }
                
                // UPDATE SLICE END VALUE AND CURRENT PAGE NUMBER
                this.sliceEnd += this.amountOfProductsInPage;
                this.currentProductsPage += 1;

                // IF NOT MOBILE AND THE LAST PAGE HIDE NEXT BUTTON
                if (window.outerWidth > 850 && maxProductsItems === this.sliceEnd) {
                    this.$refs.nextButton.style.display = 'none';
                }

                // IF MOBILE AND THE END OF PAGE CHANGE LOAD MORE BUTTON
                if (window.outerWidth <= 850 && maxProductsItems === this.sliceEnd) {
                    this.$refs.nextButtonSpanLoad.textContent = 'Go to the top';
                    this.$refs.nextButton.classList.add('button-to-top');
                }
            }
                
            this.paginationOnButtons();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PREV BUTTON FUNCTIONAL
        prevProductsPageButton() {
            if (this.sliceStart !== 0) {
                // SHOW PREV BUTTON IF IT WAS HIDDEN
                if (this.$refs.prevButton.style.display === 'none') {
                    this.$refs.prevButton.style.display = 'flex';
                }
                
                // SHOW NEXT BUTTON IF IT WAS HIDDEN
                if (this.$refs.nextButton.style.display === 'none') {
                    this.$refs.nextButton.style.display = 'flex';
                }

                // UPDATE SLICE START & SLICE END VALUE AND CURRENT PAGE NUMBER
                this.sliceStart -= this.amountOfProductsInPage;
                this.sliceEnd -= this.amountOfProductsInPage;
                this.currentProductsPage -= 1;

                // HIDE PREV BUTTON ON THE FIRST PAGE
                if (this.sliceStart === 0) {
                    this.$refs.prevButton.style.display = 'none';
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
        pagination(e) {
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
            this.sliceStart = (this.currentProductsPage - 1) * this.amountOfProductsInPage;
            this.sliceEnd = this.currentProductsPage * this.amountOfProductsInPage;

            // HIDE & SHOW PREV BUTTON
            if (this.sliceStart === 0) {
                this.$refs.prevButton.style.display = 'none';
            } else {
                if (this.$refs.prevButton.style.display === 'none') {
                    this.$refs.prevButton.style.display = 'flex';
                }
            }

            // HIDE & SHOW NEXT BUTTON
            if (this.productsPages * this.amountOfProductsInPage === this.sliceEnd) {
                this.$refs.nextButton.style.display = 'none';
            } else {
                if (this.$refs.nextButton.style.display === 'none') {
                    this.$refs.nextButton.style.display = 'flex';
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
            this.sliceEnd = 9;
            this.currentProductsPage = 1;

            // SHOW & HIDE PAGINATION BASED ON AMOUNT OF PRODUCTS
            if (this.filteredProductsArray.length > 0) {
                // IF FILTRATION WAS APPLIED
                if (this.filteredProductsArray.length <= this.amountOfProductsInPage) {
                    this.productsPagination.style.display = 'none';
                } else {
                    this.productsPagination.style.display = 'flex';
                }
            } else {
                // IF NO FILTRATION WAS APPLIED
                if (this.productsArray.length <= this.amountOfProductsInPage) {
                    this.productsPagination.style.display = 'none';
                } else {
                    this.productsPagination.style.display = 'flex';
                }
            }

            // HIDE PREV BUTTON
            if (this.$refs.prevButton.style.display === 'flex') {
                this.$refs.prevButton.style.display = 'none';
            }

            // SHOW NEXT BUTTON IF IT WAS HIDDEN
            if (this.$refs.nextButton.style.display === 'none') {
                this.$refs.nextButton.style.display = 'flex';
            }
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // LOAD PRODUCTS AND SORT THEM
    created () {
        // PRODUCTS OBJECT
        const productsObject = this.$store.state.products.products;

        // CONVERT PRODUCTS OBJECT TO ARRAY
        const productsObjectToArray = Object.entries(productsObject);

        // ADD PRODUCTS FROM PRODUCTS ARRAY TO LOCAL ARRAY
        productsObjectToArray.forEach(([key, value]) => {
            value.forEach(item => {
                this.productsArray.push(item);
            })
        });
        
        // SORT LOCAL ARRAY
        this.productsArray.sort(this.fromExpensive);
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
        this.typeIndicators = Array.from(document.querySelectorAll('.indicator'));
        this.categories = Array.from(document.querySelectorAll('.product-category'));
        this.productsPagination = document.querySelector('.products-pagination');

        // FIRST & LAST PAGINATION BUTTONS NUMBER
        this.pageNumberFirst.textContent = 1;
        this.pageNumberLast.textContent = this.productsPages;


        // FIRST PAGINATION BUTTON DISPLAY TO NONE
        this.$refs.prevButton.style.display = 'none';
        
        // CHECK AMOUNT OF PRODUCT PAGES & SHOW OR HIDE PAGINATION
        if (this.productsPages < 2) {
            this.productsPagination.style.display = 'none';
        } else {
            this.productsPagination.style.display = 'flex';
        }

        // PAGINATION INIT ON LOAD
        if (window.outerWidth > 850) {
            this.paginationInit();
        }

        // CHANGE PARAMETERS FOR MOBILE VERSION
        if (window.outerWidth < 850) {
            this.amountOfProductsInPage = 20;
            this.sliceEnd = 20;
        }


        // RESIZE
        let prevWidth = window.outerWidth;

        window.addEventListener('resize', () => {
            if (prevWidth >= 850 && window.outerWidth < 850 ||
            prevWidth <= 850 && window.outerWidth > 850) {
                if (window.outerWidth < 850) {
                    this.amountOfProductsInPage = 20;
                    this.sliceEnd = 20;
                } else {
                    this.amountOfProductsInPage = 9;
                    this.sliceEnd = 9;
                    this.paginationInit();
                }
            }
            prevWidth = window.outerWidth;
        })
    },
}
</script>

<style lang='scss' scoped>
.page-sequence {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    a {
        color: $color-text-grey-dark;
        transition: all .3s;
            
        @media only screen and (max-width: 850px) {
            font-size: 1.6rem;
        }

        &:hover {
            color: $color-text-grey;
        }
    }

    span {
        color: white;
    }

    .arrow {
        transform: rotate(-90deg);
        margin: 0 1rem;
        width: 1.25rem;
    }
}

.browse-page {

    .active-page-number {
        background-color: $color-grey-2;
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

        .order-sort-container {
            position: absolute;
            top: 0;
            right: 0;

            @media only screen and (max-width: 850px) {
                position: static;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .title {
                font-size: 2.6rem;
                text-transform: uppercase;

                @media only screen and (min-width: 850px) {
                    display: none;
                }
            }

            .order-sort-button {
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: all .3s;
            
                @media only screen and (max-width: 850px) {
                    font-size: 1.8rem;
                }

                &:hover {
                    color: $color-text-grey;
                }

                .arrow {
                    transform: rotate(-180deg);
                    width: 1.25rem;
            
                    @media only screen and (max-width: 850px) {
                        width: 1.75rem;
                    }
                }

                span {
                    padding-right: 1rem;
                    user-select: none;
                }
            }
        }

        .main-content {
            display: flex;
            
            @media only screen and (max-width: 850px) {
                flex-direction: column;
            }

            .product-filtration {
                color: $color-text-grey;
                width: 20rem !important;
                margin-top: 50px;
                margin-right: 14rem;
            
                @media only screen and (max-width: 1100px) {
                    margin-right: 10rem;
                }

                @media only screen and (max-width: 850px) {
                    margin: 0;
                    margin-bottom: 4rem;
                    width: 100% !important;

                    display: flex;
                    flex-direction: column;
                }

                .product-types-container {
                    width: 20rem !important;

                    @media only screen and (max-width: 850px) {
                        width: 100% !important;
                        order: 1;
                    }

                    .title {
                        margin-bottom: 1.5rem;

                        @media only screen and (max-width: 850px) {
                            font-size: 2rem;
                            margin-bottom: 2.25rem;
                        }
                    }

                    .types-list {
                        margin-bottom: 2rem;
                        padding: 0 1.75rem;

                        @media only screen and (max-width: 850px) {
                            display: flex;
                            padding: 0;
                        }

                        .product-type {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            cursor: pointer;

                            @media only screen and (max-width: 850px) {
                                font-size: 1.9rem;
                                padding: 1rem 3.5rem;
                                border-radius: 50px;
                                background-color: $color-grey-2;
                            }

                            &:not(:last-of-type) {
                                margin-bottom: .8rem;

                                @media only screen and (max-width: 850px) {
                                    margin-bottom: 0;
                                    margin-right: 2rem;
                                }
                            }

                            .active {
                                background-color: white !important;
                            }

                            .indicator {
                                border: 1.5px solid white;
                                width: 1.2rem;
                                height: 1.2rem;
                                border-radius: 3px;
                                transition: all .2s;

                                @media only screen and (max-width: 850px) {
                                    margin-left: 2rem;
                                    width: 1.75rem;
                                    height: 1.75rem;
                                }
                            }
                        }
                    }
                }

                .product-categories-container {
                    background-color: $color-grey-dark;
                    border-radius: 2rem;
                    padding: 1.75rem .8rem 2.1rem;
                    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .5);


                    @media only screen and (max-width: 1300px) {
                        border-radius: 20px;
                        order: 0;
                    }

                    @media only screen and (max-width: 850px) {
                        background: none;
                        box-shadow: none;
                        padding: 0;
                        margin: 2rem 0 3.5rem;
                        width: 100%;
                        overflow-x: scroll;
                        -webkit-mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
                        mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
                        &::-webkit-scrollbar {
                            display: none;
                        }
                    }

                    .categories-list {

                        @media only screen and (max-width: 850px) {
                            display: flex;
                            width: 100%;
                        }

                        .active {
                            color: white !important;
                            border-bottom: 1px solid white !important;

                            @media only screen and (max-width: 850px) {
                                border-bottom: none !important;
                                background-color: $color-grey-2 !important;
                            }

                            .arrow {
                                opacity: 1 !important;
                            }
                        }


                        .product-category {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            cursor: pointer;
                            padding: 0 .9rem .9rem;
                            transition: all .3s;
                            border-bottom: 1px solid transparent;

                            @media only screen and (max-width: 850px) {
                                padding: 1rem 3.5rem;
                                border-radius: 50px;
                                font-size: 1.9rem;
                                color: white;
                            }

                            &:not(:last-of-type) {
                                margin-bottom: 1.5rem;
                                border-bottom: 1px solid $color-grey-2;

                                @media only screen and (max-width: 850px) {
                                    border-bottom: none;
                                    margin-bottom: 0;
                                }
                            }

                            &:hover {
                                color: white;
                                border-bottom: 1px solid white;

                                @media only screen and (max-width: 850px) {
                                    border-bottom: none;
                                    background-color: $color-grey-2;
                                }
                            }

                            &:hover .arrow {
                                opacity: 1;
                            }

                            .arrow {
                                transform: rotate(-90deg);
                                width: 1rem;
                                opacity: 0;
                                transition: all .3s;

                                @media only screen and (max-width: 850px) {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }


            .products-container {
                .no-products {
                    width: 45rem;
                    display: none;

                    .title {
                        font-size: 2.75rem;
                        width: 35rem;
                    }

                    .line {
                        width: 100%;
                        background-color: $color-grey-2;
                        height: 2px;
                        border-radius: 100px;
                        margin: 2rem 0;
                    }
                }

                .products-list {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-column-gap: 3rem;
                    grid-row-gap: 3rem;
                    margin-bottom: 4.5rem;
                    width: 100%;

                    @media only screen and (max-width: 850px) {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .products-pagination {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    
                    @media only screen and (max-width: 850px) {
                        justify-content: center;
                    }

                    .page-numbers {
                        display: flex;
                        @include abs-center;
                        
                        @media only screen and (max-width: 850px) {
                            display: none;
                        }

                        * {
                            padding: .5rem 1.25rem;
                            border-radius: 5px;
                            user-select: none;
                        }

                        .page-number {
                            cursor: pointer;
                        }

                        .dots--first {
                            display: none;
                        }
                    }

                    .button-to-top {
                        .span-load {
                            @media only screen and (max-width: 850px) {
                                order: 1 !important;
                            }
                        }

                        .arrow {
                            @media only screen and (max-width: 850px) {
                                transform: rotate(180deg) !important;
                                margin-top: 0 !important;
                                margin-bottom: .5rem !important;
                                order: 0 !important;
                            }
                        }
                    }

                    .next-button,
                    .prev-button {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        transition: all .3s;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);

                        @media only screen and (max-width: 850px) {
                            padding: 1rem 3.5rem;
                            background-color: $color-grey-2;
                            border-radius: 50px;
                            flex-direction: column;
                        }

                        &:hover {
                            color: $color-text-grey;
                        }

                        span {
                            user-select: none;
                        }

                        .span-next {
                            @media only screen and (max-width: 850px) {
                                display: none;
                            }
                        }

                        .span-load {
                            @media only screen and (min-width: 850px) {
                                display: none;
                            }
                        }

                        .arrow {
                            transform: rotate(-90deg);
                            width: 1rem;
                            margin-left: 1rem;
                            margin-bottom: -2px;
                            
                            @media only screen and (max-width: 850px) {
                                transform: rotate(0);
                                width: 1.5rem;
                                margin-left: 0;
                                margin-bottom: 0;
                                margin-top: .5rem;
                            }
                        }
                    }

                    .next-button {
                        right: 0;

                        @media only screen and (max-width: 850px) {
                            right: 50%;
                            transform: translate(50%, -50%);
                        }
                    }

                    .prev-button {
                        left: 0;

                        @media only screen and (max-width: 850px) {
                            display: none !important;
                        }

                        .arrow {
                            transform: rotate(90deg);
                            width: 1rem;
                            margin-right: 1rem;
                            margin-bottom: -2px;
                        }
                    }
                }
            }            
        }
    }
}
</style>