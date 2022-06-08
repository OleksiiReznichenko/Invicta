<template>
    <div class="section custom-banner">
        <AddNewBanner v-if="pageEdit" banner='topBanner' class="add-image-component" />
        <div class="overlay">
            <button @click="openWindow" class="btn btn-gradient"><span>Edit banner</span></button>
        </div>
        <div v-if="!user.topBanner" key="info" class="info">
            <h1 class="title">Hot Sale</h1>
            <p class="subheading">Most bought this month "The North Face"</p>
            <nuxt-link to="/browse" class="btn btn-white">Browse products</nuxt-link>
        </div>
        <img v-if="user.topBanner" key="bannerImage" :src="user.topBanner" alt="" class="new-banner-image">
        <img v-if="!user.topBanner" key="bannerRightImage" src="@/assets/img/CustomBannerComposition.png" alt="Banner image" class="image">
    </div>
</template>

<script>
import AddNewBanner from '@/components/layout/Profile/AddNewBanner';

export default {
    props: ['pageEdit', 'user'],

    components: {
        AddNewBanner,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER
        // user() {
            // return this.userObject;
            // return this.$store.state.users.users.find(el => {
            //     if (el.id === this.$store.state.user.id) {
            //         return el;
            //     }
            // })
        // },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE WINDOW
        openWindow() {
            if (this.addImageWindow?.classList.contains('opened')) return;
            this.addImageWindow.style.display = 'block';
            this.addImageWindow.classList.add('opened');
            setTimeout(() => {
                this.addImageWindow.style.opacity = 1;
                this.navigationRoot.style.display = 'none';
            }, 10)
        },
    },

    mounted () {
        this.addImageWindow = document.querySelector('.add-image-component');
        this.navigationRoot = document.querySelector('.navigation-root');
    },
}
</script>

<style lang="scss" scoped>
.new-banner-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
}

.custom-banner {
    background-color: $color-pink;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    white-space: nowrap;
    min-height: 23rem;

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