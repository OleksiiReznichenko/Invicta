<template>
    <div class="root">
        <div class="section heading-container">
            <h4 class="heading">Take it at a discount</h4>
        </div>
        <div class="banner-container banner-mobile">
            <div class="banner">
                    <div class="info">
                        <h3>Have time <br> to buy</h3>
                        <nuxt-link to="/browse" class="btn btn-white">Go to shop</nuxt-link>
                    </div>
                    <img src="@/assets/img/bannerGirl.png" alt="Girl" class="girl">
                </div>
                <img src="@/assets/img/gridIndexSignup.png" alt="Grid" class="grid-image">
        </div>
        <div class="section discount-products-line">
            <div class="banner banner-desktop">
                <div class="info">
                    <h3>Have time <br> to buy</h3>
                    <nuxt-link to="/browse" class="btn btn-white">Go to shop</nuxt-link>
                </div>
                <img src="@/assets/img/bannerGirl.png" alt="Girl" class="girl">
            </div>
            <ProductCard 
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :photo="product.photo"
                :price="product.price"
                :oldPrice="product.oldPrice"
                :amountInStock="product.amountInStock"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRODUCTS ARRAY
        products() {
            // GET PRODUCTS WITH DISCOUNT
            const filteredArrayDiscount = this.$store.state.products.products.filter(el => {
                return el.oldPrice;
            })

            // LIMIT ARRAY LENGTH TO 6
            const filteredArray = filteredArrayDiscount.filter((el, i) => {
                return i < 6;
            })

            return filteredArray;
        }
    },
}
</script>

<style lang='scss' scoped>
.root {
    position: relative;
    
    .light {
        position: absolute;
        z-index: 50;
        right: 0;
        bottom: -100%;
    }

    .banner-desktop {
        @media only screen and (max-width: 850px) {
            display: none;
        }
    }

    .banner-mobile {
        @media only screen and (min-width: 850px) {
            display: none;
        }
    }

    .grid-image {
        position: absolute;
        right: -5rem;
        top: 50%;
        transform: translateY(-50%);
        height: 90%;
        max-width: 80%;
    }

    .heading-container {
        font-size: 2.4rem;
        margin-bottom: 2.5rem;

        @media only screen and (max-width: 850px) {
            width: 45%;
            text-align: center;
            font-size: 3rem;
        }

        @media only screen and (max-width: 650px) {
            width: 40rem;
        }
    }

    .banner {
        grid-row: 1 / span 2;
        position: relative;
        background-color: #4F23EA;
        border-radius: 8px;
        text-align: center;
        overflow: hidden;
        padding-top: 5rem;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            width: 45%;
            height: 70rem;
            margin: 0 auto;
        }

        @media only screen and (max-width: 650px) {
            height: 65rem;
            width: 40rem;
        }

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
}

.discount-products-line {
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 35%);
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>