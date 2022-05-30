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

                <span class="report-status">Opened report</span>
                <h1 class="page-title">PR0SW1JB4ZVB</h1>
                <!-- <div class="report-info">
                    <span class="border-text-red report-status">open report</span>
                    <span class="report-id">PR0SW1JB4ZVB</span>
                </div> -->

                <div class="form-container">
                    <form @submit.prevent action="#" class="form">
                        <div class="input-group">
                            <label for="category">Category</label>
                            <input class="full-width" v-model="category" type="text" id="category" placeholder="e. g. «Xbox Giftcards»" readonly>
                        </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="reporter">Reporter</label>
                                <input v-model="reporter" type="text" id="reporter" placeholder="Mar 24, 2022 08:32:00" readonly>
                            </div>
                            <div class="input-group">
                                <label for="seller">Seller</label>
                                <input v-model="seller" type="text" id="seller" placeholder="bc1wefwefdsfs2312312" readonly>
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="cards">Cards</label>
                            <input class="full-width" v-model="cards" type="text" id="cards" placeholder="e. g. «Xbox Giftcards»" readonly>
                        </div>
                        <div class="input-group textarea-group">
                            <label for="description">Description</label>
                            <textarea v-model="description" ref="descriptionInput" class="input-validate" id="description" name="description" cols="30" rows="3" wrap="soft" placeholder="Enter your description" readonly></textarea>
                        </div>
                        <button type="submit" class="btn btn-gradient btn-medium"><span>Close Report</span></button>
                        <button type="submit" class="btn btn-transparent btn-medium"><div class="background"></div><span>Back to dashboard</span></button>
                    </form>
                    <img src="@/assets/img/report.png" alt="Report" class="form-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn'],

    data() {
        return {
            category: '',
            reporter: '',
            seller: '',
            cards: '',
            description: '',
        }
    },
}
</script>

<style lang="scss" scoped>
.corner-light {
    display: block !important;
    top: -15rem;
}

.report-id-page {
    // min-height: calc(100vh - 11rem);
    // min-height: 75rem;
    margin-bottom: 5rem;
            
    // @media only screen and (max-width: 1000px) {
    //     margin-bottom: 5rem;
    // }
            
    @media only screen and (max-width: 850px) {
        margin-bottom: 15rem;
    }


    .content {
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
        
        .report-status {
            display: inline-block;
            margin-bottom: 1rem;
            color: $color-green;
        }

        .btn {
            .background {
                background-color: $color-grey-dark;
            }

            @media only screen and (max-width: 400px) {
                padding: 1.4rem 2.5rem;
            }
        }

        .btn-gradient {
            margin-right: 1.5rem;
        }

        .form-image {
            height: 100%;
            right: -6%;
            
            @media only screen and (max-width: 1100px) {
                height: 90%;
            }
            
            @media only screen and (max-width: 950px) {
                right: -10%;
                height: 95%;
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
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>