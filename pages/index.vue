<template>
    <div class="index-page">
        <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
        <HeaderIndex/>
        <main class="section">
            <DiscountBlock/>
            <ProductsLine/>
            <DiscountProducts/>
        </main>
    </div>
</template>

<script>
import HeaderIndex from '@/components/layout/IndexPage/HeaderIndex';
import DiscountBlock from '@/components/layout/IndexPage/DiscountBlock';
import ProductsLine from '@/components/layout/App/ProductsLine';
import DiscountProducts from '@/components/layout/App/DiscountProducts';

export default {
    components: {
        HeaderIndex,
        DiscountBlock,
        ProductsLine,
        DiscountProducts,
        // Preloader,
    },
}
</script>

<style lang="scss" scoped>
main {
    margin-bottom: 25rem !important;
}
</style>