<template>
  <div class="layout">
    <!-- <Preloader/> -->
    <Navigation/>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation';

export default {
    components: {
        Navigation,
        // Preloader,
    },
}
</script>
