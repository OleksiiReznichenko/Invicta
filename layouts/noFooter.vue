<template>
  <div class="layout">
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
}
</script>
