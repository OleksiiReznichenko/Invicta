<template>
    <div class="product-card">
        <div class="overlay"></div>
        <div class="header">
            <div class="top-rect"></div>
            <img :src="photo" alt="Ozon" class="product-image">
            <div class="container">
                <div class="item items-in-stock">{{amountInStock}} {{itemsTextComp}}</div>
                <div v-if="oldPrice" class="item discount">save {{discountComp}}%</div>
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
    </div>
</template>

<script>
export default {
    props: ['name', 'photo', 'price', 'oldPrice', 'amountInStock', 'id'],
    data() {
        return {
            discount: 0,
            itemsText: 'items'
        }
    },

    computed: {
        discountComp() {
            return this.discount
        },
        itemsTextComp() {
            return this.itemsText
        },
    },

    mounted () {
        if (this.oldPrice) {
            this.discount = Math.round(100 - this.price / this.oldPrice * 100);
        }

        if (this.amountInStock == 1) {
            this.itemsText = 'item'
        }
    },
}
</script>

<style lang='scss' scoped>
.product-card {
    background-color: $color-grey;
    border-radius: 8px;
    padding: 1rem 0 3.4rem;
    position: relative;
    overflow: hidden;

    .overlay {
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
            margin: 0 auto;
            border-radius: 1rem;

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