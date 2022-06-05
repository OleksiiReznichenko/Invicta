<template>
    <div class="relative-container">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="my-orders-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>My orders</span>
                </div>
                <h1 class="page-title">My orders</h1>
                <Orders :orders='orders' />
            </div>
            <img src="@/assets/img/spiralOrders.png" alt="Spiral" class="spiral-image">

            <Footer />
        </div>
    </div>
</template>

<script>
import Orders from '@/components/layout/App/Orders';

export default {
    middleware: ['notLoggedIn'],

    components: {
        Orders,
    },

    data() {
        return {
            searchValue: '',
            searchValueValidated: '',
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.$store.state.user;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIND MY ORDERS ARRAY
        orders() {
            let myOrdersArray = [];
            this.$store.state.users.users.forEach(el => {
                if (el.id === this.user.id) {
                    myOrdersArray = el.orders;
                }
            })
            return myOrdersArray;
        },
    },
}
</script>

<style lang="scss" scoped>
.my-orders-page {
    min-height: 80vh;

    .content {
        min-height: 70vh;
        position: relative;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .spiral-image {
        position: absolute;
        right: 0;
        top: 10%;
        width: 27rem;
    }
}
</style>