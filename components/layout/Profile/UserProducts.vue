<template>
    <div class="section-page">
        <div v-if="baseArrayLength === 0" class="no-products">{{isMyProfile ? "You don't" : "User doesn't"}} have any products yet</div>
        <div v-if="baseArrayLength > 0 && products.length === 0" class="no-products">{{isMyProfile ? "You don't" : "User doesn't"}} have any products of this category</div>
        <div v-if="products.length > 0" class="products-line">
            <ProductCard 
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :photo="product.photo"
                :price="product.price"
                :oldPrice="product.oldPrice"
                :amountInStock="product.amountInStock"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: ['products', 'baseArrayLength', 'isMyProfile']
}
</script>

<style lang="scss" scoped>
.no-products {
    font-weight: 600 !important;
    font-size: 2.75rem;
    text-align: center;
    margin: 10rem 0 12rem;
}

.products-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-columns: 1fr;
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    margin-bottom: 12rem;
    width: 100%;

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 35%);
        grid-auto-columns: 35%;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-columns: 1fr;
    }
}
</style>