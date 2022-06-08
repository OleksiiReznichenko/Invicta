<template>
    <div class="relative-container">
        <img ref="cornerLight" src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="product-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <nuxt-link to="/browse">Browse</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>{{product.name}}</span>
                </div>
                <div class="main-content">
                    <div class="product">
                        <img :src="product.photoBig" alt="Product photo" class="product-photo">
                        <div class="product-name-container">
                            <h1 class="product-name">{{product.name}}</h1>
                            <div class="product-buttons">
                                <nuxt-link :to="'/reportProduct/' + product.id" class="product-button" id="report-button">
                                    <img src="@/assets/svg/report.svg" alt="Report" class="product-button-icon">
                                </nuxt-link>
                                <div @click="shareEvent" class="product-button" id="shareButton">
                                    <img src="@/assets/svg/upload.svg" alt="Share" class="product-button-icon">
                                </div>
                            </div>
                            <div id="shareDropdown">
                                <h3 class="title">Share</h3>
                                <ul class="share-list">
                                    <div class="item" data-sharer="telegram" :data-title="product.name" :data-url="urlComp">
                                        <img src="@/assets/svg/telegramProductPage.svg" alt="Telegram" class="icon">
                                        <span>Telegram</span>
                                    </div>
                                    <div class="item" data-sharer="twitter" :data-title="product.name" :data-url="urlComp">
                                        <img src="@/assets/svg/twitter.svg" alt="Twitter" class="icon">
                                        <span>Twitter</span>
                                    </div>
                                    <div class="item" data-sharer="facebook" :data-title="product.name" :data-url="urlComp">
                                        <img src="@/assets/svg/facebook.svg" alt="Facebook" class="icon">
                                        <span>Facebook</span>
                                    </div>
                                    <div class="item" data-sharer="whatsapp" :data-title="product.name" :data-url="urlComp">
                                        <img src="@/assets/svg/whatsapp.svg" alt="Whatsapp" class="icon">
                                        <span>Whatsapp</span>
                                    </div>
                                    <div @click="copyLink" class="item">
                                        <img src="@/assets/svg/bindIcon.svg" alt="Copy link" class="icon">
                                        <span>Copy link</span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div class="product-border-info">
                            <span class="border-text-green product-discount">save {{discountComp}}%</span>
                            <span class="border-text-blue product-amount-in-stock">{{product.amountInStock}} in stock</span>
                            <span class="border-text-blue product-country">{{product.country}}</span>
                        </div>
                        <div class="product-description-container info-container">
                            <h4 class="product-description-title info-title">Description</h4>
                            <p class="product-description-text">
                                {{product.description}}
                            </p>
                        </div>
                        <div class="product-warranty-eta-container">
                            <div class="product-warranty-container info-container">
                                <h4 class="product-warranty-title info-title">Warranty</h4>
                                <p class="product-warranty-text">
                                    {{product.warranty}}
                                </p>
                            </div>
                            <div class="product-eta-container info-container">
                                <h4 class="product-eta-title info-title">ETA</h4>
                                <p class="product-eta-text">
                                    {{product.eta}}
                                </p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="product-payment-container info-container">
                            <h4 class="product-payment-title info-title">Payment</h4>
                            <div class="product-payment-methods">
                                <div class="product-payment-method">
                                    <img src="@/assets/img/ethereumCoin.png" alt="Ethereum coin">
                                    <span>Ethereum</span>
                                </div>
                                <div class="product-payment-method">
                                    <img src="@/assets/img/bitcoinCoin.png" alt="Bitcoin coin">
                                    <span>Bitcoin</span>
                                </div>
                                <div class="product-payment-method">
                                    <img src="@/assets/img/litecoinCoin.png" alt="Litecoin coin">
                                    <span>Litecoin</span>
                                </div>
                                <div class="product-payment-method">
                                    <img src="@/assets/img/creditCard.png" alt="Account balance">
                                    <span>Account balance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="payment-form">
                        <div class="user-info">
                            <nuxt-link :to="'/users/' + seller.username">
                                <img :src="seller.avatar" alt="Avatar" class="user-avatar">
                            </nuxt-link>
                            <div class="user-right">
                                <p class="user-text">Purchasing from <nuxt-link :to="'/users/' + seller.username" class="user-name">{{seller.username}}</nuxt-link> <span v-if="product.oldPrice" class="percent">at {{percentOfPrice}}%</span></p>
                                <span class="cards-amount">£ of cards</span>
                            </div>
                        </div>
                        <form @submit.prevent action="#" class="form">
                            <div class="input-group">
                                <input ref="amountInput" id="amountInput" v-model="amountToBuy" class="full-width" type="number" placeholder="Amount">
                            </div>
                            <div v-if="product.type === 'giftcard'" class="select">
                                <input ref="cardsDropdownOpener" id="cardsDropdownOpener" @click="toggleCardsDropdown" v-model="cards" class="full-width" type="text" placeholder="Select the cards" readonly>
                                <img ref="cardsDropdownArrow" id="cardsDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                <div ref="cardsSelectionDropdown" id="cardsSelectionDropdown" class="options">
                                    <div @click="selectCardsOption('Card 1')" class="option">Card 1</div>
                                    <div @click="selectCardsOption('Card 2')" class="option">Card 2</div>
                                    <div @click="selectCardsOption('Card 3')" class="option">Card 3</div>
                                    <div @click="selectCardsOption('Card 4')" class="option">Card 4</div>
                                </div>
                            </div>
                            <div v-if="product.type === 'account'" class="select">
                                <input ref="accountsDropdownOpener" id="accountsDropdownOpener" @click="toggleAccountsDropdown" v-model="accounts" class="full-width" type="text" placeholder="Select the accounts" readonly>
                                <img ref="accountsDropdownArrow" id="accountsDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                <div ref="accountsSelectionDropdown" id="accountsSelectionDropdown" class="options">
                                    <div @click="selectAccountsOption('Account 1')" class="option">Account 1</div>
                                    <div @click="selectAccountsOption('Account 2')" class="option">Account 2</div>
                                    <div @click="selectAccountsOption('Account 3')" class="option">Account 3</div>
                                    <div @click="selectAccountsOption('Account 4')" class="option">Account 4</div>
                                </div>
                            </div>
                            <div class="select">
                                <input ref="paymentsDropdownOpener" id="paymentsDropdownOpener" @click="togglePaymentsDropdown" v-model="paymentMethod" class="full-width" type="text" placeholder="Payment Methods" readonly>
                                <img ref="paymentsDropdownArrow" id="paymentsDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                <div ref="paymentsSelectionDropdown" id="paymentsSelectionDropdown" class="options">
                                    <div @click="selectPaymentsOption('Payment method 1')" class="option">Payment method 1</div>
                                    <div @click="selectPaymentsOption('Payment method 2')" class="option">Payment method 2</div>
                                    <div @click="selectPaymentsOption('Payment method 3')" class="option">Payment method 3</div>
                                    <div @click="selectPaymentsOption('Payment method 4')" class="option">Payment method 4</div>
                                </div>
                            </div>
                            <div class="button-price-container">
                                <nuxt-link v-if="!isLoggedIn" to="/login" class="login-button btn btn-gradient"><span>Buy</span></nuxt-link>
                                <button v-if="isLoggedIn" @click="buy" @submit="buy" class="login-button btn btn-gradient"><span>Buy</span></button>
                                <div class="prices">
                                    <span v-if="product.oldPrice" class="old-price">${{oldPrice}}</span>
                                    <h3 class="new-price">${{price}}</h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="recommended-products">
                    <div class="title-container">
                        <h2 class="title">Recommend for you</h2>
                        <div class="line"></div>
                    </div>
                    <ProductsLine :exception='$route.params.id' />
                </div>
            </div>

            <img src="@/assets/img/gridProductPage.png" alt="Image composition" class="image-composition">

            <div id="linkCopiedNotification">
                <h3 class="title">Link copied succefully</h3>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['isProductExist'],
    data() {
        return {
            paymentMethod: '',
            cards: '',
            accounts: '',
            copyLinkIndicator: true,
            url: '',
            sellerFound: {},
            amountToBuy: 1
        }
    },
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.$store.state.user;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY SHOPPING ITEMS ARRAY
        shoppingItems() {
            let myShoppingItemsArray = [];
            this.$store.state.users.users.find(el => {
                if (el.id === this.user.id) {
                    myShoppingItemsArray = el.shoppingItems;
                }
            })
            return myShoppingItemsArray;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DISCOUNT
        discountComp() {
            return this.discount;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PERCENT OF THE PRICE AFTER DISCOUNT
        percentOfPrice() {
            return 100 - this.discount;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAGE URL
        urlComp() {
            return this.url;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER SELLER
        seller() {
            return this.sellerFound;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRICE
        price() {
            if (this.amountToBuy > 1) {
                return (this.product.price * this.amountToBuy).toFixed(2);
            } else {
                return this.product.price;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // OLD PRICE
        oldPrice() {
            if (this.amountToBuy > 1) {
                return (this.product.oldPrice * this.amountToBuy).toFixed(2);
            } else {
                return this.product.oldPrice;
            }
        },
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // IF SELLER ID CHANGES = CHANGE SELLER
    watch: {
        'product.sellerId'() {
            this.sellerFound = this.$store.state.users.users.find(el => {
                if (el.id === this.product.sellerId) {
                    return el;
                }
            })
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BUY 
        buy() {
            // IF AMOUNT IS LESS THAN 1 - SHOW ERROR
            if (this.$refs.amountInput.value < 1) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You can\'t buy less than 1 item', 
                    isBad: true
                });
                return;
            }
            
            // IF AMOUNT IS MORE THAN AMOUNT OF ITEMS IN STOCK - SHOW ERROR
            if (this.$refs.amountInput.value > this.product.amountInStock) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You can\'t buy more items than there are in stock', 
                    isBad: true
                });
                return;
            }

            // IF AMOUNT IS DECIMAL - SHOW ERROR
            if (this.$refs.amountInput.value.includes('.')) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'The amount can\'t be a decimal', 
                    isBad: true
                });
                return;
            }

            if (this.product.type === 'giftcard') {
                // IF CARDS DROPDOWN VALUE IS NOT SELECTED - SHOW ERROR
                if (!this.cardsDropdownOpener.value) {
                    this.$store.dispatch('showNotificationWindow', {
                        text: 'You need to select cards', 
                        isBad: true
                    });
                    return;
                }
            }

            if (this.product.type === 'account') {
                // IF ACCOUNTS DROPDOWN VALUE IS NOT SELECTED - SHOW ERROR
                if (!this.accountsDropdownOpener.value) {
                    this.$store.dispatch('showNotificationWindow', {
                        text: 'You need to select accounts', 
                        isBad: true
                    });
                    return;
                }
            }
            
            // IF PAYMENT DROPDOWN VALUE IS NOT SELECTED - SHOW ERROR
            if (!this.paymentsDropdownOpener.value) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to select payment method', 
                    isBad: true
                });
                return;
            }
            
            // IF YOU TRY TO BUY YOUR PRODUCT - SHOW ERROR
            if (this.product.sellerId === this.user.id) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You can\'t buy product from yourself', 
                    isBad: true
                });
                return;
            }

            let alreadyAdded = false;

            // CHECK IF PRODUCT IS ALREADY ADDED TO SHOPPING LIST
            this.shoppingItems.find(el => {
                if (el.productId === this.product.id) {
                    alreadyAdded = true;
                }
            })
            
            // IF PRODUCT IS ALREADY ADDED TO SHOPPING LIST - SHOW ERROR
            if (alreadyAdded) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This product is already in your shopping items', 
                    isBad: true
                });
                return;
            }

            // ON SUCCES - SHOW SUCCESS WINDOW
            this.$store.dispatch('showNotificationWindow', {
                text: 'This product has been added to your shopping list', 
                isBad: false
            });

            // SHOPPING ITEM AND ORDER OBJECT
            const orderShoppingItemObject = {
                id: (this.$_uid * Date.now()).toString(),
                productId: this.product.id,
                productTitle: this.product.name,
                productPhoto: this.product.photo,
                price: this.amountToBuy * this.product.price,
                buyerId: this.user.id,
                sellerId: this.product.sellerId,
                date: this.getDate(),
                isValidated: false,
                isConfirmed: false,
                itemsAmount: 1,
                status: 'waiting',
                chat: {
                    messages: [],
                    notifications: [
                        {
                            id: 'notification1',
                            text: 'This dicussion started',
                            date: this.getDate()
                        },
                    ]
                }
            }


            // ADD SHOPPING ITEM AND ORDER
            this.$store.commit('users/addShoppingItem', {
                item: orderShoppingItemObject
            });
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET CURRENT DATE
        getDate() {
            const dateObj = new Date();
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

            return `${day} ${month}, ${hours}:${minutesFormatted}`;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // COPY BUTTON EVENT
        copyLink(text) {
            if (!this.copyLinkIndicator) return;
            this.copyLinkIndicator = false;
            const inputc = document.body.appendChild(document.createElement("input"));
            inputc.style.top = "0";
            inputc.style.left = "0";
            inputc.style.position = "fixed";
            inputc.value = window.location.href;
            inputc.focus();
            inputc.select();
            document.execCommand('copy');
            inputc.parentNode.removeChild(inputc);

            this.linkCopiedNotification.style.display = 'block';
            setTimeout(() => {
                this.linkCopiedNotification.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                this.linkCopiedNotification.style.opacity = 0;
                setTimeout(() => {
                    this.linkCopiedNotification.style.display = 'none';

                    this.copyLinkIndicator = true;
                }, 200);
            }, 1000);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SHARE BUTTON EVENT
        shareEvent() {
            if (navigator.share) {
                navigator.share({
                    title: this.product.name,
                    url: window.location.href
                })
            } else {
                if (!this.shareDropdown.classList.contains('opened')) {
                    this.shareDropdown.classList.add('opened');
                    this.shareDropdown.style.display = 'block';
                    setTimeout(() => {
                        this.shareDropdown.style.opacity = 1;
                    }, 10);
                } else {
                    this.shareDropdown.style.opacity = 0;
                    setTimeout(() => {
                        this.shareDropdown.style.display = 'none';
                        this.shareDropdown.classList.remove('opened');
                    }, 200);
                }
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CARDS SELECTION DROPDOWN
        toggleCardsDropdown() {
            if (!this.cardsSelectionDropdown.classList.contains('opened')) {
                this.cardsSelectionDropdown.classList.add('opened');
                this.cardsSelectionDropdown.style.display = 'block';
                this.cardsDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.cardsSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.cardsSelectionDropdown.style.opacity = 0;
                this.cardsDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.cardsSelectionDropdown.style.display = 'none';
                    this.cardsSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAYMENTS SELECTION DROPDOWN
        togglePaymentsDropdown() {
            if (!this.paymentsSelectionDropdown.classList.contains('opened')) {
                this.paymentsSelectionDropdown.classList.add('opened');
                this.paymentsSelectionDropdown.style.display = 'block';
                this.paymentsDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.paymentsSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.paymentsSelectionDropdown.style.opacity = 0;
                this.paymentsDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.paymentsSelectionDropdown.style.display = 'none';
                    this.paymentsSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAYMENTS SELECTION DROPDOWN
        toggleAccountsDropdown() {
            if (!this.accountsSelectionDropdown.classList.contains('opened')) {
                this.accountsSelectionDropdown.classList.add('opened');
                this.accountsSelectionDropdown.style.display = 'block';
                this.accountsDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.accountsSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.accountsSelectionDropdown.style.opacity = 0;
                this.accountsDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.accountsSelectionDropdown.style.display = 'none';
                    this.accountsSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION CARDS OPTION FUNCTIONAL
        selectCardsOption(option) {
            this.cardsDropdownOpener.value = option;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION PAYMENTS OPTION FUNCTIONAL
        selectPaymentsOption(option) {
            this.paymentsDropdownOpener.value = option;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION PAYMENTS OPTION FUNCTIONAL
        selectAccountsOption(option) {
            this.accountsDropdownOpener.value = option;
        },
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FIND AND LOAD THE PRODUCT
    created () {
        // PRODUCTS ARRAY
        const productsArray = this.$store.state.products.products;

        // FIND PRODUCT IN PRODUCTS ARRAY
        this.product = productsArray.find((product) => {
            if (product.id === this.$route.params.id) {
                return product;
            }
        })

        // CHECK IF PRODUCT HAS OLD PRICE IF SO CALCULATE DISCOUNT
        if (this.product.oldPrice) {
            this.discount = Math.round(100 - this.product.price / this.product.oldPrice * 100);
        }
        
        // FIND SELLER BY HIS ID
        this.sellerFound = this.$store.state.users.users.find(el => {
            if (el.id === this.product.sellerId) {
                return el;
            }
        })
    },

    mounted () {
        // DOM
        this.linkCopiedNotification = document.getElementById('linkCopiedNotification');
        this.shareDropdown = document.getElementById('shareDropdown');
        this.shareButton = document.getElementById('shareButton');
        
        this.paymentsSelectionDropdown = document.getElementById('paymentsSelectionDropdown');
        this.paymentsDropdownArrow = document.getElementById('paymentsDropdownArrow');
        this.paymentsDropdownOpener = document.getElementById('paymentsDropdownOpener');
        
        if (this.product.type === 'giftcard') {
            this.cardsSelectionDropdown = document.getElementById('cardsSelectionDropdown');
            this.cardsDropdownArrow = document.getElementById('cardsDropdownArrow');
            this.cardsDropdownOpener = document.getElementById('cardsDropdownOpener');
        }
        
        if (this.product.type === 'account') {
            this.accountsSelectionDropdown = document.getElementById('accountsSelectionDropdown');
            this.accountsDropdownArrow = document.getElementById('accountsDropdownArrow');
            this.accountsDropdownOpener = document.getElementById('accountsDropdownOpener');
        }

        // TAKE PAGE URL
        this.url = window.location.href;

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const isClickInsideElement = this.shareDropdown.contains(e.target);
            const isClickInsideElement2 = this.shareButton.contains(e.target);


            if (!isClickInsideElement && !isClickInsideElement2 && this.shareDropdown.classList.contains('opened')) {
                this.shareDropdown.style.opacity = 0;
                setTimeout(() => {
                    this.shareDropdown.style.display = 'none';
                    this.shareDropdown.classList.remove('opened');
                }, 200);
            }

            const dropdownPaymentsOpener = this.paymentsDropdownOpener.contains(e.target);
            
            if (!dropdownPaymentsOpener && this.paymentsSelectionDropdown.classList.contains('opened')) {
                this.paymentsSelectionDropdown.style.opacity = 0;
                this.paymentsDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.paymentsSelectionDropdown.style.display = 'none';
                    this.paymentsSelectionDropdown.classList.remove('opened');
                }, 200);
            }

            if (this.product.type === 'giftcard') {
                const dropdownCardsOpener = this.cardsDropdownOpener.contains(e.target);

                if (!dropdownCardsOpener && this.cardsSelectionDropdown.classList.contains('opened')) {
                    this.cardsSelectionDropdown.style.opacity = 0;
                    this.cardsDropdownArrow.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        this.cardsSelectionDropdown.style.display = 'none';
                        this.cardsSelectionDropdown.classList.remove('opened');
                    }, 200);
                }
            }

            if (this.product.type === 'account') {
                const dropdownAccountsOpener = this.accountsDropdownOpener.contains(e.target);

                if (!dropdownAccountsOpener && this.accountsSelectionDropdown.classList.contains('opened')) {
                    this.accountsSelectionDropdown.style.opacity = 0;
                    this.accountsDropdownArrow.style.transform = 'rotate(0deg)';
                    setTimeout(() => {
                        this.accountsSelectionDropdown.style.display = 'none';
                        this.accountsSelectionDropdown.classList.remove('opened');
                    }, 200);
                }
            }
        });
    },
}
</script>

<style lang='scss' scoped>
::v-deep {
    .products-line {
        @media only screen and (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-columns: 1fr;
        }
    }
}

footer {
    width: 100% !important;
}

.product-page {

    #linkCopiedNotification {
        box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
        background-color: $color-grey-2;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 5.75rem 0 7.25rem;
        width: 45rem;
        color: white;
        position: fixed;
        left: 50%;
        top: 0;
        z-index: 1000;
        transform: translateX(-50%);
        transition: all .3s;
        text-align: center;
        display: none;
        opacity: 0;

        .title {
            font-size: 2.85rem;
        }
    }

    .image-composition {
        position: absolute;
        right: 0;
        top: 15%;
        width: 33rem;

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

        .main-content {
            display: flex;
            justify-content: space-between;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                justify-content: center;
            }

            #shareDropdown {
                box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
                background-color: $color-grey-dark;
                border-radius: 2rem;
                padding: 2.75rem 0 3.25rem;
                width: 27rem;
                color: white;
                position: absolute;
                right: 0;
                top: 100%;
                transition: all .2s;
                display: none;
                opacity: 0;

                .title {
                    font-size: 2.4rem;
                    margin-bottom: 1.25rem;
                    margin-left: 2.75rem;
                }

                .share-list {

                    .item {
                        display: flex;
                        align-items: center;
                        padding: 1.2rem 0;
                        padding-left: 2.75rem;
                        cursor: pointer;
                        transition: all .2s;
                        border-radius: 1.2rem;

                        &:hover {
                            background-color: $color-grey-2;
                        }

                        &:first-of-type {
                            border-top: 1.5px solid $color-grey-2;
                        }

                        &:not(:last-of-type) {
                            border-bottom: 1.5px solid $color-grey-2;
                        }

                        .icon {
                            width: 2.4rem;
                            height: 2.4rem;
                            margin-right: 1rem;
                        }
                    }
                }
            }

            .product {
                width: 60rem;
                margin-right: 10rem;
                color: $color-text-grey;

                @media only screen and (max-width: 850px) {
                    margin-right: 0;
                    width: 100%;
                }

                &-photo {
                    width: 100%;
                    height: 25rem;
                    border-radius: 2rem;
                    margin-bottom: 1.5rem;

                    @media only screen and (max-width: 850px) {
                        height: 32rem;
                    }

                    @media only screen and (max-width: 1300px) {
                        border-radius: 20px;
                    }
                }

                &-name-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 1.5rem;
                    margin-bottom: 1.25rem;
                    position: relative;
                }

                &-name {
                    font-size: 4rem;
                    color: white;

                    @media only screen and (max-width: 850px) {
                        font-size: 4.4rem;
                    }
                }

                &-buttons {
                    display: flex;

                    @media only screen and (max-width: 850px) {
                        margin-left: 3rem;
                    }
                }

                &-button {
                    display: block;
                    padding: 1rem;
                    border-radius: 8px;
                    background-color: $color-grey-dark;
                    @include flex-center;
                    cursor: pointer;
                    transition: all .3s;

                    @media only screen and (max-width: 850px) {
                        background-color: $color-grey-2;
                        transform: scale(1.2);
                    }

                    &:hover {
                        background-color: $color-grey-2;
                    }

                    img {
                        height: 1.8rem;

                        @media only screen and (max-width: 850px) {
                            height: 2.1rem;
                        }
                    }
                }

                #report-button {
                    margin-right: 2rem;
                }

                &-border-info {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 2rem;

                    @media only screen and (max-width: 850px) {
                        margin-bottom: 3rem;
                        
                        * {
                            font-size: 1.7rem !important;
                        }
                    }

                    span {
                        display: inline-block;
                        width: 30%;
                        text-align: center;
                        padding: .75rem 0;
                    }

                    .product-discount {
                        color: $color-green;
                    }
                }

                &-warranty-eta-container {
                    display: flex;

                    @media only screen and (max-width: 850px) {
                        flex-direction: column;
                        margin-bottom: 2.5rem;
                    }

                    .product-warranty-container {
                        margin-right: 9rem;
                    }
                }

                .product-description-container {
                    p {
                        line-height: 1.4;
                    }
                }

                .product-description-container,
                .product-warranty-container {
                    margin-bottom: 2.5rem;
                }

                .info-container {
                    padding-left: 1.25rem;

                    @media only screen and (max-width: 850px) {
                        padding: 0;
                    }
                }

                .info-title {
                    margin-bottom: 1rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 1.8rem;
                    }
                }

                .product-payment-title {
                    margin-bottom: 2rem;
                }

                .line {
                    width: 100%;
                    background-color: $color-grey-2;
                    height: 1.5px;
                    border-radius: 100px;
                    margin-bottom: 2.5rem;

                    @media only screen and (min-width: 850px) {
                        display: none;
                    }
                }

                &-payment-methods {
                    display: flex;
                    justify-content: flex-start;
                    width: 40rem;
                    flex-wrap: wrap;

                    @media only screen and (max-width: 1100px) {
                        width: 50rem;
                    }
                }

                &-payment-method {
                    display: flex;
                    align-items: center;
                    margin-right: 2rem;
                    white-space: nowrap;
                    margin-bottom: 1.5rem;

                    img {
                        margin-right: 1rem;
                    }
                }

                p, &-payment-method {
                    font-size: 1.7rem;
                }
            }

            .payment-form {
                box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
                background-color: $color-grey-dark;
                border-radius: 2rem;
                padding: 2.75rem 3.75rem 4.75rem;
                align-self: flex-start;
                // flex-grow: 1;
                width: 50rem;

                @media only screen and (max-width: 1300px) {
                    border-radius: 20px;
                }

                @media only screen and (max-width: 850px) {
                    width: 100%;
                    margin-top: 1.5rem;
                }

                .input-group {
                    margin-bottom: 1.25rem;
                }

                .user-info {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2rem;

                    .user-avatar {
                        border-radius: 100%;
                        width: 5.25rem;
                        height: 5.25rem;
                        margin-right: 1.25rem;
                    }

                    .user-right {


                        .user-text {
                            color: $color-text-grey;
                            font-weight: 500;
                            margin-bottom: .4rem;
                            font-size: 1.5rem;

                            .user-name {
                                color: $color-primary;
                                font-weight: 600 !important;
                            }
                        }

                        .cards-amount {
                            font-weight: 600;
                        }
                    }
                }

                form {

                    .select:not(:last-of-type) {
                        margin-bottom: 1.25rem;
                    }

                    input {
                        font-family: Montserrat;
                        display: block;
                        box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                        0 .3rem 1rem 0 rgba(#19151F, .5);
                        background-color: #111111;
                        padding: 1.2rem 2.75rem;
                        border-radius: 9px;
                        width: 100%;
                        color: white;

                        &:not(:last-of-type) {
                            margin-bottom: 1.25rem;
                        }
                        

                        &::placeholder {
                            color: white;
                        }
                    }

                    .button-price-container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 3rem;

                        .login-button {
                            padding: .75rem 4rem;
                        }

                        .prices {
                            display: flex;
                            align-items: center;
                            flex-direction: column;

                            .old-price {
                                color: $color-text-grey-dark;
                                // font-size: 1.4rem;
                                font-size: 1.6rem;
                                text-decoration: line-through;

                                @media only screen and (max-width: 850px) {
                                    font-size: 1.5rem;
                                }
                            }

                            .new-price {
                                margin-right: .4rem;
                                font-size: 2.75rem;
                            }
                        }
                    }
                }
            }
        }

        .recommended-products {
            margin-top: 7rem;
            margin-bottom: 16rem;

            .title-container {

                .title {
                    text-transform: uppercase;

                    @media only screen and (max-width: 850px) {
                        margin-bottom: 2rem;
                    }
                }

                .line {
                    width: 50rem;
                    margin: 1.5rem 0 2rem;
                    background-color: $color-grey-2;
                    height: 1.5px;
                    border-radius: 100px;

                    @media only screen and (max-width: 850px) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>