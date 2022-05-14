<template>
  <div class="toggle-container term-item">
      <div class="container title-container">
          <h4 class="title">{{title}}</h4>
          <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
      </div>
      <div class="container description-container">
          <p class="description">{{description}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'description']
}
</script>

<style lang="scss" scoped>
.term-item {
    border-bottom: 1.5px solid $color-grey-2;

    .container {
        padding: 0 3.5rem;

        @media only screen and (max-width: 600px) {
            padding: 0 2.5rem;
        }
    }

    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        padding: 3rem 3.5rem;

        @media only screen and (max-width: 600px) {
            padding: 3.5rem 2.5rem;
        }

        .title {
            font-weight: 600 !important;
            font-size: 2rem;

            @media only screen and (max-width: 600px) {
                font-size: 2.2rem;
            }
        }

        .arrow {
            transition: all .3s;
        }
    }

    .description-container {
        width: 80%;
        padding-bottom: 3rem;
        display: none;

        @media only screen and (max-width: 600px) {
            width: 95%;
            padding-bottom: 3.5rem;
            font-size: 1.8rem;
        }
    }
}
</style>