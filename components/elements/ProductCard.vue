<template>
    <div class="product-card-wrapper">
        <nuxt-link v-if="!linkDisable" class="product-card" :to="'/browse/' + this.id">
            <div class="overlay"></div>
            <div class="header">
                <div class="top-rect"></div>
                <img :src="photo" alt="Product image" class="product-image">
                <div class="container">
                    <div class="item items-in-stock">{{amountInStock}} {{itemsTextComp}}</div>
                    <div v-if="discountComp" class="item discount">save {{discountComp}}%</div>
                </div>
            </div>
            <div class="info">
                <div class="name">{{name}}</div>
                <div class="container">
                    <div class="prices">
                        <h3 class="new-price">${{price}}</h3>
                        <span v-if="oldPrice" class="old-price">${{oldPrice}}</span>
                    </div>
                    <nuxt-link class="btn" :to="'/browse/' + this.id">+Add</nuxt-link>
                </div>
            </div>
        </nuxt-link>
        <div v-if="linkDisable" class="product-card">
            <div class="product-id">{{id}}</div>
            <div class="overlay">
                <div class="buttons">
                    <button class="btn btn-gradient btn-change-card"><span>Change</span></button>
                    <button class="btn btn-gradient btn-remove-card"><span>Remove</span></button>
                </div>
            </div>
            <div class="header">
                <div class="top-rect"></div>
                <img :src="photo" alt=" " class="product-image">
                <div class="container">
                    <div class="item items-in-stock">{{amountInStock}} {{itemsTextComp}}</div>
                    <div v-if="discountComp" class="item discount">save {{discountComp}}%</div>
                </div>
            </div>
            <div class="info">
                <div class="name">{{name}}</div>
                <div class="container">
                    <div class="prices">
                        <h3 class="new-price">${{price}}</h3>
                        <span v-if="oldPrice" class="old-price">${{oldPrice}}</span>
                    </div>
                    <button class="btn">+Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'photo', 'price', 'oldPrice', 'amountInStock', 'id', 'linkDisable'],

    data() {
        return {
            discount: 0,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CALCULATE DISCOUNT BY OLD PRICE
        discountComp() {
            if (this.oldPrice && this.price < this.oldPrice) {
                this.discount = Math.round(100 - this.price / this.oldPrice * 100);
                if (this.discount > 99) {
                    this.discount = 99;
                }
                return this.discount;
            } else {
                return null;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE ITEMS TEXT DEPENDING FROM AMOUNT IN STOCK
        itemsTextComp() {
            if (this.amountInStock == 1) {
                return 'item';
            } else {
                return 'items';
            }
        },
    },
}
</script>

<style lang='scss' scoped>
.product-card {
    display: block;
    background-color: $color-grey;
    border-radius: 8px;
    padding: 1rem 0 3.4rem;
    position: relative;
    overflow: hidden;
    transition: all .3s;
    cursor: pointer;

    &:hover {
        background-color: lighten($color-grey, 4%);
    }

    .overlay {
        display: none;

        .buttons {
            @include abs-center;


            .btn-change-card {
                margin-bottom: 1.5rem;
            }

            .btn-change-card,
            .btn-remove-card {
                padding: 1.4rem 5.5rem;
                position: static !important;
                transform: translate(0,0);

                &::before {
                    opacity: 1 !important;
                }

                &:hover {
                    transform: translate(0, 0) scale(1.05);
                }
            }
        }
    }

    .product-id {
        display: none;
    }

    .header {
        position: relative;
        margin-bottom: 3rem;

        .top-rect {
            width: 2.2rem;
            height: 1.3rem;
            background-color: #121112;
            margin: 0 auto;
            margin-bottom: 1rem;
            border-radius: 5px;
        }

        .product-image {
            display: block;
            width: 85%;
            height: 12rem;
            margin: 0 auto;
            border-radius: 1rem;
            // object-fit: cover;

            @media only screen and (max-width: 1300px) {
                border-radius: 10px;
            }
        }

        .container {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
                
                @media only screen and (max-width: 1100px) {
                    transform: translateX(-50%) scale(.9);
                    bottom: -1.5rem;
                }

            .item {
                color: black;
                background-color: white;
                border-radius: 100px;
                padding: .5rem 1.5rem;
                font-weight: 500;
                font-size: 1.4rem;
                white-space: nowrap;


                &:not(:last-of-type) {
                    margin-right: 1rem;
                }
            }
        }
    }

    .info {
        width: 85%;
        margin: 0 auto;

        .name {
            font-size: 1.8rem;
            color: $color-text-grey;
            margin-bottom: 2rem;

            @media only screen and (max-width: 850px) {
                font-size: 2.1rem;
            }
        }

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
                
            @media only screen and (min-width: 1050px) {
                display: flex;
                align-items: center;
            }

            @media only screen and (max-width: 450px) {
                flex-direction: column;
                align-items: flex-start;
            }

            .prices {
                
                @media only screen and (min-width: 1450px),
                only screen and (max-width: 450px) {
                    display: flex;
                    align-items: center;
                }

                .old-price {
                    color: $color-text-grey-dark;
                    font-size: 1.3rem;
                    text-decoration: line-through;

                    @media only screen and (max-width: 850px) {
                        font-size: 1.5rem;
                    }
                }

                .new-price {
                    margin-right: .4rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 2.2rem;
                    }

                    @media only screen and (max-width: 450px) {
                        font-size: 2rem;
                    }
                }
            }

            .btn {
                text-transform: uppercase;
                font-weight: 700;
                border: 2px solid $color-text-grey-dark;
                border-radius: 100px;
                padding: .35rem 1.25rem;

                @media only screen and (max-width: 450px) {
                    margin-top: 1.8rem;
                    padding: .35rem 2rem;
                }
                
                &:hover {
                    background-color: $color-primary;
                    border: 2px solid transparent;
                }
            }
        }
    }
}
</style>