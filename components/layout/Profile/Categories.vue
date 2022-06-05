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
    props: ['baseArray'],

    data() {
        return {
            category: 'all',
            filteredArray: []
        }
    },

    mounted () {
        this.categoriesList = document.querySelector('.categories-list');
        this.categories = Array.from(document.querySelectorAll('.category'));
        this.$emit('getFilteredArray', this.baseArray);

        this.$store.dispatch('checkOverflowX', {el: this.categoriesList});

        // SELECT STATS CATEGORY
        this.$refs.categoriesList.addEventListener('click', (e) => {
            if (e.target.classList.contains('category')) {
                this.categories.forEach(el => {
                    el.classList.remove('active');
                });
                e.target.classList.add('active');
                this.category = e.target.textContent.toLowerCase();

                if (this.category === 'all') {
                    this.filteredArray = this.baseArray;
                } else {
                    this.filteredArray = this.baseArray.filter(el => {
                        if (el.category === this.category) {
                            return el;
                        }
                    })
                }
                this.$emit('getFilteredArray', this.filteredArray);
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
    -webkit-mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
    mask-image: linear-gradient(90deg,#000,#000 70%,rgba(255, 255, 255, 0));
    padding-bottom: 1rem;

    @media only screen and (max-width: 850px) and (min-width: 600px) {
        width: 66%;
    }

    @media only screen and (max-width: 850px) {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    &::-webkit-scrollbar {
        height: 6px;
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba($color-grey, .5);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 17px;
        background-color: lighten($color-grey-2, 15%);
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