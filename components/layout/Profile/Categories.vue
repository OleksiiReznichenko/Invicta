<template>
    <div ref="categoriesList" class="categories-list section">
        <div class="active category">All</div>
        <div class="category">Technology</div>
        <div class="category">Beauty</div>
        <div class="category">Food</div>
        <div class="category">Clothes</div>
        <div class="category">Gaming</div>
        <div class="category">Streaming</div>
        <div class="category">Entertainment</div>
        <div class="category">Travel</div>
        <div class="category">Shopping</div>
        <div class="category">Wellness</div>
    </div>
</template>

<script>
export default {
    mounted () {
        this.categories = Array.from(document.querySelectorAll('.category'));

        // SELECT STATS CATEGORY
        this.$refs.categoriesList.addEventListener('click', (e) => {
            if (e.target.classList.contains('category')) {
                this.categories.forEach(el => {
                    el.classList.remove('active');
                })
                e.target.classList.add('active');
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.categories-list {
    display: flex;
    align-items: center;
    margin: 2rem auto 3.5rem;
    // width: 100%;
    overflow-x: scroll;
    -webkit-mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
    mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));

    @media only screen and (max-width: 850px) and (min-width: 600px) {
        width: 66%;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .active {
        background-color: lighten($color-grey, 2%) !important;
    }

    .category {
        cursor: pointer;
        padding: .5rem 1.5rem;
        border-radius: 50px;
        transition: all .3s;

        &:not(:last-of-type) {
            margin-right: .75rem;
        }

        @media only screen and (max-width: 850px) {
            font-size: 1.9rem;
            padding: 1rem 3.5rem;
        }
    }
}
</style>