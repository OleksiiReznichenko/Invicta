<template>
  <div class="products-line">
      <div class="banner">
          <div class="info">
                <h3>Have time to buy</h3>
                <nuxt-link to="/discover" class="btn btn-white">promo codes</nuxt-link>
          </div>
      </div>
      <ProductCard v-for="(card, i) in 6" :key="i"/>
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

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 33%);
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>