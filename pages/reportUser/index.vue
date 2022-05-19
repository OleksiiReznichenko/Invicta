<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">

        <div class="relative-container">
            <div class="report-id-page form-page section section-page">
                <div class="content">
                    <div class="page-sequence">
                        <nuxt-link to="/">Main</nuxt-link>
                        <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <span>Report User</span>
                    </div>
                    <!-- <div class="main-content"> -->
                        <h1 class="page-title">Report User</h1>

                        <div class="form-container">
                            <form action="#" class="form">
                                <div class="input-group">
                                    <label for="reason">Reason</label>
                                    <input class="full-width" v-model="reason" type="text" id="reason" placeholder="Misinformation" required>
                                </div>
                                <div class="input-group">
                                    <label for="info">Info</label>
                                    <!-- <input class="" v-model="info" type="text" id="info" placeholder="Provide accurate info" required> -->
                                    <textarea @input="autoGrow" v-model="info" id="info" name="info" cols="30" rows="3" wrap="soft" placeholder="Provide accurate info"></textarea>
                                </div>
                                <button type="submit" class="btn btn-gradient btn-medium"><span>Report</span></button>
                            </form>
                        </div>
                    <!-- </div> -->
                </div>
                <img src="@/assets/img/reportUserComposition.png" alt="Report" class="form-image">

                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GROW TEXTAREA ON TEXT WRAP
        autoGrow(e) {
            e.target.style.height = this.minHeight + "px";
            if (e.target.scrollHeight <= this.minHeight) {
                e.target.style.height = this.minHeight + "px";
            } else {
                e.target.style.height = (e.target.scrollHeight) + "px";
            }
        },
    },
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

    .form-image {
        height: auto;
        width: 83rem;
        right: 0%;
        bottom: 20.8rem;
        
        @media only screen and (max-width: 1100px) {
            // height: 110%;
            right: -5%;
        }
        
        // @media only screen and (max-width: 950px) {
        //     right: -13%;
        //     height: 105%;
        // }
        
        @media only screen and (max-width: 850px) {
            display: none;
        }
    }


    .content {
        min-height: 70vh;
        // min-height: 90vh;
        position: relative;
        z-index: 100;
        // margin: 0 auto;
            
        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        input,
        textarea {
            width: 37rem;
        }

        .page-title {
            margin-bottom: 1.75rem;
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