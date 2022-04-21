<template>
    <div class="section">
        <div class="products-line">
            <ProductCard v-for="(card, i) in 4" :key="i"/>
        </div>
    </div>
</template>

<script>
// import ProductCard from '@/components/elements/ProductCard';

// export default {
//     components: {
//         ProductCard,
//     },

// }
</script>

<style lang='scss' scoped>
.products-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-template-rows: 100%;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    margin-bottom: 12rem;
    width: 100%;

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 35%);
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>