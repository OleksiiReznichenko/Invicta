<template>
    <div class="section-page">
        <div class="products-line">
            <ProductCard 
                v-for="card in cards"
                :key="card.id"
                :id="card.id"
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
    props: ['exception'],
    
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET GIFTCARDS ARRAY AND LIMIT LENGTH TO 4 IF THERE IS AN EXCEPTION IGNORE IT
        cards() {
            const filteredArray = this.$store.state.products.products.filter((el, i) => {
                if (this.exception) {
                    if (el.id !== this.exception) {
                        return i < 5;
                    }
                } else {
                    return i < 4;
                }
            })

            return filteredArray.slice(0, 4);
        }
    },
}
</script>

<style lang='scss' scoped>
.products-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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