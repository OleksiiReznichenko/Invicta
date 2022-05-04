<template>
    <div class="index-page">
        <HeaderIndex/>
        <main>
            <DiscountBlock/>
            <ProductsLine class="main"/>
            <DiscountProducts/>
            <Signup/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import HeaderIndex from '@/components/layout/IndexPage/HeaderIndex';
import DiscountBlock from '@/components/layout/IndexPage/DiscountBlock';
import DiscountProducts from '@/components/layout/App/DiscountProducts';
import Signup from '@/components/layout/IndexPage/Signup';

export default {
    components: {
        HeaderIndex,
        DiscountBlock,
        DiscountProducts,
        Signup,
        // Preloader,
    },
}
</script>

<style lang="scss" scoped>
.index-page {
    margin-top: -11rem;

    @media only screen and (max-width: 600px) {
        margin-top: -15rem;
    }
}
// main {
//     margin-bottom: 25rem !important;
// }
</style>