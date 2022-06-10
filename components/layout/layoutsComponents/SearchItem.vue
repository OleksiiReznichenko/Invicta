<template>
    <div @click="closeSearch" class="search-item">
        <div class="search-item-link">
            <img :src="image" alt="Image" class="item-image">
        </div>
        <div class="search-item-link">
            <div class="item-info">
                <h5 class="item-name">{{name}}</h5>
                <div class="item-small-info">
                    <span v-if="oldPrice" class="item-discount item-gradient">Save {{discount}}%</span>
                    <span class="item-in-stock">{{inStock}} in stock</span>
                    <span class="item-country">{{country}}</span>
                    <span class="item-price item-gradient">{{price}}$</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'name', 'inStock', 'country', 'price', 'oldPrice', 'id'],
    
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CALCULATE DISCOUNT BASED ON OLD PRICE
        discount() {
            if (this.oldPrice) {
                return Math.round(100 - this.price / this.oldPrice * 100);
            }
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE SEARCH CONTAINER AND GO TO THIS PRODUCT PAGE
        closeSearch() {
            this.searchResultsContainer.style.transition = 'all .2s';

            this.searchResultsContainer.style.opacity = 0;

            this.$router.push('/browse/' + this.id)

            setTimeout(() => {
                this.searchResultsContainer.style.display = 'none';
                this.searchResultsContainer.classList.remove('opened');
            }, 200);
        }
    },

    mounted () {
        // DOM
        this.searchResultsContainer = document.querySelector('.search-results-container');
        this.searchInput = document.getElementById('searchInput');
    },
}
</script>

<style lang='scss' scoped>
.search-item {
    display: flex;
    align-items: center;
    transition: all .3s;
    border-radius: 8px;
    padding: .5rem;
    cursor: pointer;

    &:hover {
        background-color: $color-grey-2;
    }

    &-link {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .item-image {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 1rem;
        margin-right: 1rem;
        object-fit: cover;

        @media only screen and (max-width: 900px) {
            width: 4rem;
            height: 4rem;
            margin-right: 2rem;
        }
    }

    .item-info {

        @media only screen and (max-width: 900px) {
            font-size: 1.6rem;
        }

        .item-name {
            font-size: 1.7rem;

            @media only screen and (max-width: 900px) {
                font-size: 2rem;
                margin-bottom: .5rem;
            }
        }

        .item-small-info {
            display: flex;
            align-items: center;
            white-space: nowrap;

            *:not(:last-child) {
                margin-right: 1rem;

                @media only screen and (max-width: 900px) {
                    margin-right: 1.5rem;
                }
            }

            .item-gradient {
                background: linear-gradient(135deg, #F037C7 0%, #744BDE 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 1.7rem;
                padding-top: 2px;
            }
        }
    }
}
</style>