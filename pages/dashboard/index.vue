<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="dashboard-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Dashboard</span>
                </div>
                <h1 class="page-title">Dashboard</h1>
                <div class="stats">
                    <div class="stat-item">
                        <div class="info">
                            <h2 class="number">0</h2>
                            <p>Total Sales</p>
                        </div>
                        <div class="icon-container">
                            <!-- <img src="@/assets/svg/" alt="" class="icon"> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dashboard-page {
    
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
    }
}
</style>