<template>
    <div class="search-category">
       <div class="category-name-container">
            <h4 class="category-name">{{categoryName}} <span class="category-items-amount">({{categoryItemsAmount}})</span></h4>
            <div class="line"></div>
       </div>
        <div class="category-items">
            <SearchItem 
             v-for="item in categoryItems"
             :key="item.id + Math.random()"
             :id="item.id"
             :image='item.photo'
             :name='item.name'
             :inStock='item.amountInStock'
             :country='item.country'
             :price='item.price'
             :oldPrice='item.oldPrice'
            />
        </div>
    </div>
</template>

<script>
import SearchItem from '@/components/layout/layoutsComponents/SearchItem';

export default {
    components: {
        SearchItem,
    },

    props: ['categoryName', 'categoryItems'],
    
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CATEGORY ITEMS AMOUNT
        categoryItemsAmount() {
            return this.categoryItems.length 
        }
    },
}
</script>

<style lang='scss' scoped>
.search-category {

    .category-name-container {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        .line {
            background-color: $color-grey-2;
            height: 2px;
            border-radius: 5px;
            flex-grow: 1;
            margin-left: 1.5rem;
        }

        .category-name {
            font-weight: 500 !important;
            font-family: Montserrat;
            font-size: 1.9rem;

            @media only screen and (max-width: 1050px) {
                font-size: 2.2rem;
            }

            .category-items-amount {
                color: $color-orange;
            }
        }
    }

    .category-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-columns: 1fr;
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;

        @media only screen and (max-width: 1050px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media only screen and (max-width: 850px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>