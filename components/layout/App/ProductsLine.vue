<template>
  <div class="products-line">
      <ProductCard v-for="(card, i) in 4" :key="i"/>
  </div>
</template>

<script>
import ProductCard from '@/components/elements/ProductCard';

export default {
    components: {
        ProductCard,
    },

}
</script>

<style lang='scss' scoped>
.products-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100%;
    grid-column-gap: 3rem;
}
</style>