<template>
    <div class="section custom-banner">
        <div class="overlay">
            <button class="btn btn-gradient"><span>Edit banners</span></button>
        </div>
        <div class="info">
            <h1 class="title">Hot Sale</h1>
            <p class="subheading">Most bought this month "The North Face"</p>
            <nuxt-link to="/browse" class="btn btn-white">Browse products</nuxt-link>
        </div>
        <img :src="image" alt="" class="image">
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: '/projects/Invicta/CustomBannerComposition.png'
        }
    },
}
</script>

<style lang="scss" scoped>
.custom-banner {
    background-color: $color-pink;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    white-space: nowrap;

    @media only screen and (max-width: 850px) {
        width: 66%;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    .overlay {
        display: none;
    }

    .info {
        padding: 4.75rem 6rem;
        position: relative;
        z-index: 100;

        @media only screen and (max-width: 850px) {
            text-align: center;
        }

        .title {
            text-transform: uppercase;
            font-size: 7rem;

            @media only screen and (max-width: 400px) {
                font-size: 6.5rem;
            }
        }

        .subheading {
            font-size: 1.9rem;

            @media only screen and (max-width: 400px) {
                font-size: 1.75rem;
            }
        }

        .btn {
            font-weight: 400 !important;
            padding: 1rem 5rem;
            margin-top: 1.5rem;
        }
    }

    .image {
        width: 55rem;
        margin-right: 4rem;

        @media only screen and (max-width: 1100px) {
            position: absolute;
            bottom: 0;
            right: 0;
        }

        @media only screen and (max-width: 850px) {
            display: none;
        }
    }
}
</style>