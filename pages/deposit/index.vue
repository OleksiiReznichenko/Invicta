<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="relative-container">
            <div class="deposit-id-page form-page section section-page">
                <div class="content">
                    <div class="page-sequence">
                        <nuxt-link to="/">Main</nuxt-link>
                        <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <span>Deposit</span>
                    </div>
                    <!-- <div class="main-content"> -->
                        <h1 class="page-title">How much do you <br> want to deposit?</h1>
                        <span class="balance">5% one-time-fee is applied at checkout</span>

                        <div class="form-container">
                            <form action="#" class="form">
                                <div class="input-group">
                                    <label for="total">Total</label>
                                    <input v-model="total" type="number" id="total" placeholder="10" required>
                                    <h3 class="max-amount input-left-content">max 999<span class="span-grey">$</span></h3>
                                </div>
                                <div class="input-group">
                                    <label for="btcAddress">BTC address</label>
                                    <input v-model="btcAddress" type="text" id="btcAddress" placeholder="bc1wefwefdsfs2312312" required>
                                    <img src="@/assets/svg/workingBag.svg" alt="Bag" class="bag-icon input-left-content">
                                </div>
                                <button type="submit" class="btn btn-gradient btn-medium"><span>Deposit</span></button>
                            </form>
                        </div>
                    <!-- </div> -->
                </div>
                <img src="@/assets/img/withdrawComposition.png" alt="Pig" class="form-image">

                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.deposit-id-page {
    // min-height: 80vh;
    min-height: 95vh;
    height: 100%;

    .form-image {
        top: -15rem;
        right: -10rem;
        height: auto;
        width: 85rem;
            
        @media only screen and (max-width: 850px) {
            display: none;
        }
    }


    .content {
        min-height: 70vh;
        // min-height: 90vh;
        position: relative;
        z-index: 100;
            
        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        .span-green {
            color: $color-green;
        }

        .bag-icon {
            width: 1.75rem;
        }

        .max-amount {
            font-weight: 300 !important;
            color: $color-text-grey;
            font-size: 1.6rem;

            .span-grey {
                color: $color-text-grey-dark;
            }
        }

        #total {
            padding-right: 13rem;
        }

        #btcAddress {
            padding-right: 7rem;
        }

        .page-title {
            margin-bottom: 1.75rem;
            font-weight: 300 !important;
        }

        input,
        textarea {
            width: 37rem;
        }

        .form,
        .form-container {
            width: fit-content;
        }

        .form-container {
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>