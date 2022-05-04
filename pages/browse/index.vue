<template>
    <div class="relative-container">
        <div class="product-page section">
            <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <nuxt-link to="/browse">Browse</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Nike UK</span>
                </div>
                <div class="main-content">
                    <div class="product">
                        <img src="@/static/products/nikeUKBig2.jpg" alt="Product photo" class="product-photo">
                        <div class="product-name-container">
                            <h1 class="product-name">Nike UK</h1>
                            <div class="product-buttons">
                                <nuxt-link to="/report" class="product-button" id="report-button">
                                    <img src="@/assets/svg/report.svg" alt="Report" class="product-button-icon">
                                </nuxt-link>
                                <div class="product-button" id="share-button">
                                    <img src="@/assets/svg/share.svg" alt="Share" class="product-button-icon">
                                </div>
                            </div>
                        </div>
                        <div class="product-border-info">
                            <span class="border-text-green product-discount">save 32%</span>
                            <span class="border-text-blue product-amount-in-stock">1 in stock</span>
                            <span class="border-text-blue product-country">UK</span>
                        </div>
                        <div class="product-description-container info-container">
                            <h4 class="product-description-title info-title">Description</h4>
                            <p class="product-description-text">
                                Nike giftcards (with pin) Can only be used online or in store.
                                Safe - storable - friendly. Get up to 20% bonuses for your purchase.
                            </p>
                        </div>
                        <div class="product-warranty-eta-container">
                            <div class="product-warranty-container info-container">
                                <h4 class="product-warranty-title info-title">Warranty</h4>
                                <p class="product-warranty-text">
                                    Can only be used online or in stores
                                </p>
                            </div>
                            <div class="product-eta-container info-container">
                                <h4 class="product-eta-title info-title">ETA</h4>
                                <p class="product-eta-text">
                                    7-12 days
                                </p>
                            </div>
                        </div>
                        <div class="product-payment-container info-container">
                            <h4 class="product-paymeny-title info-title">Payment</h4>
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
                                <p class="user-text">Purchasing from <span class="user-name">NotLuna</span> at <span class="percent">68%</span></p>
                                <span class="cards-amount">£ of cards</span>
                            </div>
                        </div>
                        <form action="#" class="form">
                            <input type="text" id="selectCards" placeholder="Select the cards">
                            <input type="text" id="paymentMethods" placeholder="Payment Methods">
                            <div class="button-price-container">
                                <nuxt-link to="/login" class="login-button btn btn-gradient"><span>Login</span></nuxt-link>
                                <div class="prices">
                                    <h3 class="new-price">$259.99</h3>
                                    <span class="old-price">$299.99</span>
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
                    <ProductsLine />
                </div>
            </div>

            <img src="@/assets/img/gridProductPage.png" alt="Image composition" class="image-composition">

            <Footer />
        </div>
    </div>
</template>

<script>
export default {

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

.product-page {

    .section, footer {
        width: 100% !important;
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
                    border-radius: 1.5rem;
                    margin-bottom: 1.5rem;

                    @media only screen and (max-width: 1300px) {
                        border-radius: 15px;
                    }
                }

                &-name-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 1.5rem;
                    margin-bottom: 1.25rem;
                }

                &-name {
                    font-size: 4rem;
                    color: white;
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

                    &:hover {
                        background-color: $color-grey-2;
                    }

                    img {
                        height: 1.8rem;
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

                    span {
                        display: inline-block;
                        width: 30%;
                        text-align: center;
                        padding: .75rem 0;
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
                }

                .info-title {
                    margin-bottom: 1rem;
                }

                .product-paymeny-title {
                    margin-bottom: 2rem;
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

                    span {

                    }
                }
            }

            .payment-form {
                box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
                background-color: $color-grey-dark;
                border-radius: 1.5rem;
                padding: 2.75rem 3.75rem 4.75rem;
                align-self: flex-start;
                // flex-grow: 1;
                width: 50rem;

                @media only screen and (max-width: 1300px) {
                    border-radius: 15px;
                }

                @media only screen and (max-width: 850px) {
                    width: 100%;
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
                                font-size: 1.3rem;
                                text-decoration: line-through;
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