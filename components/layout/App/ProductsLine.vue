<template>
    <div class="section">
        <div class="products-line">
            <ProductCard 
                v-for="card in cards"
                :key="card.id"
                :name="card.name"
                :photo="card.photo"
                :price="card.price"
                :oldPrice="card.oldPrice"
                :amountInStock="card.amountInStock"
            />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        cards() {
            const filteredArray = this.$store.state.products.products.cards.filter((el, i) => {
                return i < 4;
            })
            return filteredArray
        }
    },
}
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