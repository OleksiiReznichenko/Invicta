<template>
    <nuxt-link :to="'/orders/' + id" class="order-item">
        <div class="desktop left">
            <div class="cell image-container">
                <img :src="product.photo" alt="order item image" class="image">
                <span class="order-id">{{id}}</span>
            </div>
            <span class="cell order-title">{{product.name}}</span>
            <span class="cell order-amount">{{itemsAmount}}</span>
            <span class="cell order-time">{{date}}</span>
        </div>
        <nuxt-link class="desktop order-item-link" :to="'/orders/' + id">watch order</nuxt-link>

        <img :src="product.photo" alt="Order image" class="mobile image">
        <div class="mobile info">
            <div class="title-container">
                <span class="order-title">{{product.name}}</span>
                <span class="order-amount">({{itemsAmount}})</span>
            </div>
            <div class="id-time-container">
                <span class="order-id">{{id}}</span>
                <span class="order-time">{{date}}</span>
            </div>
            <nuxt-link class="mobile order-item-link" :to="'/orders/' + id">watch order</nuxt-link>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['id', 'productId', 'itemsAmount', 'date'],
    created () {
        // PRODUCTS OBJECT
        const productsObject = this.$store.state.products.products;

        // CONVERT PRODUCTS OBJECT TO ARRAY
        const productsObjectToArray = Object.entries(productsObject);

        // FIND PRODUCT IN PRODUCTS ARRAY
        productsObjectToArray.forEach(([key, value]) => {
            if (this.product) return;
            this.product = value.find(product => {
                return product.id === this.productId;
            })
        })
    },
}
</script>

<style lang="scss" scoped>
.order-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-grey-dark;
    border-radius: 10px;
    padding: 2rem 2.5rem;
    transition: all .3s;

    &:hover {
        background-color: lighten($color-grey-dark, 5%);
    }

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
    
    @media only screen and (max-width: 850px) {
        justify-content: center;
        padding: 3rem 3.5rem;
    }

    .desktop {
        @media only screen and (max-width: 850px) {
            display: none !important;
        }
    }

    .mobile {
        @media only screen and (min-width: 850px) {
            display: none !important;
        }
        font-size: 2rem;
    }

    .title-container {
        margin-bottom: .75rem;
    }

    .id-time-container {
        margin-bottom: .75rem;
        color: $color-text-grey;
    }

    .order-title {
        @media only screen and (max-width: 850px) {
            font-weight: 700 !important;
            font-size: 2.2rem;
        }
    }

    .order-amount {
        @media only screen and (max-width: 850px) {
            font-weight: 700 !important;
            color: $color-orange;
            font-size: 2.2rem;
        }
    }

    .order-id {
        @media only screen and (max-width: 850px) {
            padding-right: .75rem;
        }
    }

    .image {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        object-fit: cover;
        margin-right: 1.5rem;

        @media only screen and (max-width: 850px) {
            width: 9.5rem;
            height: 9.5rem;
            border-radius: 10px;
            margin-right: 2.5rem;
        }
    }

    .order-item-link {
        background-color: $color-primary;
        border-radius: 7px;
        padding: .65rem 5.5rem;
        transition: all .3s;
        text-align: center;

        &:hover {
            background-color: darken($color-primary, 15%);
        }

        @media only screen and (max-width: 850px) {
            display: block;
            margin-top: 1rem;
        }
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;

        .cell {
            display: inline-block;
            width: 20%;
            text-align: center;
        }

        .image-container {
            display: flex;
            align-items: center;
        }

        .order-title,
        .image-container {
            width: 30%;
        }
    }
}
</style>