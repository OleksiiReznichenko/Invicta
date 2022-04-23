<template>
  <div class="layout">
    <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
    <Navigation/>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/App/Navigation';

export default {
  components: {
      Navigation,
  },
    watch: {
        '$store.state.isLoggedIn'(newValue, oldValue) {
            setTimeout(() => {
                this.dropdownOpener = document.getElementById('dropdown-opener');
                this.dropdown = document.getElementById('dropdown');
                // this.dropdownFunctional(this.dropdownOpener, this.dropdown);
                this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav});
            }, 200);
        }
    },
    mounted () {
        this.dropdownOpener = document.getElementById('dropdown-opener');
        this.dropdown = document.getElementById('dropdown');
        this.nav = document.querySelector('.nav');
        this.navLeft = document.querySelector('.nav__left');
        this.navRight = document.querySelector('.nav__right');
        this.closeNavBtn = document.querySelector('.close-nav-btn');

        this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});
        // this.dropdownFunctional(this.dropdownOpener, this.dropdown);
        let prevWidth = window.outerWidth;

        window.addEventListener('resize', () => {
            if (prevWidth >= 600 && window.outerWidth < 600 ||
            prevWidth <= 600 && window.outerWidth > 600) {
                setTimeout(() => {
                    this.dropdownOpener = document.getElementById('dropdown-opener');
                    this.dropdown = document.getElementById('dropdown');
                    // this.dropdownFunctional(this.dropdownOpener, this.dropdown);
                    this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});

                    if (window.outerWidth <= 900 && window.outerWidth > 600) {
                        this.nav.style.width = '90%';
                        this.navLeft.style.transform = 'translate(0)';
                        this.navRight.style.transform = 'translate(0)';
                    }
                }, 200);
            }
            prevWidth = window.outerWidth;
        })
    },
}
</script>
