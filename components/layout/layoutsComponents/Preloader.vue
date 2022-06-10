<template>
    <div ref="preloader" class="preloader">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="preloader-content">
            <img src="@/assets/img/preloaderImage.svg" alt="Preloader image" class="preloader-image">
            <h2 class="preloader-percent">{{percentComp}}%</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent: 0
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRELOADER PERCENT
        percentComp() {
            return this.percent;
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // LIMIT MAXIMAL PERCENT TO 100% AND VANISH PRELOADER ON 100%
        addToPercent() {
            if (this.percent >= 100) {
                this.html.style.overflowY = 'visible';
                this.$refs.preloader.style.opacity = 0;

                // ADD 1 PERCENT EVERY 500 MS
                setTimeout(() => {
                    this.$refs.preloader.style.display = 'none';
                }, 500);
                return;
            } 
            this.percent += 1;

            requestAnimationFrame(this.addToPercent);
        }
    },

    mounted () {
        this.html = document.querySelector('html');
        this.addToPercent();
    },
}
</script>

<style lang="scss" scoped>
.preloader {
    background-color: #111111;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: 100vh;
    min-height: -webkit-fill-available;
    text-align: center;
    @include flex-center;
    transition: all .5s;

    &-image {
        width: 20rem;
        height: 20rem;
        animation: rotation 9s linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(-720deg);
        }
    }

    &-percent {
        font-size: 3rem;
    }
}
</style>