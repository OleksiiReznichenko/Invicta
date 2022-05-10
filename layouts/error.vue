<template>
  <div class="layout">
    <Navigation/>
    <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
    
    <div class="error-content">
        <div class="info">
            <img src="@/assets/img/logo.png" alt="Logo" class="logo">
            <h1>Sorry</h1>
            <p>
                we couldn’t find any <br> results for this search
            </p>
            <nuxt-link class="btn btn-transparent" to="/browse"><div class="background"></div><span>Back to browse</span></nuxt-link>
        </div>

        <img src="@/assets/img/sphereBigErrorPage.png" alt="Sphere big" class="sphere sphere-big">
        <img src="@/assets/img/sphereSmallErrorPage.png" alt="Sphere small" class="sphere sphere-small">
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/layout/layoutsComponents/Navigation';

export default {
    components: {
        Navigation,
    },
    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REINIT NAVIGATION DROPDOWN ON LOG IN & LOG OUT
        '$store.state.isLoggedIn'(newValue, oldValue) {
            setTimeout(() => {
                this.dropdownOpener = document.getElementById('dropdown-opener');
                this.dropdown = document.getElementById('dropdown');
                this.closeNavBtn = document.querySelector('.close-nav-btn');
                this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});
            }, 200);
        }
    },
    mounted () {
        // DOM
        this.dropdownOpener = document.getElementById('dropdown-opener');
        this.dropdown = document.getElementById('dropdown');
        this.nav = document.querySelector('.nav');
        this.navLeft = document.querySelector('.nav__left');
        this.navRight = document.querySelector('.nav__right');
        this.closeNavBtn = document.querySelector('.close-nav-btn');

        // INIT NAVIGATION DROPDOWN
        this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});


        // RESIZE

        let prevWidth = window.outerWidth;
        let prevHeight = window.outerHeight;

        window.addEventListener('resize', () => {
            if (prevWidth >= 850 && window.outerWidth < 850 ||
            prevWidth <= 850 && window.outerWidth > 850 ||
            prevHeight <= 600 && window.outerHeight > 600 ||
            prevHeight >= 600 && window.outerHeight < 600) {
                setTimeout(() => {
                    this.dropdownOpener = document.getElementById('dropdown-opener');
                    this.dropdown = document.getElementById('dropdown');
                    this.closeNavBtn = document.querySelector('.close-nav-btn');
                    this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});
                    
                    if (window.outerWidth > 600) {
                        this.nav.style.width = '90%';
                    }
                    
                    this.nav.style.position = 'absolute';
                    this.navLeft.style.transform = 'translate(0)';
                    this.navRight.style.transform = 'translate(0)';
                }, 200);
            }
            prevWidth = window.outerWidth;
            prevHeight = window.outerHeight;
        })
    },
}
</script>

<style lang="scss" scoped>
.layout, .error-content {
    width: 100% !important;
    height: 100vh !important;
    overflow: hidden !important;
    position: relative !important;
}

.info {
    @include abs-center;
    top: 42% !important;
    text-align: center;
    z-index: 100;
}

h1 {
    font-size: 14.5rem;
    line-height: 0.8;
}

p {
    font-size: 2.3rem;
    margin-top: 3rem;
    margin-bottom: 3.5rem;
    font-weight: 500;
}

.btn {
    padding: 1.35rem 5.45rem;

    .background {
        background-image: linear-gradient(to right bottom, #131215, #111112);
    }
}

.logo {
    width: 5.5rem;
    height: 5.5rem;
}

.sphere {
    position: absolute;

    &-big {
        left: 0rem;
        bottom: 0rem;
        width: 37rem;
        height: 37rem;
    }

    &-small {
        right: 0rem;
        top: 55%;
        transform: translateY(-50%);
        width: 37rem;
        height: 45rem;

        @media only screen and (max-width: 900px) and (min-height: 800px),
        only screen and (max-width: 600px) {
            top: 25%;
        }

        @media only screen and (max-width: 600px) {
            right: -5rem;
        }
    }
}


</style>
