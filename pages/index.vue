<template>
    <div class="index-page">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <HeaderIndex />
        <main>
            <DiscountBlock />
            <ProductsLine />
            <DiscountProducts />
            <Signup/>
        </main>
        <Footer class="section" />
    </div>
</template>

<script>
import HeaderIndex from '@/components/layout/IndexPage/HeaderIndex';
import DiscountBlock from '@/components/layout/IndexPage/DiscountBlock';
import DiscountProducts from '@/components/layout/IndexPage/DiscountProducts';
import Signup from '@/components/layout/IndexPage/Signup';

export default {
    components: {
        HeaderIndex,
        DiscountBlock,
        DiscountProducts,
        Signup,
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

footer {
    margin-top: 0 !important;
}

::v-deep {
    .section-page {
        width: 80%;
        max-width: 1920px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 1000px) {
        .section-page {
            width: 90% !important;
        }
    }
}
</style>