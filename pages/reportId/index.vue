<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="report-id-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Report ID</span>
                </div>
                <!-- <div class="main-content"> -->

                    <h1 class="page-title">Report ID</h1>
                    <div class="report-info">
                        <span class="border-text-red report-status">open report</span>
                        <span class="report-id">PR0SW1JB4ZVB</span>
                    </div>

                    <div class="form-container">
                        <form action="#" class="form">
                            <div class="input-group">
                                <label for="category">Category</label>
                                <input class="full-width" v-model="category" type="text" id="category" placeholder="e. g. «Xbox Giftcards»" required>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="reporter">reporter</label>
                                    <input v-model="reporter" type="text" id="reporter" placeholder="Mar 24, 2022 08:32:00" required>
                                </div>
                                <div class="input-group">
                                    <label for="seller">Seller</label>
                                    <input v-model="seller" type="text" id="seller" placeholder="bc1wefwefdsfs2312312" required>
                                </div>
                            </div>
                            <div class="input-group">
                                <label for="cards">Cards</label>
                                <input class="full-width" v-model="cards" type="text" id="cards" placeholder="e. g. «Xbox Giftcards»" required>
                            </div>
                            <button type="submit" class="btn btn-gradient btn-medium"><span>Report</span></button>
                        </form>
                        <img src="@/assets/img/report.png" alt="Report" class="form-image">
                    </div>
                <!-- </div> -->
            </div>

            <Footer />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.corner-light {
    display: block !important;
    top: -15rem;
}

.report-id-page {
    // min-height: 80vh;
    min-height: 95vh;
    height: 100%;


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

        .page-title {
            margin-bottom: 1.75rem;
        }

        .report-info-mobile {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;

            @media only screen and (min-width: 850px) {
                display: none;
            }
        
            .report-status {
                padding: 0;
                color: $color-green;
            }

            .report-id {
                font-size: 2.4rem;
                color: white;
                margin-right: 2rem;
            }
        }

        .report-info {
            .desktop {
                @media only screen and (max-width: 850px) {
                    display: none;
                }
            }
        }
        
        .report-status {
            padding: 1rem 5rem;
            margin-right: 1rem;
        }
        
        .amount-in-wallet {
            padding: 1rem 3rem;
            margin-right: 1rem;
        }

        .report-id {
            color: $color-text-grey;
        }

        .user-info {
            display: flex;
            align-items: center;
            border-bottom: 1px solid $color-grey-2;
            padding-bottom: 1.75rem;
            margin-bottom: 1.75rem;
            
            @media only screen and (max-width: 850px) {
                padding-bottom: 2.25rem;
                margin-bottom: 2.25rem;
            }

            .user-rank {
                // padding: .3rem 1.2rem;
                padding: 5px 15px;
                margin-right: 1rem;
                color: $color-orange;
            }
        }

        .form-image {
            height: 120%;
            right: -4%;
            
            @media only screen and (max-width: 1100px) {
                height: 110%;
            }
            
            @media only screen and (max-width: 950px) {
                right: -13%;
                height: 105%;
            }
            
            @media only screen and (max-width: 850px) {
                display: none;
            }
        }

        .form-container {
            width: 100%;
        }

        .form {
            width: fit-content;
            
            // @media only screen and (max-width: 850px) {
            //     margin: 0 auto;
            // }
        }
    }
}
</style>