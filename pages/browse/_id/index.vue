<template>
    <div class="relative-container">
        <div class="product-page section section-page">
            <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
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
                                <nuxt-link to="/report" class="product-button" id="report-button">
                                    <img src="@/assets/svg/report.svg" alt="Report" class="product-button-icon">
                                </nuxt-link>
                                <div @click="shareEvent" class="product-button" id="shareButton">
                                    <img src="@/assets/svg/share.svg" alt="Share" class="product-button-icon">
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
                            <img src="@/static/avatar2.png" alt="Avatar" class="user-avatar">
                            <div class="user-right">
                                <p class="user-text">Purchasing from <span class="user-name">NotLuna</span> <span v-if="product.oldPrice" class="percent">at {{percentOfPrice}}%</span></p>
                                <span class="cards-amount">£ of cards</span>
                            </div>
                        </div>
                        <form action="#" class="form">
                            <input type="text" id="selectCards" placeholder="Select the cards">
                            <input type="text" id="paymentMethods" placeholder="Payment Methods">
                            <div class="button-price-container">
                                <!-- <nuxt-link to="/login" class="login-button btn btn-gradient"><span>Buy</span></nuxt-link> -->
                                <nuxt-link to="/login" class="login-button btn btn-gradient"><span>Buy</span></nuxt-link>
                                <div class="prices">
                                    <h3 class="new-price">${{product.price}}</h3>
                                    <span v-if="product.oldPrice" class="old-price">${{product.oldPrice}}</span>
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
    data() {
        return {
            copyLinkIndicator: true,
            url: ''
        }
    },
    computed: {
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
    },

    methods: {
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
            // alert('Link copied');

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
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FIND AND LOAD THE PRODUCT
    created () {
        // PRODUCTS OBJECT
        const productsObject = this.$store.state.products.products;

        // CONVERT PRODUCTS OBJECT TO ARRAY
        const productsObjectToArray = Object.entries(productsObject);

        // FIND PRODUCT IN PRODUCTS ARRAY
        productsObjectToArray.forEach(([key, value]) => {
            if (this.product) return;
            this.product = value.find(product => {
                return product.id === this.$route.params.id;
            })
        })

        // CHECK IF PRODUCT HAS OLD PRICE IF SO CALCULATE DISCOUNT
        if (this.product.oldPrice) {
            this.discount = Math.round(100 - this.product.price / this.product.oldPrice * 100);
        }
    },

    mounted () {
        // DOM
        this.linkCopiedNotification = document.getElementById('linkCopiedNotification');
        this.shareDropdown = document.getElementById('shareDropdown');
        const shareButton = document.getElementById('shareButton');

        // TAKE PAGE URL
        this.url = window.location.href;

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const isClickInsideElement = this.shareDropdown.contains(e.target);
            const isClickInsideElement2 = shareButton.contains(e.target);


            if (!isClickInsideElement && !isClickInsideElement2 && this.shareDropdown.classList.contains('opened')) {
                this.shareDropdown.style.opacity = 0;
                setTimeout(() => {
                    this.shareDropdown.style.display = 'none';
                    this.shareDropdown.classList.remove('opened');
                }, 200);
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

// .section {
//     @media only screen and (min-width: 600px) {
//         width: 100% !important;
//     }
// }

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

                        // span {

                        // }
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
                    // object-fit: cover;

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

                    // &:not(:last-child) {
                    //     marri
                    // }
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

                    // span {

                    // }
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
                            }
                        }

                        .cards-amount {
                            font-weight: 600;
                        }
                    }
                }

                form {


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
                            
                        // @media only screen and (min-width: 1050px) {
                        //     display: flex;
                        //     align-items: center;
                        // }

                        .login-button {
                            padding: .75rem 4rem;
                        }

                        .prices {
                            display: flex;
                            align-items: center;

                            // @media only screen and (min-width: 1450px) {
                                // display: flex;
                                // align-items: center;
                            // }


                            .old-price {
                                color: $color-text-grey-dark;
                                font-size: 1.4rem;
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