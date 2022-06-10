<template>
    <div class="relative-container">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="my-shopping-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>My shopping</span>
                </div>
                <h1 class="page-title">My shopping</h1>
                <div v-if="shoppingItems.length == 0" class="no-items">
                    No shopping items yet
                </div>
                <div v-if="shoppingItems.length > 0" class="shopping-items">
                    <MyShoppingItem
                    v-for="(item, i) in shoppingItems"
                    :key="item.id"
                    :id='item.id'
                    :productId='item.productId'
                    :status='item.status'
                    :isValidated='item.isValidated'
                    :number='i + 1'
                    />
                </div>
            </div>
            <img src="@/assets/img/gridLeaderboardUpdates.png" alt="Grid" class="grid-image">

            <Footer />
        </div>
    </div>
</template>

<script>
import MyShoppingItem from '@/components/elements/MyShoppingItem';

export default {
    middleware: ['notLoggedIn'],
    
    components: {
        MyShoppingItem,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.$store.state.user;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIND MY SHOPPING ITEMS ARRAY
        shoppingItems() {
            let myShoppingItemsArray = [];
            this.$store.state.users.users.find(el => {
                if (el.id === this.user.id) {
                    myShoppingItemsArray = el.shoppingItems;
                }
            })
            return myShoppingItemsArray;
        }
    },
}
</script>

<style lang="scss" scoped>
.my-shopping-page {
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
        
        .no-items {
            width: 100%;
            font-family: Rowdies;
            font-weight: 300 !important;
            font-size: 3.75rem !important;
            text-align: center;
            @include abs-center;
        }
    }

    .grid-image {
        position: absolute;
        right: 0;
        top: -3%;
        width: 24rem;
    }
}
</style>