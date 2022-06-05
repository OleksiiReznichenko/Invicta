<template>
    <div class="item-item">
        <div class="desktop left">
            <div class="cell image-container">
                <img :src="itemPhoto" alt="item item image" class="image">
                <span class="item-id">{{id}}</span>
            </div>
            <span class="cell item-title">{{itemTitle}}</span>
            <span class="cell order-amount">{{itemsAmount}}</span>
            <span class="cell order-time">{{date}}</span>
        </div>
        <nuxt-link class="desktop order-item-link" :to="'/adminDashboard/' + id">watch item</nuxt-link>

        <img :src="itemPhoto" alt="Order image" class="mobile image">
        <div class="mobile info">
            <div class="title-container">
                <span class="order-title">{{itemTitle}}</span>
                <span class="order-amount">({{itemsAmount}})</span>
            </div>
            <div class="id-time-container">
                <span class="item-id">{{id}}</span>
                <span class="item-time">{{date}}</span>
            </div>
            <nuxt-link class="mobile item-item-link" :to="'/adminDashboard/' + id">watch item</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'itemTitle', 'itemPhoto', 'itemsAmount', 'date'],
}
</script>

<style lang="scss" scoped>
.item-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-grey-dark;
    border-radius: 10px;
    padding: 2rem 2.5rem;
    transition: all .3s;

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    &:hover {
        background-color: lighten($color-grey-dark, 5%);
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

    .item-title {
        @media only screen and (max-width: 850px) {
            font-weight: 700 !important;
            font-size: 2.2rem;
        }
    }

    .item-amount {
        @media only screen and (max-width: 850px) {
            font-weight: 700 !important;
            color: $color-orange;
            font-size: 2.2rem;
        }
    }

    .item-id {
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

    .item-item-link {
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

        .item-title,
        .image-container {
            width: 30%;
        }
    }
}
</style>