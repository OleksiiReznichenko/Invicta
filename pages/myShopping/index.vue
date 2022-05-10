<template>
    <div class="relative-container">
        <div class="my-shopping-page section">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>My shopping</span>
                </div>
                <h1 class="page-title">My shopping</h1>
                <div class="shopping-items">
                    <MyShoppingItem
                    v-for="(item, i) in shoppingItems"
                    :key="item.id"
                    :id='item.id'
                    :name='item.name'
                    :image='item.image'
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
    components: {
        MyShoppingItem,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY SOPPING ITEMS ARRAY
        shoppingItems() {
            return this.$store.state.myShoppingItems.myShoppingItems;
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

        .page-title {
            font-size: 4.5rem;
            margin-top: -.5rem;
            margin-bottom: 3rem;
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