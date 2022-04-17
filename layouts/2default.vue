<template>
  <div class="layout">
    <!-- <Preloader/> -->
    <Navigation/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default {
    components: {
        Navigation,
        Footer,
        // Preloader,
    },
}
</script>
